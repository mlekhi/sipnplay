import { useRef, useEffect } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { useGLTF, Center } from "@react-three/drei";

const Object = ({ path, rotate, scale }) => {
  const { scene } = useGLTF(path);
  const modelRef = useRef();
  const { invalidate } = useThree();

  useEffect(() => {
    if (modelRef.current) {
      modelRef.current.rotation.set(...rotate);
      modelRef.current.scale.set(scale, scale, scale);
      invalidate();
    }
  }, [rotate, scale, invalidate]);

  useFrame(() => {
    if (hovered && !rotated) {
      modelRef.current.rotation.y += 0.3;
      if (modelRef.current.rotation.y >= Math.PI * 2) {
        setRotated(true);
        modelRef.current.rotation.y = 0;
      }
      if (modelRef.current) {
        modelRef.current.rotation.y += 0.01; // Adjust rotation speed here
        invalidate();
      }
    }
  });

  return (
    <Center>
      <group ref={modelRef} scale={scale} rotation={rotate}>
      <group ref={modelRef} scale={scale} rotation={rotate}>
        <primitive object={scene.clone()} />
      </group>
    </Center>
  );
};

export default Object;
