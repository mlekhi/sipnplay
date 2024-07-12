import { useRef, useEffect, useState } from "react";
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

  return (
    <Center>
      <group ref={modelRef} scale={scale} rotation={rotate}>
        <primitive object={scene.clone()} />
      </group>
    </Center>
  );
};

export default Object;
