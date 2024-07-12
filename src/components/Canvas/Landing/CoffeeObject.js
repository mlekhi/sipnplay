import { useRef, useEffect, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { useGLTF, Center } from "@react-three/drei";

const CoffeeObject = ({ path, rotate, scale }) => {
  const { scene } = useGLTF(path);
  const modelRef = useRef();
  const { invalidate } = useThree();
  const [hovered, setHovered] = useState(false);
  const [rotated, setRotated] = useState(false);

  // Effect to set initial rotation and scale of the model
  useEffect(() => {
    if (modelRef.current) {
      modelRef.current.rotation.set(...rotate);
      modelRef.current.scale.set(scale, scale, scale);
      invalidate();
    }
  }, [rotate, scale, invalidate]);

  // Frame update logic for rotation animation
  useFrame(() => {
    if (hovered && !rotated) {
      modelRef.current.rotation.y += 0.01; // Adjust rotation speed here
      if (modelRef.current.rotation.y >= Math.PI * 10) {
        setRotated(true);
        modelRef.current.rotation.y = 0;
      }
      invalidate();
    }
  });

  // Event handlers for pointer hover
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
        onPointerOut={handlePointerOut}
      >
        <primitive object={scene.clone()} />
      </group>
    </Center>
  );
};

export default CoffeeObject;
