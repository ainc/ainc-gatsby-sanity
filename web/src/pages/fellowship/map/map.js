//map.js
import React, { useEffect, useState } from "react";
import podchaserFavicon from "/src/images/favicons/podchaser.png";
import ezturnFavicon from "/src/images/favicons/ezturn.png";
import aincFav from "/src/images/favicons/ainc.png";
import swellHealthFav from "/src/images/favicons/swellHealth.jpg";
import "./button.css";

const Map = () => {
  const [info, setInfo] = useState(""); // State to store info text
  const [map, setMap] = useState(null); // State to store map instance

  const companyInfo = [
    {
      title: "Awesome Inc HQ",
      description: "The headquarter of Awesome Inc, a tech and innovation hub.",
      favicon: aincFav,
    },
    {
      title: "Swell Health",
      description:
        "Swell is developing a mental health platform for military families.",
      favicon: swellHealthFav,
    },
    {
      title: "Podchaser",
      description: "Podchaser is a podcast rating and database solution.",
      favicon: podchaserFavicon,
    },
    // Add more company details as necessary
  ];

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
        center: { lat: 38.796804, lng: -96.624927 }, //middle of conus
        zoom: 4,
        //mapTypeId: "satellite"
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

      const locations = [
        {
          lat: 38.0421659,
          lng: -84.4924395,
          title: "Awesome Inc HQ", //lex ky
          description:
            "The headquarter of Awesome Inc, a tech and innovation hub.",
          icon: aincFav,
        },
        {
          lat: 36.5256658,
          lng: -87.3579451,
          title: "Swell Health?",
          description:
            "Swell is developing a preventative mental health platform for military families that scales beyond the base-level access issues and the global therapist shortage through a combo of app-based self-guided care and free outcome-driven telehealth therapy.",
          icon: swellHealthFav,
        },
        {
          lat: 40.1071448,
          lng: -75.1188899,
          title: "Sword Performance",
          description:
            "Sword is a performance hydration drink. It’s simple formula is designed to improve your performance by delaying the onset of fatigue. Created by two doctors who specialize in athletics, Sword more effectively hydrates, contains no artificial ingredients or colors, and optimally fuels your body so you can exercise stronger, longer.",
        },
        {
          lat: 38.0192537,
          lng: -84.4877978,
          title: "Hippo Manager",
          description:
            "Hippo Manager is an easy to use, customizable cloud-based veterinary practice software that helps veterinarians and vet professionals manage their practices by making software a seamless part of their business. Our solution covers all aspects of operating a practice including appointment scheduling, medical records, inventory management and billing.",
          iconURL: "https://www.hippomanager.com/favicon.ico",
        },
        {
          lat: 38.2534726,
          lng: -85.7369069,
          title: "Virtual Peaker",
          description:
            "Virtual Peaker is a software platform that manages residential electric demand. It applies machine learning and real-time control to internet-enabled appliances to reduce demand while minimizing negative impact to the residential customer. The platform is accessed through a web browser, and has tailored portals for utility and residential users.",
        },
        {
          lat: 35.3444095,
          lng: -97.5531956,
          title: "Podchaser",
          description:
            "Podchaser is the cross-platform ratings and database solution for the growing world of podcasting.",
          icon: podchaserFavicon,
        },
        {
          lat: 38.2749119,
          lng: -85.7071535,
          title: "Fresh Fry",
          description:
            "At FreshFry, we strive to simplify complex oil filtering systems. The FreshFry Pod is a safe and easier way to replenish and extend the life of your frying oil. The Pod works overnight by capturing and removing the impurities that make your oil smoke, look dark, and taste bitter.",
        },
        {
          lat: 38.0462172,
          lng: -84.4989796,
          title: "EZ Turn",
          description:
            "With EZ Turn's EZ Scheduler, housing unit staff will be more efficient and give their property managers more free time to focus on different tasks.",
          icon: ezturnFavicon,
        },
        {
          lat: 45.4523924,
          lng: -122.7920225,
          title: "OmniLife",
          description:
            "Our SaaS offers an ability to transplant additional organs by reducing donated organ waste.",
        },
        {
          lat: 38.2436724,
          lng: -85.7767633,
          title: "Kare",
          description:
            "Disruptive innovation in the oral health care space, is the business Kare is in. We achieve this through our concierge mobile dental business and our mobile application technologies that solve the access to oral health care barrier for the uninsured and underinsured of America.",
        },
        {
          lat: 38.2844791,
          lng: -85.8232003,
          title: "EZ-Chow",
          description:
            "An all-in-one digital customer engagement platform for restaurants and hospitality companies to increase their off-premise dining revenues and lower their costs.",
        },
        {
          lat: 37.1058909,
          lng: -84.0972516,
          title: "Fair Chance Works PBC",
          description:
            "Soft Skills builder and feedback educational tool for workforce development and personal growth.",
        },
      ];

      const markers = locations.map((location) => {
        const marker = new window.google.maps.Marker({
          position: { lat: location.lat, lng: location.lng },
          map: mapInstance,
          title: location.title,
          icon: {
            url: location.icon, //iconPath
            scaledSize: new window.google.maps.Size(36, 36),
          },
        });

        marker.addListener("click", () => {
          setInfo({ title: location.title, description: location.description });
        });

        return marker;
      });

      mapInstance.addListener("zoom_changed", () => {
        const zoom = mapInstance.getZoom();
        const scaleFactor = zoom / 10; // Adjust scaling factor as needed

        markers.forEach((marker, index) => {
          marker.setIcon({
            url: locations[index].icon,
            scaledSize: new window.google.maps.Size(
              40 * scaleFactor,
              40 * scaleFactor,
            ),
          });
        });
      });

      // Add custom zoom-to-Kentucky button inside the map controls
      const zoomKentuckyButton = document.createElement("button");
      zoomKentuckyButton.textContent = "Zoom to Kentucky";
      zoomKentuckyButton.classList.add("zoom-button");
      zoomKentuckyButton.addEventListener("click", () => {
        mapInstance.fitBounds(kentuckyBounds); // Fit the map to Kentucky's bounds
      });

      const zoomOutButton = document.createElement("button");
      zoomOutButton.textContent = "Zoom Out of Kentucky";
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

      mapInstance.controls[window.google.maps.ControlPosition.TOP_LEFT].push(
        controlDiv,
      ); // Position controls in the top-right corner
    };

    loadGoogleMapsScript();
  }, []);

  return (
    <div>
      <div id="map" style={{ width: "100%", height: "500px" }} />
      <div
        style={{
          padding: "10px",
          border: "1px solid #ccc",
          backgroundColor: "#fff",
        }}
      >
        <strong>{info.title || "Click on a marker to see details"}</strong>
        <div>{info.description}</div>
      </div>
      <div>
        <p> </p>
      </div>

      {/* Display company information boxes */}
      <div className="company-info-boxes">
        {companyInfo.map((company, index) => (
          <div key={index} className="company-box">
            <img
              src={company.favicon}
              alt={company.title}
              style={{ width: "30px", height: "30px" }}
            />
            <h3>{company.title}</h3>
            <p>{company.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Map;
