import { useRef, useEffect, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { useGLTF, Center } from "@react-three/drei";

const CoffeeObject = ({ path, rotate, scale }) => {
  const { scene } = useGLTF(path);
  const modelRef = useRef();
  const { invalidate } = useThree();
  const [hovered, setHovered] = useState(false);
  const [rotated, setRotated] = useState(false);

  useEffect(() => {
    if (modelRef.current) {
      modelRef.current.rotation.set(...rotate);
      modelRef.current.scale.set(scale, scale, scale);
      invalidate();
    }
  }, [rotate, scale, invalidate]);

  useFrame(() => {
    if (hovered && !rotated) {
      modelRef.current.rotation.y += 0.1;
      if (modelRef.current.rotation.y >= Math.PI * 10) {
        setRotated(true);
        modelRef.current.rotation.y = 0;
      }
      if (modelRef.current) {
        modelRef.current.rotation.y += 0.01; // Adjust rotation speed here
        invalidate();
      }
    }
  });

  const handlePointerOver = () => {
    setHovered(true);
    setRotated(false);
    invalidate();
  };

  const handlePointerOut = () => {
    if (rotated) {
      setHovered(false);
    }
    invalidate();
  };

  return (
    <Center>
      <group
        ref={modelRef}
        scale={scale}
        rotation={rotate}
        onPointerOver={handlePointerOver}
        onPointerOut={handlePointerOut}>
        <primitive object={scene.clone()} />
      </group>
    </Center>
  );
};

export default CoffeeObject;
