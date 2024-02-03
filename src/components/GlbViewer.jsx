import React, { useRef } from 'react';
import { Canvas, useFrame } from 'react-three-fiber';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader';


const GlbViewer = ({ glbPath }) => {
  const gltf = useRef();

  useFrame(() => {
    if (gltf.current) {
      gltf.current.rotation.x += 0.005;
      gltf.current.rotation.y += 0.005;
    }
  });

  return (
    <mesh ref={gltf} scale={[1, 1, 1]}>
      <primitive object={gltf.current} />
    </mesh>
  );
};

export default GlbViewer;
