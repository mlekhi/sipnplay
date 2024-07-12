import * as THREE from "three";
import { useEffect } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import CoffeeObject from "./CoffeeObject";

// Component to adjust the camera position to capture the model
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

    // Adjust camera position to capture the coffee object
    camera.position.set(
      center.x - cameraZ * 0.09, // Move left by 9% of cameraZ distance
      center.y + cameraZ * 0.1, // Move up by 10% of cameraZ distance
      center.z + cameraZ * 0.15 // Move forward by 15% of cameraZ distance
    );

    // Adjust camera lookAt to focus on the coffee object
    camera.lookAt(-center.x, size.y / 2 - center.y, -center.z + cameraZ);

    camera.updateProjectionMatrix(); // Update camera projection matrix
  }, [camera, scene]);

  return null; // Render nothing in the component
};

// Component for rendering the CoffeeCanvas with a specific coffee object
const CoffeeCanvas = ({ path, rotate = [0, 0, 0], scale = 1 }) => {
  return (
    <div className="w-[100px] h-[100px] md:w-[200px] md:h-[200px]">
      <Canvas frameloop="demand">
        {/* Ambient and directional lights for object visibility */}
        <ambientLight intensity={1} />
        <directionalLight position={[2, 2, 2]} intensity={1} />
        <CoffeeObject path={path} rotate={rotate} scale={scale} />{" "}
        {/* Render coffee object */}
        <CameraAdjuster /> {/* Adjust camera position */}
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

export default CoffeeCanvas;
