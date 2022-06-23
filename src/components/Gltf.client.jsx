import React, {Suspense, useEffect, useReducer} from 'react';
import {Canvas, useLoader} from '@react-three/fiber';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader';

function Test() {
  const [flag, toggle] = useReducer((state) => !state, true);
  useEffect(() => {
    const interval = setInterval(toggle, 1000);
    return () => clearInterval(interval);
  }, []);
  const {scene} = useLoader(
    GLTFLoader,
    flag ? '../../assets/Stork.glb' : '../../assets/Parrot.glb'
  );
  return <primitive object={scene} />;
}

export function Gltf() {
  return (
    <Canvas>
      <ambientLight />
      <Suspense fallback={null}>
        <Test />
      </Suspense>
    </Canvas>
  );
}
