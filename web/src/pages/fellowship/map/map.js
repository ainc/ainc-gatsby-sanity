import React, { useState, useEffect } from "react";
import { client } from "./sanityClient";
import "./button.css";

// Smooth zoom function
const smoothZoomToLocation = (map, targetPosition, targetZoom) => {
  const currentZoom = map.getZoom();
  const currentCenter = map.getCenter();

  // Pan to the target location
  map.panTo(targetPosition);

  // Gradually change the zoom level
  const zoomStep = (targetZoom - currentZoom) / 10; // Adjust the number of steps for smoother/faster zoom
  let step = 0;

  const zoomInterval = setInterval(() => {
    if (step >= 10) {
      clearInterval(zoomInterval);
      return;
    }

    const newZoom = currentZoom + zoomStep * step;
    map.setZoom(newZoom);
    step++;
  }, 50); // Adjust the interval for smoother/faster zoom
};

const Map = () => {
  const [info, setInfo] = useState({ title: "", description: "", website: "" });
  const [map, setMap] = useState(null);
  const [markers, setMarkers] = useState([]);
  const [selectedMarkerIndex, setSelectedMarkerIndex] = useState(null);
  const [fellowshipData, setFellowshipData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State to control sidebar visibility
  const [isClosing, setIsClosing] = useState(false); // State to track closing animation

  // Fetch fellowship data from Sanity
  useEffect(() => {
    const fetchFellowshipData = async () => {
      try {
        const query = `*[_type == "fellowshipPortfolio"] {
          companyName,
          companyURL,
          description,
          location,
          fellowshipImage {
            asset -> {
              url
            }
          }
        }`;
        const data = await client.fetch(query);
        setFellowshipData(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchFellowshipData();
  }, []);

  // Load Google Maps script and initialize the map
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
        center: { lat: 38.796804, lng: -96.624927 }, // Middle of CONUS
        zoom: 4,
      };

      const mapInstance = new window.google.maps.Map(
        document.getElementById("map"),
        mapOptions,
      );
      setMap(mapInstance);

      // Define Kentucky bounds
      const kentuckyBounds = new window.google.maps.LatLngBounds(
        new window.google.maps.LatLng(36.4972, -89.0772), // SW corner
        new window.google.maps.LatLng(39.1476, -83.6756), // NE corner
      );

      // Function to calculate scaled dimensions with min and max constraints
      const calculateScaledDimensions = (width, height, minSize, maxSize) => {
        const ratio = Math.min(maxSize / width, maxSize / height); // Calculate scaling ratio for max size
        const scaledWidth = width * ratio;
        const scaledHeight = height * ratio;

        // Ensure the logo is not smaller than the min size
        if (scaledWidth < minSize || scaledHeight < minSize) {
          const minRatio = Math.max(minSize / width, minSize / height); // Calculate scaling ratio for min size
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

      // Function to load image and get dimensions
      const loadImageSize = (url) => {
        return new Promise((resolve) => {
          const img = new Image();
          img.onload = () => {
            resolve({ width: img.width, height: img.height });
          };
          img.src = url;
        });
      };

      // Add markers only for companies with a location
      const addMarkers = async () => {
        const newMarkers = await Promise.all(
          fellowshipData.map(async (fellowship, index) => {
            if (fellowship.location) {
              const imageSize = await loadImageSize(
                fellowship.fellowshipImage.asset.url,
              );

              // Define minimum and maximum sizes for the marker icon
              const minSize = 15; // Minimum size (e.g., 30px)
              const maxSize = 24; // Maximum size (e.g., 50px)
              const scaledSize = calculateScaledDimensions(
                imageSize.width,
                imageSize.height,
                minSize,
                maxSize,
              );

              const marker = new window.google.maps.Marker({
                position: {
                  lat: fellowship.location.lat,
                  lng: fellowship.location.lng,
                },
                map: mapInstance,
                title: fellowship.companyName,
                icon: {
                  url: fellowship.fellowshipImage.asset.url,
                  size: new window.google.maps.Size(
                    scaledSize.width,
                    scaledSize.height,
                  ), // Use scaled size
                  scaledSize: new window.google.maps.Size(
                    scaledSize.width,
                    scaledSize.height,
                  ), // Optional: Ensure the image is scaled
                  anchor: new window.google.maps.Point(
                    scaledSize.width / 2,
                    scaledSize.height / 2,
                  ), // Center the icon
                },
              });

              marker.addListener("click", () => {
                setSelectedMarkerIndex(index);
                setInfo({
                  title: fellowship.companyName,
                  description: fellowship.description,
                  website: fellowship.companyURL,
                });
                setIsSidebarOpen(true); // Open the sidebar

                // Smoothly zoom into the marker's location
                smoothZoomToLocation(mapInstance, marker.getPosition(), 10);
              });

              return { marker, index }; // Store the marker and its original index
            }
            return null; // Skip companies without a location
          }),
        );

        setMarkers(newMarkers.filter((item) => item !== null)); // Remove null entries
      };

      addMarkers();

      // Add custom zoom-to-Kentucky button
      const zoomKentuckyButton = document.createElement("button");
      zoomKentuckyButton.textContent = "Zoom to Kentucky";
      zoomKentuckyButton.classList.add("zoom-button");
      zoomKentuckyButton.addEventListener("click", () => {
        mapInstance.fitBounds(kentuckyBounds); // Fit the map to Kentucky's bounds
      });

      // Add custom zoom-out button
      const zoomOutButton = document.createElement("button");
      zoomOutButton.textContent = "Zoom Out";
      zoomOutButton.classList.add("zoom-button");
      zoomOutButton.addEventListener("click", () => {
        mapInstance.setZoom(4); // Set zoom level to a broader region
        mapInstance.setCenter({ lat: 38.796804, lng: -96.624927 }); // Center back to the continental U.S.
      });

      // Create a div to hold the buttons
      const controlDiv = document.createElement("div");
      controlDiv.classList.add("custom-controls");

      controlDiv.appendChild(zoomKentuckyButton);
      controlDiv.appendChild(zoomOutButton);

      // Add the buttons to the map
      mapInstance.controls[window.google.maps.ControlPosition.TOP_LEFT].push(
        controlDiv,
      );
    };

    loadGoogleMapsScript();
  }, [fellowshipData]);

  const handleCompanyClick = (companyIndex) => {
    setSelectedMarkerIndex(companyIndex);
    const company = fellowshipData[companyIndex];
    setInfo({
      title: company.companyName,
      description: company.description,
      website: company.companyURL,
    });
    setIsSidebarOpen(true); // Open the sidebar

    // Find the marker for the clicked company
    const markerData = markers.find((item) => item.index === companyIndex);
    if (markerData && company.location) {
      // Smoothly zoom into the clicked company's location
      smoothZoomToLocation(map, markerData.marker.getPosition(), 10);
    }
  };

  const closeSidebar = () => {
    setIsClosing(true); // Start closing animation

    // Zoom out to the default view
    if (map) {
      smoothZoomToLocation(
        map,
        { lat: 38.796804, lng: -96.624927 }, // Default center (middle of CONUS)
        4, // Default zoom level
      );
    }

    setTimeout(() => {
      setIsSidebarOpen(false); // Remove sidebar from DOM after animation
      setIsClosing(false); // Reset closing state
    }, 300); // Match the duration of the CSS transition
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  // Split fellowshipData into 4 rows
  const splitIntoRows = (data, rows) => {
    const result = [];
    const itemsPerRow = Math.ceil(data.length / rows);
    for (let i = 0; i < rows; i++) {
      result.push(data.slice(i * itemsPerRow, (i + 1) * itemsPerRow));
    }
    return result;
  };

  const rows = splitIntoRows(fellowshipData, 4);

  return (
    <div>
      {/* Scrolling Logos */}
      <div className="grid-container">
        {rows.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className={`grid-row ${rowIndex % 2 === 1 ? "offset" : ""}`}
          >
            {row.map((fellowship, index) => (
              <div
                key={index}
                className="grid-item"
                onClick={() =>
                  handleCompanyClick(fellowshipData.indexOf(fellowship))
                }
              >
                <img
                  src={fellowship.fellowshipImage.asset.url}
                  alt={fellowship.companyName}
                />
              </div>
            ))}
            {/* Duplicate logos for seamless looping */}
            {row.map((fellowship, index) => (
              <div
                key={`duplicate-${index}`}
                className="grid-item"
                onClick={() =>
                  handleCompanyClick(fellowshipData.indexOf(fellowship))
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

      {/* Map and Sidebar */}
      <div style={{ display: "flex", position: "relative" }}>
        {/* Conditionally render the sidebar */}
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

        {/* Map */}
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
