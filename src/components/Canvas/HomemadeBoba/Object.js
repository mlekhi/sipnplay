import React, { useRef, useEffect, useState } from "react";
import { useGLTF, Center } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";

// Component for rendering 3D objects with interaction
const Object = ({ path, rotate, scale }) => {
  const { scene } = useGLTF(path); // Load GLTF model
  const [hovered, setHovered] = useState(false); // State for hover interaction
  const [rotated, setRotated] = useState(false); // State for rotation animation
  const modelRef = useRef(); // Reference to the model object in the scene
  const { invalidate } = useThree(); // Three.js context for rendering

  // Effect to update rotation and scale when props change
  useEffect(() => {
    if (modelRef.current) {
      modelRef.current.rotation.set(...rotate);
      modelRef.current.scale.set(scale, scale, scale);
      invalidate(); // Invalidate frame to trigger re-render
    }
  }, [rotate, scale, invalidate]);

  // Frame update for animation and interaction
  useFrame(() => {
    if (hovered && !rotated) {
      // Example animation logic (rotate around y-axis)
      modelRef.current.rotation.y += 0.1;
      if (modelRef.current.rotation.y >= Math.PI * 2) {
        setRotated(true);
        modelRef.current.rotation.set(...rotate); // Reset rotation on full circle
      }
      invalidate(); // Invalidate frame to trigger re-render
    }
  });

  // Handle pointer events
  const handlePointerOver = () => {
    setHovered(true); // Set hovered state to true
    setRotated(false); // Reset rotated state
    invalidate(); // Invalidate frame to trigger re-render
  };

  const handlePointerOut = () => {
    if (rotated) {
      setHovered(false); // Reset hovered state only if rotated
    }
    invalidate(); // Invalidate frame to trigger re-render
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

export default Object;
