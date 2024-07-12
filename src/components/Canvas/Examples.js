import React from "react";
import ObjectCanvas from "../../components/Canvas/ObjectCanvas";
import CustomCanvas from "../../components/Canvas/CustomCanvas";

const Examples = () => {
  return (
    <div className="grid grid-flow-col grid-cols-4 grid-rows-3">
      <div>
        <ObjectCanvas path="/assets/cafe_latte_with_art/scene.gltf" />
        <p>latte with spoon</p>
      </div>
      {/* <div>
        <ObjectCanvas path="/assets/dice/scene.gltf" rotate={[0, 0, Math.PI / 2]} scale={10} />
        <p>dice</p>
      </div> */}
      <div>
        <ObjectCanvas
          path="/assets/iced_coffee/scene.gltf"
          rotate={[-Math.PI / 2, 0, 0]}
          scale={0.3}
        />
        <p>iced coffee</p>
      </div>
      <div>
        <ObjectCanvas path="/assets/bubble_tea_and_cookies/scene.gltf" />
        <p>boba and cookies + some logo</p>
      </div>
      <div>
        <ObjectCanvas path="/assets/fried_chicken_wing/scene.gltf" />
        <p>fried chicken</p>
      </div>
      <div>
        <ObjectCanvas path="/assets/club_sandwich_pile/scene.gltf" />
        <p>sandwich pile</p>
      </div>
      <div className="text-center">
        <ObjectCanvas path="/assets/fine_wine_glass/scene.gltf" />
        <p>fine wine glass</p>
      </div>
      <div>
        <CustomCanvas path="/assets/candy_basket/scene.gltf" />
        <p>"seasonal"</p>
      </div>
    </div>
  );
};

export default Examples;
