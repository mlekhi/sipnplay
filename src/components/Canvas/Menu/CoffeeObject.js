import * as THREE from "three";
import { useState, useRef, useEffect } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { useGLTF, Center } from "@react-three/drei";

const centerModel = (model, scene) => {
  const box = new THREE.Box3().setFromObject(scene);
  const center = box.getCenter(new THREE.Vector3());

  // center
  scene.position.set(-center.x, -center.y, -center.z);
};

const CoffeeObject = ({ path, rotate, scale }) => {
  const { scene } = useGLTF(path);
  const [hovered, setHovered] = useState(false);
  const [rotated, setRotated] = useState(false);
  const modelRef = useRef();
  const { invalidate } = useThree();

  useEffect(() => {
    if (modelRef.current) {
      centerModel(modelRef.current, scene);
    }
  }, [scene]);

  useEffect(() => {
    if (modelRef.current) {
      modelRef.current.rotation.set(...rotate);
      modelRef.current.scale.set(scale, scale, scale);
      invalidate();
    }
  }, [rotate, scale, invalidate]);

  useFrame(() => {
    if (hovered && !rotated) {
      modelRef.current.rotation.z += 0.1;
      if (modelRef.current.rotation.z >= Math.PI * 2) {
        setRotated(true);
        modelRef.current.rotation.z = 0;
      }
      invalidate();
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
