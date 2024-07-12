// React component using three.js for 3D model manipulation
import React, { useRef, useEffect, useState } from "react";
import { useGLTF, Center } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";

const Object = ({ path, rotate, scale }) => {
  const { scene } = useGLTF(path); // Load 3D model from GLTF file
  const [hovered, setHovered] = useState(false); // State for hover effect
  const [rotated, setRotated] = useState(false); // State to track rotation status
  const modelRef = useRef(); // Reference to the model's object
  const { invalidate } = useThree(); // Three.js context to invalidate the scene

  // Effect to update rotation and scale when props change
  useEffect(() => {
    if (modelRef.current) {
      modelRef.current.rotation.set(...rotate); // Set initial rotation
      modelRef.current.scale.set(scale, scale, scale); // Set scale
      invalidate(); // Invalidate scene to reflect changes
    }
  }, [rotate, scale, invalidate]);

  // Frame update for rotation animation when hovered
  useFrame(() => {
    if (hovered && !rotated) {
      // Uncomment and use any of these lines for rotation
      // modelRef.current.rotation.x += 0.1;
      // modelRef.current.rotation.y += 0.1;
      // modelRef.current.rotation.z += 0.1;
      if (modelRef.current.rotation.x >= Math.PI * 2) {
        setRotated(true); // Set rotated flag when full rotation completed
        modelRef.current.rotation.set(...rotate); // Reset rotation
      }
      invalidate(); // Invalidate to apply rotation updates
    }
  });

  // Handle pointer events
  const handlePointerOver = () => {
    setHovered(true); // Set hovered state
    setRotated(false); // Reset rotation status
    invalidate(); // Invalidate scene for hover effect
  };

  const handlePointerOut = () => {
    if (rotated) {
      setHovered(false); // Reset hovered state when fully rotated
    }
    invalidate(); // Invalidate scene on pointer out
  };

  return (
    <Center>
      {/* Group for the 3D model */}
      <group
        ref={modelRef} // Reference to the model's group
        scale={scale} // Scale of the model
        rotation={rotate} // Initial rotation of the model
        onPointerOver={handlePointerOver} // Pointer over event handler
        onPointerOut={handlePointerOut} // Pointer out event handler
      >
        <primitive object={scene.clone()} /> {/* Render the 3D model */}
      </group>
    </Center>
  );
};

export default Object;
