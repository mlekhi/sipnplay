// React component for rendering a 3D object in a front-facing menu with interactive camera adjustment
import * as THREE from "three";
import { useEffect } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import MenuObject from "./MenuObject";

// Component to adjust camera position to capture the object properly
const CameraAdjuster = () => {
  const { camera, scene } = useThree();

  useEffect(() => {
    const box = new THREE.Box3().setFromObject(scene); // Calculate bounding box of the scene
    const size = box.getSize(new THREE.Vector3()); // Get size of the bounding box
    const center = box.getCenter(new THREE.Vector3()); // Get center of the bounding box

    const maxDim = Math.max(size.x, size.y, size.z); // Get maximum dimension of the bounding box
    const fov = camera.fov * (Math.PI / 180); // Convert camera FOV to radians
    let cameraZ = Math.abs(maxDim / 2 / Math.tan(fov / 2)); // Calculate camera distance based on FOV

    cameraZ *= 1.5; // Zoom out a little so object fits comfortably

    // Move the camera up and back to capture the object at an angle
    camera.position.set(
      center.x,
      center.y, // Center vertically
      center.z + cameraZ
    );

    // Point the camera at a slight downward angle
    camera.lookAt(center.x, center.y - size.y * 0.2, center.z);
    camera.updateProjectionMatrix(); // Update camera projection matrix
  }, [camera, scene]); // Dependencies for useEffect hook

  return null; // Render nothing in the DOM
};

// Component to render the front-facing menu with a 3D object and camera adjustment
const MenuFrontCanvas = ({
  path,
  rotate = [0, 0, 0],
  scale = 1,
  auto_camera = true,
}) => {
  return (
    <div className="w-[100px] h-[100px] md:w-[200px] md:h-[200px]">
      <Canvas frameloop="demand">
        {" "}
        {/* Canvas for rendering Three.js scene */}
        <ambientLight intensity={2} />{" "}
        {/* Ambient light for scene illumination */}
        <directionalLight position={[2, 2, 2]} intensity={5} />{" "}
        {/* Directional light for shadows */}
        <MenuObject path={path} rotate={rotate} scale={scale} />{" "}
        {/* Render the 3D object */}
        {auto_camera && <CameraAdjuster />}{" "}
        {/* Conditionally adjust camera position */}
        <OrbitControls
          makeDefault
          enablePan={false}
          enableZoom={false}
          enableRotate={false}
        />{" "}
        {/* Orbit controls */}
      </Canvas>
    </div>
  );
};

export default MenuFrontCanvas;
