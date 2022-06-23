import React, {useRef, useState} from 'react';
import {Canvas, useFrame} from '@react-three/fiber';

function Box1(props) {
  const mesh = useRef(null);
  const [hovered, setHover] = useState(false);
  useFrame(
    (state) => (mesh.current.position.y = Math.sin(state.clock.elapsedTime))
  );
  return (
    <mesh
      {...props}
      ref={mesh}
      onClick={(e) => props.setActive(!props.active)}
      onPointerOver={(e) => setHover(true)}
      onPointerOut={(e) => setHover(false)}
    >
      <boxBufferGeometry />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  );
}

function Box2(props) {
  const mesh = useRef(null);
  const [hovered, setHover] = useState(false);
  useFrame(
    (state) => (mesh.current.position.y = Math.sin(state.clock.elapsedTime))
  );
  return (
    <group {...props}>
      <mesh
        {...props}
        ref={mesh}
        onClick={(e) => props.setActive(!props.active)}
        onPointerOver={(e) => setHover(true)}
        onPointerOut={(e) => setHover(false)}
      >
        <boxBufferGeometry />
        <meshStandardMaterial color={hovered ? 'green' : 'blue'} />
      </mesh>
    </group>
  );
}

function Switcher() {
  const [active, setActive] = useState(false);
  return (
    <>
      {active && (
        <Box1 active={active} setActive={setActive} position={[-0.5, 0, 0]} />
      )}
      {!active && (
        <Box2 active={active} setActive={setActive} position={[0.25, 0, 0]} />
      )}
    </>
  );
}

export function AutoDispose() {
  return (
    <Canvas orthographic camera={{zoom: 100}}>
      <ambientLight />
      <Switcher />
    </Canvas>
  );
}
