import * as THREE from "three";
import { useEffect } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import CoffeeObject from "./CoffeeObject";

// Component to adjust the camera to fit the object in view
const CameraAdjuster = () => {
  const { camera, scene } = useThree();

  useEffect(() => {
    // Calculate bounding box of the scene
    const box = new THREE.Box3().setFromObject(scene);
    const size = box.getSize(new THREE.Vector3());
    const center = box.getCenter(new THREE.Vector3());

    // Calculate camera distance based on object size and field of view
    const maxDim = Math.max(size.x, size.y, size.z);
    const fov = camera.fov * (Math.PI / 180);
    let cameraZ = Math.abs(maxDim / 2 / Math.tan(fov / 2));
    cameraZ *= 1.5; // Zoom out a little so object fits comfortably

    // Set camera position and orientation
    camera.position.set(
      center.x,
      center.y + cameraZ * 0.5, // Move up by half the cameraZ distance
      center.z + cameraZ
    );
    camera.lookAt(center);
    camera.updateProjectionMatrix();
  }, [camera, scene]);

  return null;
};

// Component to render the custom canvas with coffee object and camera adjustment
const CustomCanvas = ({ path, rotate = [0, 0, 0], scale = 1 }) => {
  return (
    <div style={{ width: "250px", height: "250px" }}>
      <Canvas frameloop="demand">
        <ambientLight intensity={1.5} />
        <directionalLight position={[2, -2, 2]} intensity={2} />
        <pointLight position={[0, 2, 0]} intensity={20} />
        <CoffeeObject path={path} rotate={rotate} scale={scale} />
        <CameraAdjuster />
        <OrbitControls
          makeDefault
          enablePan={false}
          enableZoom={false}
          enableRotate={false}
        />
      </Canvas>
    </div>
  );
};

export default CustomCanvas;
