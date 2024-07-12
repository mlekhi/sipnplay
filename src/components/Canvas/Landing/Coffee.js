import React from "react";
import CoffeeCanvas from "./CoffeeCanvas";

// Component to display a coffee scene using CoffeeCanvas
const Coffee = () => {
  return (
    <>
      <CoffeeCanvas
        path="/assets/cafe_latte_with_art/scene.gltf"
        scale={0.5}
        height="500px"
        width="500px"
      />
    </>
  );
};

export default Coffee;
