import React, { useState, useEffect } from "react";
import { client } from "./sanityClient";
import "./button.css";

// Smooth zoom function
const smoothZoomToLocation = (map, targetPosition, targetZoom) => {
  const currentZoom = map.getZoom();
  const currentCenter = map.getCenter();

  map.panTo(targetPosition);

  const zoomStep = (targetZoom - currentZoom) / 10;
  let step = 0;

  const zoomInterval = setInterval(() => {
    if (step >= 10) {
      clearInterval(zoomInterval);
      return;
    }

    const newZoom = currentZoom + zoomStep * step;
    map.setZoom(newZoom);
    step++;
  }, 50);
};

const Map = () => {
  const [info, setInfo] = useState({ title: "", description: "", website: "" });
  const [map, setMap] = useState(null);
  const [markers, setMarkers] = useState([]);
  const [selectedMarkerIndex, setSelectedMarkerIndex] = useState(null);
  const [allFellowshipData, setAllFellowshipData] = useState([]);
  const [filteredMapData, setFilteredMapData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [allFilters, setAllFilters] = useState([]);
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [filterBoxVisible, setFilterBoxVisible] = useState(false);
  const [isFilterBoxClosing, setIsFilterBoxClosing] = useState(false);

  // Fetch data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [fellowships, filters] = await Promise.all([
          client.fetch(`*[_type == "fellowshipPortfolio"] {
            companyName,
            companyURL,
            description,
            location,
            fellowshipImage {
              asset -> {
                url
              }
            }, 
            "filters": filters[]->{ name, slug }
          }`),
          client.fetch(`*[_type == "filter"] { name, slug }`),
        ]);

        setAllFellowshipData(fellowships);
        setFilteredMapData(fellowships);
        setAllFilters(filters);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Filter map data when filters change
  useEffect(() => {
    if (selectedFilters.length === 0) {
      setFilteredMapData(allFellowshipData);
    } else {
      const filtered = allFellowshipData.filter((company) =>
        company.filters?.some((filter) =>
          selectedFilters.includes(filter.slug.current),
        ),
      );
      setFilteredMapData(filtered);
    }
  }, [selectedFilters, allFellowshipData]);

  // Toggle filter selection
  const handleFilterToggle = (filterSlug) => {
    setSelectedFilters((prev) =>
      prev.includes(filterSlug)
        ? prev.filter((slug) => slug !== filterSlug)
        : [...prev, filterSlug],
    );
  };

  // Reset all filters
  const resetFilters = () => {
    setSelectedFilters([]);
  };

  // Toggle filter box with animation
  const toggleFilterBox = () => {
    if (filterBoxVisible) {
      setIsFilterBoxClosing(true);
      setTimeout(() => {
        setFilterBoxVisible(false);
        setIsFilterBoxClosing(false);
      }, 300);
    } else {
      setFilterBoxVisible(true);
    }
  };

  // Initialize map
  useEffect(() => {
    const loadGoogleMapsScript = () => {
      if (!window.google) {
        const script = document.createElement("script");
        script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDGO8995cNMvmWZ8rQPK_GZNvUEUE-zUP8&callback=initMap`;
        script.async = true;
        script.defer = true;
        document.head.appendChild(script);
      } else {
        initMap();
      }
    };

    window.initMap = () => {
      const mapOptions = {
        center: { lat: 38.796804, lng: -96.624927 },
        zoom: 4,
      };

      const mapInstance = new window.google.maps.Map(
        document.getElementById("map"),
        mapOptions,
      );
      setMap(mapInstance);

      // Kentucky bounds and controls
      const kentuckyBounds = new window.google.maps.LatLngBounds(
        new window.google.maps.LatLng(36.4972, -89.0772),
        new window.google.maps.LatLng(39.1476, -83.6756),
      );

      // Add custom controls
      const zoomKentuckyButton = document.createElement("button");
      zoomKentuckyButton.textContent = "Zoom to Kentucky";
      zoomKentuckyButton.classList.add("zoom-button");
      zoomKentuckyButton.addEventListener("click", () => {
        mapInstance.fitBounds(kentuckyBounds);
      });

      const zoomOutButton = document.createElement("button");
      zoomOutButton.textContent = "Zoom Out";
      zoomOutButton.classList.add("zoom-button");
      zoomOutButton.addEventListener("click", () => {
        mapInstance.setZoom(4);
        mapInstance.setCenter({ lat: 38.796804, lng: -96.624927 });
      });

      const controlDiv = document.createElement("div");
      controlDiv.classList.add("custom-controls");
      controlDiv.appendChild(zoomKentuckyButton);
      controlDiv.appendChild(zoomOutButton);
      mapInstance.controls[window.google.maps.ControlPosition.TOP_LEFT].push(
        controlDiv,
      );
    };

    loadGoogleMapsScript();
  }, []);

  // Update markers based on filtered map data
  useEffect(() => {
    if (!map || !filteredMapData.length) return;

    const loadImageSize = (url) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => {
          resolve({ width: img.width, height: img.height });
        };
        img.src = url;
      });
    };

    const calculateScaledDimensions = (width, height, minSize, maxSize) => {
      const ratio = Math.min(maxSize / width, maxSize / height);
      const scaledWidth = width * ratio;
      const scaledHeight = height * ratio;

      if (scaledWidth < minSize || scaledHeight < minSize) {
        const minRatio = Math.max(minSize / width, minSize / height);
        return {
          width: width * minRatio,
          height: height * minRatio,
        };
      }

      return {
        width: scaledWidth,
        height: scaledHeight,
      };
    };

    const addMarkers = async () => {
      // Clear existing markers
      markers.forEach(({ marker }) => marker.setMap(null));

      const newMarkers = await Promise.all(
        filteredMapData.map(async (fellowship, index) => {
          if (!fellowship.location) return null;

          const imageSize = await loadImageSize(
            fellowship.fellowshipImage.asset.url,
          );
          const scaledSize = calculateScaledDimensions(
            imageSize.width,
            imageSize.height,
            15,
            24,
          );

          const marker = new window.google.maps.Marker({
            position: {
              lat: fellowship.location.lat,
              lng: fellowship.location.lng,
            },
            map,
            title: fellowship.companyName,
            icon: {
              url: fellowship.fellowshipImage.asset.url,
              size: new window.google.maps.Size(
                scaledSize.width,
                scaledSize.height,
              ),
              scaledSize: new window.google.maps.Size(
                scaledSize.width,
                scaledSize.height,
              ),
              anchor: new window.google.maps.Point(
                scaledSize.width / 2,
                scaledSize.height / 2,
              ),
            },
          });

          marker.addListener("click", () => {
            setSelectedMarkerIndex(index);
            setInfo({
              title: fellowship.companyName,
              description: fellowship.description,
              website: fellowship.companyURL,
            });
            setIsSidebarOpen(true);
            smoothZoomToLocation(map, marker.getPosition(), 10);
          });

          return { marker, index };
        }),
      );

      setMarkers(newMarkers.filter((item) => item !== null));
    };

    addMarkers();
  }, [filteredMapData, map]);

  // Helper function for logo grid
  const splitIntoRows = (data, rows) => {
    const result = [];
    const itemsPerRow = Math.ceil(data.length / rows);
    for (let i = 0; i < rows; i++) {
      result.push(data.slice(i * itemsPerRow, (i + 1) * itemsPerRow));
    }
    return result;
  };

  const handleCompanyClick = (companyIndex) => {
    setSelectedMarkerIndex(companyIndex);
    const company = allFellowshipData[companyIndex];
    setInfo({
      title: company.companyName,
      description: company.description,
      website: company.companyURL,
    });
    setIsSidebarOpen(true);

    const markerData = markers.find((item) => item.index === companyIndex);
    if (markerData && company.location) {
      smoothZoomToLocation(map, markerData.marker.getPosition(), 10);
    }
  };

  const closeSidebar = () => {
    setIsClosing(true);
    if (map) {
      smoothZoomToLocation(map, { lat: 38.796804, lng: -96.624927 }, 4);
    }
    setTimeout(() => {
      setIsSidebarOpen(false);
      setIsClosing(false);
    }, 300);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const logoRows = splitIntoRows(allFellowshipData, 4);

  return (
    <div>
      {/* Scrolling Logos (always shows all companies) */}
      <div className="grid-container">
        {logoRows.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className={`grid-row ${rowIndex % 2 === 1 ? "offset" : ""}`}
          >
            {row.map((fellowship, index) => (
              <div
                key={index}
                className="grid-item"
                onClick={() =>
                  handleCompanyClick(allFellowshipData.indexOf(fellowship))
                }
              >
                <img
                  src={fellowship.fellowshipImage.asset.url}
                  alt={fellowship.companyName}
                />
              </div>
            ))}
            {row.map((fellowship, index) => (
              <div
                key={`duplicate-${index}`}
                className="grid-item"
                onClick={() =>
                  handleCompanyClick(allFellowshipData.indexOf(fellowship))
                }
              >
                <img
                  src={fellowship.fellowshipImage.asset.url}
                  alt={fellowship.companyName}
                />
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Filter Toggle Button */}
      <div className="button-container" style={{ justifyContent: "center" }}>
        <button onClick={toggleFilterBox} className="filter-toggle-button">
          {filterBoxVisible ? "Hide Filters" : "Show Filters"}
        </button>
      </div>

      {/* Filter Box with Animation */}
      <div
        className={`filter-container ${filterBoxVisible ? "visible" : ""} ${isFilterBoxClosing ? "closing" : ""}`}
      >
        <h3>Filter by Categories:</h3>
        {allFilters.length > 0 ? (
          <>
            <div className="filter-options">
              {allFilters.map((filter) => (
                <label key={filter.slug.current} className="filter-label">
                  <input
                    type="checkbox"
                    checked={selectedFilters.includes(filter.slug.current)}
                    onChange={() => handleFilterToggle(filter.slug.current)}
                  />
                  <span className="filter-name">{filter.name}</span>
                </label>
              ))}
            </div>
            <div
              className="button-container"
              style={{ justifyContent: "center" }}
            >
              <button onClick={resetFilters}>Reset Filters</button>
            </div>
          </>
        ) : (
          <p>No filter categories available</p>
        )}
      </div>

      {/* Map and Sidebar */}
      <div style={{ display: "flex", position: "relative" }}>
        {(isSidebarOpen || isClosing) && (
          <div
            className={`sidebar ${isSidebarOpen && !isClosing ? "open" : ""}`}
          >
            <button
              onClick={closeSidebar}
              style={{ float: "none", cursor: "pointer", fontSize: "18px" }}
            >
              &times;
            </button>
            <h2>{info.title}</h2>
            <p>{info.description}</p>
            {info.website && (
              <a href={info.website} target="_blank" rel="noopener noreferrer">
                <button style={{ marginTop: "10px" }}>Visit Website</button>
              </a>
            )}
          </div>
        )}
        <div
          id="map"
          className={`map-container ${isSidebarOpen ? "with-sidebar" : ""}`}
          style={{ width: "100%", height: "500px" }}
        />
      </div>
      <div>
        <p> </p>
      </div>
    </div>
  );
};

export default Map;
