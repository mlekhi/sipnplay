import React from "react";
import CustomCanvas from "./CoffeeCanvas";

const Coffee = () => {
  return (
    <>
      <CustomCanvas
        path="/assets/cafe_latte_with_art/scene.gltf"
        scale={0.5}
        height="500px"
        width="500px"
      />
    </>
  );
};

export default Coffee;
