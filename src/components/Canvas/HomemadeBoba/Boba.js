import React from "react";
import ObjectCanvas from "./ObjectCanvas";

const Boba = ({ rotate }) => {
  return (
    <>
      <ObjectCanvas path="/assets/boba.glb" rotate={rotate} />
    </>
  );
};

export default Boba;
