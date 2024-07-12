import * as THREE from "three";
import { useEffect } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Object from "./Object";

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

// Component to render the menu canvas with object and optional camera adjustment
const MenuCanvas = ({
  path,
  rotate = [0, 0, 0],
  scale = 1,
  auto_camera = true,
}) => {
  return (
    <div style={{ width: "200px", height: "200px" }}>
      <Canvas frameloop="demand">
        <ambientLight intensity={2} />
        <directionalLight position={[2, 2, 2]} intensity={5} />
        <Object path={path} scale={scale} rotate={rotate} />
        {auto_camera && <CameraAdjuster />}
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

export default MenuCanvas;
