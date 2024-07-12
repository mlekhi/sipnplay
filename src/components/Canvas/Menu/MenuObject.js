import { useState, useRef, useEffect } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { useGLTF, Center } from "@react-three/drei";

// General object component for items in the menu
const MenuObject = ({ path, rotate, scale }) => {
  const { scene } = useGLTF(path);
  const [hovered, setHovered] = useState(false);
  const [rotated, setRotated] = useState(false);
  const modelRef = useRef();
  // used to stop rendering new animations to reduce browser lag
  const { invalidate } = useThree();

  // set position of model to level of rotation or scale if exists
  useEffect(() => {
    if (modelRef.current) {
      modelRef.current.rotation.set(...rotate);
      modelRef.current.scale.set(scale, scale, scale);
      invalidate();
    }
  }, [rotate, scale, invalidate]);

  // logic to spin the model by modifying rotation, a full circle is 2 * pi
  useFrame(() => {
    if (hovered && !rotated) {
      modelRef.current.rotation.y += 0.1;
      if (modelRef.current.rotation.y >= Math.PI * 2) {
        setRotated(true);
        modelRef.current.rotation.y = 0;
      }
      invalidate();
    }
  });

  // functions to handle hovering over a model
  const handlePointerOver = () => {
    setHovered(true);
    setRotated(false);
    invalidate();
  };

  const handlePointerOut = () => {
    if (rotated) {
      setHovered(false);
    }
    invalidate();
  };

  return (
    <Center>
      <group
        ref={modelRef}
        scale={scale}
        rotation={rotate}
        onPointerOver={handlePointerOver}
        onPointerOut={handlePointerOut}>
        <primitive object={scene.clone()} />
      </group>
    </Center>
  );
};

export default MenuObject;
