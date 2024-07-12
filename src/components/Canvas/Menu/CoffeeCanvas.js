import * as THREE from "three";
import { useEffect } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import CoffeeObject from "./CoffeeObject";

// Component to move camera to capture model
const CameraAdjuster = () => {
  const { camera, scene } = useThree();

  useEffect(() => {
    const box = new THREE.Box3().setFromObject(scene);
    const size = box.getSize(new THREE.Vector3());
    const center = box.getCenter(new THREE.Vector3());

    const maxDim = Math.max(size.x, size.y, size.z);
    const fov = camera.fov * (Math.PI / 180);
    let cameraZ = Math.abs(maxDim / 2 / Math.tan(fov / 2));

    cameraZ *= 1.5; // Zoom out a little so object fits comfortably

    // center object
    // scene.position.set(-center.x, size.y / 2 - center.y, -center.z);

    // Move the camera up and back
    // camera.position.set(-center.x, size.y / 2 - center.y, -center.z + cameraZ);

    // specific camera angle to capture coffee in middle
    camera.position.set(
      center.x - cameraZ * 0.09,
      center.y + cameraZ * 0.1, // Move up by half the cameraZ distance
      center.z + cameraZ * 0.15
    );

    // camera.lookAt(-center.x, -center.y, -center.z);
    camera.lookAt(-center.x, size.y / 2 - center.y, -center.z + cameraZ);
    // camera.lookAt(center.x, center.y - size.y * 0.2, center.z);
    camera.updateProjectionMatrix();
  }, [camera, scene]);

  return null;
};

const CoffeeCanvas = ({ path, rotate = [0, 0, 0], scale = 1 }) => {
  return (
    <div className="w-[100px] h-[100px] md:w-[200px] md:h-[200px]">
      <Canvas frameloop="demand">
        {/* lights for object to show colors */}
        <ambientLight intensity={1} />
        <directionalLight position={[2, 2, 2]} intensity={1} />
        <CoffeeObject path={path} rotate={rotate} scale={scale} />
        <CameraAdjuster />
        <OrbitControls makeDefault enablePan={false} enableZoom={false} enableRotate={false} />
      </Canvas>
    </div>
  );
};

export default CoffeeCanvas;
