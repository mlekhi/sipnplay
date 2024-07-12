// React component using three.js for 3D rendering and camera adjustment
import * as THREE from "three";
import { useEffect } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Object from "./Object";

// Function component to adjust camera based on object size
const CameraAdjuster = () => {
  const { camera, scene } = useThree(); // Access to Three.js camera and scene

  useEffect(() => {
    const box = new THREE.Box3().setFromObject(scene); // Calculate bounding box of the scene
    const size = box.getSize(new THREE.Vector3()); // Get size of the bounding box
    const center = box.getCenter(new THREE.Vector3()); // Get center of the bounding box

    const maxDim = Math.max(size.x, size.y, size.z); // Determine the maximum dimension
    const fov = camera.fov * (Math.PI / 180); // Convert camera field of view to radians
    let cameraZ = Math.abs(maxDim / 2 / Math.tan(fov / 2)); // Calculate camera distance based on object size

    cameraZ *= 1.5; // Zoom out a little so object fits comfortably

    // Set camera position to look at the center of the object
    camera.position.set(
      center.x,
      center.y + cameraZ * 0.5, // Move up by half the cameraZ distance
      center.z + cameraZ
    );

    camera.lookAt(center); // Make the camera look at the center of the object
    camera.updateProjectionMatrix(); // Update the camera's projection matrix
  }, [camera, scene]); // Dependencies for the useEffect hook

  return null; // Return null because this component doesn't render anything in the DOM
};

// Function component for rendering 3D object with controls
const MenuCanvas = ({
  path,
  rotate = [0, 0, 0],
  scale = 1,
  auto_camera = true,
}) => {
  return (
    <div style={{ width: "200px", height: "200px" }}>
      <Canvas frameloop="demand">
        {" "}
        {/* Canvas component from react-three/fiber */}
        <ambientLight intensity={2} /> {/* Ambient light for the scene */}
        <directionalLight position={[2, 2, 2]} intensity={5} />{" "}
        {/* Directional light for the scene */}
        <Object path={path} scale={scale} rotate={rotate} />{" "}
        {/* Render the 3D object */}
        {auto_camera && <CameraAdjuster />}{" "}
        {/* Optionally adjust camera automatically */}
        <OrbitControls
          makeDefault
          enablePan={false}
          enableZoom={false}
          enableRotate={false}
        />{" "}
        {/* OrbitControls for interactive camera control */}
      </Canvas>
    </div>
  );
};

export default MenuCanvas;
