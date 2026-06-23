"use client";

import { Float, MeshTransmissionMaterial } from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Suspense, useMemo, useRef, type MutableRefObject } from "react";
import * as THREE from "three";

type MouseRef = MutableRefObject<{ x: number; y: number }>;

const transmissionProps = {
  backside: true,
  backsideThickness: 0.25,
  transmission: 1,
  thickness: 0.35,
  roughness: 0.05,
  chromaticAberration: 0.08,
  anisotropy: 0.2,
  distortion: 0.22,
  distortionScale: 0.35,
  temporalDistortion: 0.1,
  iridescence: 0.3,
  iridescenceIOR: 1,
  iridescenceThicknessRange: [0, 1200] as [number, number],
  color: "#f8fafc",
};

function OrangeGlow() {
  return (
    <>
      <pointLight position={[2.2, 0.8, 2]} intensity={2.4} color="#ff6b35" distance={12} />
      <pointLight position={[1.8, -0.6, 1.5]} intensity={1.1} color="#ff9a5c" distance={10} />
      <spotLight position={[3, 2, 4]} angle={0.45} penumbra={1} intensity={0.6} color="#ffffff" />
      <mesh position={[1.4, 0, -1.2]}>
        <sphereGeometry args={[2.8, 32, 32]} />
        <meshBasicMaterial color="#ff6b35" transparent opacity={0.07} />
      </mesh>
    </>
  );
}

function SceneParticles() {
  const ref = useRef<THREE.Points>(null);
  const geometry = useMemo(() => {
    const count = 180;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i += 1) {
      positions[i * 3] = (Math.random() - 0.5) * 14;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 9;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 8;
    }
    const geom = new THREE.BufferGeometry();
    geom.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    return geom;
  }, []);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.018;
    }
  });

  return (
    <points ref={ref} geometry={geometry}>
      <pointsMaterial size={0.025} color="#cbd5e1" transparent opacity={0.45} sizeAttenuation depthWrite={false} />
    </points>
  );
}

function SatelliteSphere({
  position,
  scale,
  samples,
  resolution,
}: {
  position: [number, number, number];
  scale: number;
  samples: number;
  resolution: number;
}) {
  return (
    <Float speed={1.8} rotationIntensity={0.35} floatIntensity={0.55}>
      <mesh position={position} scale={scale}>
        <sphereGeometry args={[1, 40, 40]} />
        <MeshTransmissionMaterial {...transmissionProps} samples={samples} resolution={resolution} thickness={0.2} />
      </mesh>
    </Float>
  );
}

function MainOrb({
  mouseRef,
  samples,
  resolution,
}: {
  mouseRef: MouseRef;
  samples: number;
  resolution: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  const { camera } = useThree();

  useFrame(() => {
    const mx = mouseRef.current.x;
    const my = mouseRef.current.y;

    if (meshRef.current) {
      meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, my * 0.38, 0.06);
      meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, mx * 0.5, 0.06);
      meshRef.current.position.x = THREE.MathUtils.lerp(meshRef.current.position.x, 0.55 + mx * 0.42, 0.05);
      meshRef.current.position.y = THREE.MathUtils.lerp(meshRef.current.position.y, my * 0.28, 0.05);
    }

    camera.position.x = THREE.MathUtils.lerp(camera.position.x, mx * 0.18, 0.04);
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, my * 0.12, 0.04);
    camera.lookAt(0.4, 0, 0);
  });

  return (
    <Float speed={1.2} rotationIntensity={0.15} floatIntensity={0.25}>
      <mesh ref={meshRef} position={[0.55, 0, 0]}>
        <sphereGeometry args={[1.12, 64, 64]} />
        <MeshTransmissionMaterial {...transmissionProps} samples={samples} resolution={resolution} thickness={0.45} />
      </mesh>
    </Float>
  );
}

function HeroScene({ mouseRef, quality }: { mouseRef: MouseRef; quality: "high" | "low" }) {
  const samples = quality === "high" ? 8 : 4;
  const resolution = quality === "high" ? 512 : 256;

  return (
    <>
      <color attach="background" args={["#050816"]} />
      <fog attach="fog" args={["#050816", 6, 14]} />
      <ambientLight intensity={0.28} />
      <directionalLight position={[4, 6, 5]} intensity={1.15} color="#ffffff" />
      <directionalLight position={[-4, -2, 2]} intensity={0.35} color="#4f46e5" />
      <OrangeGlow />
      <SceneParticles />
      <MainOrb mouseRef={mouseRef} samples={samples} resolution={resolution} />
      <SatelliteSphere position={[1.75, 0.95, 0.45]} scale={0.2} samples={samples} resolution={resolution} />
      <SatelliteSphere position={[1.35, -0.85, 0.65]} scale={0.14} samples={samples} resolution={resolution} />
      <SatelliteSphere position={[2.05, -0.25, -0.15]} scale={0.11} samples={samples} resolution={resolution} />
      <SatelliteSphere position={[0.15, 1.05, 0.55]} scale={0.1} samples={samples} resolution={resolution} />
      <SatelliteSphere position={[0.05, -1.1, 0.35]} scale={0.09} samples={samples} resolution={resolution} />
    </>
  );
}

export default function DmHeroOrbCanvas({
  mouseRef,
  quality,
}: {
  mouseRef: MouseRef;
  quality: "high" | "low";
}) {
  return (
    <Canvas
      className="dm-hero-future__canvas"
      camera={{ position: [0, 0, 4.6], fov: 42 }}
      dpr={quality === "high" ? [1, 2] : [1, 1.25]}
      gl={{ antialias: true, alpha: false, powerPreference: "high-performance" }}
    >
      <Suspense fallback={null}>
        <HeroScene mouseRef={mouseRef} quality={quality} />
      </Suspense>
    </Canvas>
  );
}
