import * as THREE from "three";
import { Suspense, useRef, useEffect } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import CanvasLoader from "./Loader";
import Object from "./Object";

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

    camera.lookAt(center);
    // camera.lookAt(center.x, center.y - size.y * 0.2, center.z);
    camera.updateProjectionMatrix();
  }, [camera, scene]);

  return null;
};

const ObjectCanvas = ({ path, rotate = [0, 0, 0], scale = 1 }) => {
  return (
    <div style={{ width: "250px", height: "250px" }}>
      <Canvas frameloop="demand">
        <ambientLight intensity={1} />
        <directionalLight position={[2, 2, 2]} intensity={2} />
        <Suspense fallback={<CanvasLoader />}>
          <Object path={path} rotate={rotate} scale={scale} />
          <CameraAdjuster />
          <OrbitControls
            makeDefault
            enablePan={false}
            enableZoom={false}
            enableRotate={false}
            rotateSpeed={0.5}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default ObjectCanvas;
