import * as THREE from "three";
import { useEffect } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import MenuObject from "./MenuObject";

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

    // Move the camera up and back
    camera.position.set(
      center.x,
      center.y + cameraZ * 0.5, // Move up by half the cameraZ distance
      center.z + cameraZ
    );

    // camera.lookAt(center);
    camera.lookAt(center.x, center.y - size.y * 0.2, center.z);
    camera.updateProjectionMatrix();
  }, [camera, scene]);

  return null;
};

const MenuCanvas = ({ path, rotate = [0, 0, 0], scale = 1, auto_camera = true }) => {
  return (
    <div className="w-[100px] h-[100px] md:w-[200px] md:h-[200px]">
      <Canvas frameloop="demand">
        <ambientLight intensity={2} />
        <directionalLight position={[2, 2, 2]} intensity={5} />
        <MenuObject path={path} rotate={rotate} scale={scale} />
        {auto_camera && <CameraAdjuster />}
        <OrbitControls makeDefault enablePan={false} enableZoom={false} enableRotate={false} />
      </Canvas>
    </div>
  );
};

export default MenuCanvas;
