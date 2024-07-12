// Boba component rendering an ObjectCanvas with a specified rotation angle
import React from "react";
import ObjectCanvas from "./ObjectCanvas";

const Boba = ({ rotate }) => {
  return (
    <>
      {/* Render ObjectCanvas component with a GLB model of a boba drink */}
      <ObjectCanvas path="/assets/boba.glb" rotate={rotate} />
    </>
  );
};

export default Boba;
