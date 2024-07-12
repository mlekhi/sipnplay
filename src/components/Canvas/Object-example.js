// React component for rendering a 3D object with interactive rotation
import { useState, useRef, useEffect } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { useGLTF, Center } from "@react-three/drei";

const Object = ({ path, rotate, scale }) => {
  const { scene } = useGLTF(path); // Load the 3D model from the specified path
  const [hovered, setHovered] = useState(false); // State to track if the object is hovered
  const [rotated, setRotated] = useState(false); // State to track if the object has rotated
  const modelRef = useRef(); // Reference to the 3D model in the scene
  const { invalidate } = useThree(); // Access to Three.js renderer state

  // useEffect hook to update rotation and scale of the model
  useEffect(() => {
    if (modelRef.current) {
      modelRef.current.rotation.set(...rotate); // Set initial rotation based on props
      modelRef.current.scale.set(scale, scale, scale); // Set initial scale based on props
      invalidate(); // Invalidate the renderer to trigger re-render
    }
  }, [rotate, scale, invalidate]); // Dependencies for useEffect hook

  // useFrame hook to animate the object when hovered
  useFrame(() => {
    if (hovered && !rotated) {
      modelRef.current.rotation.y += 0.5; // Rotate the model around y-axis
      if (modelRef.current.rotation.y >= Math.PI * 2) {
        setRotated(true); // Set rotated state to true when full rotation is completed
        modelRef.current.rotation.y = 0; // Reset rotation angle
      }
      invalidate(); // Invalidate the renderer to trigger re-render
    }
  });

  // Event handler when mouse pointer is over the object
  const handlePointerOver = () => {
    setHovered(true); // Set hovered state to true
    setRotated(false); // Reset rotated state
    invalidate(); // Invalidate the renderer to trigger re-render
  };

  // Event handler when mouse pointer moves out of the object
  const handlePointerOut = () => {
    if (rotated) {
      setHovered(false); // Reset hovered state only if rotated
    }
    invalidate(); // Invalidate the renderer to trigger re-render
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
        <primitive object={scene.clone()} /> {/* Render the 3D model */}
      </group>
    </Center>
  );
};

export default Object;
