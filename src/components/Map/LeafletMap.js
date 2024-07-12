// Imports necessary components and libraries for creating a Leaflet map
import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

// Fix for default marker icon issue in Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});

const center = [40.6681547578388, -73.98693364417628]; // Latitude and Longitude of the address
const googleURL =
  "https://www.google.com/maps/place/Sip+%26+Play/@40.6680228,-73.9892199,17z/data=!4m6!3m5!1s0x89c25b963c296a77:0x33cab105836ef465!8m2!3d40.6681286!4d-73.9869454!16s%2Fg%2F11fqxxtx_j?entry=ttu";

const LeafletMap = () => {
  return (
    <>
      {/* Header indicating the purpose of the map */}
      <div className="text-lg mb-2">Find us here!</div>
      {/* Container with fixed height for the map */}
      <div className="h-[400px]">
        {/* MapContainer component from react-leaflet, specifying center, zoom, and style */}
        <MapContainer
          center={center}
          zoom={15}
          style={{ height: "400px", width: "400px" }}
        >
          {/* TileLayer component for rendering map tiles from OpenStreetMap */}
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {/* Marker component to display a marker at the specified position */}
          <Marker position={center}>
            {/* Popup component for displaying additional information when marker is clicked */}
            <Popup>
              {/* Content inside the Popup, showing the address and a link to Google Maps */}
              <div className="flex flex-col items-center">
                <div>471 5th Ave. Brooklyn, NY 11215</div>
                <a
                  className="underline"
                  target="_blank"
                  rel="noreferrer"
                  href={googleURL}
                >
                  Google Maps
                </a>
              </div>
            </Popup>
          </Marker>
        </MapContainer>
      </div>
      {/* Empty div for spacing */}
      <div className="my-2 h-[40px]"></div>
    </>
  );
};

export default LeafletMap;
