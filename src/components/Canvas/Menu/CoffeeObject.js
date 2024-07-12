import * as THREE from "three";
import { useState, useRef, useEffect } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Center } from "@react-three/drei";

// Function to center the model within the scene
const centerModel = (model, scene) => {
  const box = new THREE.Box3().setFromObject(scene);
  const center = box.getCenter(new THREE.Vector3());

  // Center the model
  scene.position.set(-center.x, -center.y, -center.z);
};

// Component for rendering a specific coffee object model
const CoffeeObject = ({ path, rotate, scale }) => {
  const { scene } = useGLTF(path); // Load GLTF model
  const [hovered, setHovered] = useState(false); // State for hover interaction
  const [rotated, setRotated] = useState(false); // State for rotation animation
  const modelRef = useRef(); // Reference to the model object in the scene
  const { invalidate } = useThree(); // Three.js context for rendering

  // Center the model when scene is loaded or updated
  useEffect(() => {
    if (modelRef.current) {
      centerModel(modelRef.current, scene);
    }
  }, [scene]);

  // Update rotation and scale when props change
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
      // Example animation logic (rotate around z-axis)
      modelRef.current.rotation.z += 0.1;
      if (modelRef.current.rotation.z >= Math.PI * 2) {
        setRotated(true);
        modelRef.current.rotation.z = 0; // Reset rotation on full circle
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

export default CoffeeObject;
