import React from "react";
import ObjectCanvas from "./ObjectCanvas";

const Boba = () => {
  return (
    <>
      <ObjectCanvas
        path="/assets/boba_tea/scene.gltf"
        scale={1.5}
        height="400px"
        width="400px"
      />
    </>
  );
};

export default Boba;
