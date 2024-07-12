import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF, Center } from "@react-three/drei";

const MenuObject = ({ path, rotate, scale }) => {
  const { scene } = useGLTF(path);
  const modelRef = useRef();

  return (
    <Center>
      <group ref={modelRef} scale={scale} rotation={rotate}>
        <primitive object={scene.clone()} />
      </group>
    </Center>
  );
};

export default MenuObject;
