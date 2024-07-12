import React from "react";
import MenuCanvas from "./MenuCanvas";

// Specific boba component outside of the main menu sections
const Boba = () => {
  return (
    <>
      <MenuCanvas path="/assets/boba_tea/scene.gltf" scale={1} />
    </>
  );
};

export default Boba;
