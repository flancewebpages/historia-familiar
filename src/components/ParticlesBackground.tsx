import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function Particles() {
  const points = useRef<THREE.Points>(null);

  const count = 150;
  const positions = new Float32Array(count * 3);

  for (let i = 0; i < count * 3; i++) {
    positions[i] = (Math.random() - 0.5) * 10;
  }

  useFrame(() => {
    if (points.current) points.current.rotation.y += 0.0008;
  });

  return (
    <points ref={points}>
      <bufferGeometry attach="geometry">
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        attach="material"
        color="#34d399"
        size={0.02}
        sizeAttenuation
        transparent
        opacity={0.5}
      />
    </points>
  );
}

export default function ParticlesBackground() {
  return (
    <Canvas
      className="absolute inset-0 -z-10"
      camera={{ position: [0, 0, 5] }}
    >
      <ambientLight intensity={0.2} />
      <Particles />
    </Canvas>
  );
}
