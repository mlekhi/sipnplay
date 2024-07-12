import * as THREE from "three";
import { useState, useRef, useEffect } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { useGLTF, Center } from "@react-three/drei";

const centerModel = (model, scene) => {
  const box = new THREE.Box3().setFromObject(scene);
  const center = box.getCenter(new THREE.Vector3());

  // center model using THREE
  scene.position.set(-center.x, -center.y, -center.z);
};

// Specific coffee object component for unique model
const CoffeeObject = ({ path, rotate, scale }) => {
  const { scene } = useGLTF(path);
  const [hovered, setHovered] = useState(false);
  const [rotated, setRotated] = useState(false);
  const modelRef = useRef();
  const { invalidate } = useThree();

  // call the centerModel function on load
  useEffect(() => {
    if (modelRef.current) {
      centerModel(modelRef.current, scene);
    }
  }, [scene]);

  // set position of model to level of rotation or scale if exists
  useEffect(() => {
    if (modelRef.current) {
      modelRef.current.rotation.set(...rotate);
      modelRef.current.scale.set(scale, scale, scale);
      invalidate();
    }
  }, [rotate, scale, invalidate]);

  // logic to spin the model by modifying rotation, a full circle is 2 * pi
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

  // functions to handle hovering over a model
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
