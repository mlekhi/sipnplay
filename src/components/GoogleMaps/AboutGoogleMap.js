import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "400px",
  height: "400px",
};

const center = {
  lat: 40.66811, // Latitude of the address
  lng: -73.98688, // Longitude of the address
};

const AboutGoogleMap = () => {
  return (
    <>
      <div className="text-lg">Find us here!</div>
      <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15}>
          <Marker position={center} />
        </GoogleMap>
      </LoadScript>
    </>
  );
};

export default AboutGoogleMap;
