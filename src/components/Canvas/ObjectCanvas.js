import * as THREE from "three";
import { Suspense, useRef, useEffect } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import CanvasLoader from "./Loader";
import Object from "./Object";

const CameraAdjuster = ({ scale }) => {
const CameraAdjuster = ({ scale }) => {
  const { camera, scene } = useThree();

  useEffect(() => {
    const box = new THREE.Box3().setFromObject(scene);
    const size = box.getSize(new THREE.Vector3());
    const center = box.getCenter(new THREE.Vector3());

    const maxDim = Math.max(size.x, size.y, size.z);
    const fov = camera.fov * (Math.PI / 180);
    let cameraZ = Math.abs(maxDim / 2 / Math.tan(fov / 2));

    cameraZ *= scale; // Zoom out a little so object fits comfortably

    // Move the camera up and back
    camera.position.set(
      center.x,
      center.y + cameraZ / 10, // Move up by half the cameraZ distance
      center.z + cameraZ
    );

    // camera.lookAt(center);
    camera.lookAt(center.x, center.y - size.y * 0.2, center.z);
    camera.updateProjectionMatrix();
  }, [camera, scene]);

  return null;
};

const ObjectCanvas = ({
  path,
  rotate = [0, 0, 0],
  scale = 1,
  auto_camera = true,
}) => {
  return (
    <div style={{ width: "200px", height: "200px" }}>
      <Canvas frameloop="demand">
        <ambientLight intensity={0.2} />
        <directionalLight
          position={[5, 10, 5]}
          intensity={1}
          castShadow
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
        />
        <pointLight position={[0, 0, -5]} intensity={10} />
        <ambientLight intensity={0.2} />
        <directionalLight
          position={[5, 10, 5]}
          intensity={1}
          castShadow
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
        />
        <pointLight position={[0, 0, -5]} intensity={10} />
        <Suspense fallback={<CanvasLoader />}>
          <Object path={path} rotate={rotate} scale={scale} />
          {auto_camera && <CameraAdjuster />}
          <OrbitControls
            makeDefault
            enablePan={false}
            enableZoom={false}
            enableRotate={false}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default ObjectCanvas;
