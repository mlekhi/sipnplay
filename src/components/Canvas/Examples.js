import React from "react";
import ObjectCanvas from "../../components/Canvas/ObjectCanvas";
import CustomCanvas from "../../components/Canvas/CustomCanvas";

const Examples = () => {
  return (
    <>
      <ObjectCanvas path="/assets/cafe_latte_with_art/scene.gltf" />
      {/*  small */}
      <ObjectCanvas path="/assets/coffee_cup/scene.gltf" scale={5} />
      <ObjectCanvas path="/assets/dice/scene.gltf" rotate={[0, 0, Math.PI / 2]} scale={10} />
      {/*  big */}
      <ObjectCanvas
        path="/assets/iced_coffee/scene.gltf"
        rotate={[-Math.PI / 2, 0, 0]}
        scale={0.03}
      />
      <ObjectCanvas path="/assets/boba_tea_cup/scene.gltf" scale={0.11} />
      <ObjectCanvas path="/assets/bubble_tea_and_cookies/scene.gltf" scale={0.25} />
      <ObjectCanvas path="/assets/fried_chicken_wing/scene.gltf" scale={0.25} />
      <ObjectCanvas path="/assets/club_sandwich_pile/scene.gltf" />
      {/* <ObjectCanvas path="/assets/stylized_pumpkins/scene.gltf" /> */}
      <CustomCanvas path="/assets/candy_basket/scene.gltf" />
      <ObjectCanvas path="/assets/wine_glass/scene.gltf" />
      <ObjectCanvas path="/assets/beer_mug/scene.gltf" />
    </>
  );
};

export default Examples;
