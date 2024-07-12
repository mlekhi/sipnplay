import React, { useRef, useEffect, useState } from "react";
import { useGLTF, Center } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";

const Object = ({ path, rotate, scale }) => {
  const { scene } = useGLTF(path);
  const [hovered, setHovered] = useState(false);
  const [rotated, setRotated] = useState(false);
  const modelRef = useRef();
  const { invalidate } = useThree();

  useEffect(() => {
    if (modelRef.current) {
      modelRef.current.rotation.set(...rotate);
      modelRef.current.scale.set(scale, scale, scale);
      invalidate();
    }
  }, [rotate, scale, invalidate]);

  useFrame(() => {
    if (hovered && !rotated) {
      // enable any of these for rotation, but doesn't rotate from dice
      // modelRef.current.rotation.x += 0.1;
      // modelRef.current.rotation.y += 0.1;
      // modelRef.current.rotation.z += 0.1;
      if (modelRef.current.rotation.x >= Math.PI * 2) {
        setRotated(true);
        modelRef.current.rotation.set(...rotate);
      }
      invalidate();
    }
  });

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

export default Object;
