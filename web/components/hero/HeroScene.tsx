"use client";
import { useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Sparkles, Stars, Environment, Lightformer } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import * as THREE from "three";

const GOLD = "#e3b765";

function SparkCore({ mobile }: { mobile: boolean }) {
  const mesh = useRef<THREE.Mesh>(null);
  const ring = useRef<THREE.Mesh>(null);
  const groupPos: [number, number, number] = mobile ? [0.3, 1.55, 0] : [2.35, 0.35, 0];
  const groupScale = mobile ? 0.58 : 1;

  useFrame((_, dt) => {
    if (mesh.current) {
      mesh.current.rotation.y += dt * 0.25;
      mesh.current.rotation.x += dt * 0.08;
    }
    if (ring.current) ring.current.rotation.z += dt * 0.18;
  });

  return (
    <group position={groupPos} scale={groupScale}>
      <Float speed={1.1} rotationIntensity={0.5} floatIntensity={0.9}>
        {/* faceted gold core */}
        <mesh ref={mesh}>
          <icosahedronGeometry args={[1.12, 0]} />
          <meshStandardMaterial
            color={GOLD}
            metalness={1}
            roughness={0.18}
            emissive={"#5a3c10"}
            emissiveIntensity={0.4}
            flatShading
          />
        </mesh>

        {/* thin orbit ring */}
        <mesh ref={ring} rotation={[Math.PI / 2.4, 0.3, 0]}>
          <torusGeometry args={[2.0, 0.016, 16, 160]} />
          <meshStandardMaterial color={GOLD} metalness={1} roughness={0.25} emissive={"#3a2a0c"} emissiveIntensity={0.5} />
        </mesh>

        {/* gold sparks — the "Sparkz" */}
        <Sparkles count={60} scale={6} size={3} speed={0.4} color={GOLD} opacity={0.9} />
      </Float>
    </group>
  );
}

export default function HeroScene() {
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width:760px)");
    const update = () => setMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return (
    <Canvas
      style={{ width: "100%", height: "100%", display: "block" }}
      dpr={[1, 1.8]}
      gl={{ antialias: true, alpha: true }}
      camera={{ position: [0, 0, 6.8], fov: 42 }}
    >
      <color attach="background" args={["#060809"]} />
      <fog attach="fog" args={["#060809", 8, 18]} />

      <ambientLight intensity={0.3} />
      <directionalLight position={[4, 6, 5]} intensity={1.6} color={"#fff0d6"} />
      <pointLight position={[-5, -2, -3]} intensity={30} color={"#d8a952"} />

      <SparkCore mobile={mobile} />

      <Stars radius={60} depth={30} count={1200} factor={3.5} saturation={0} fade speed={0.4} />

      {/* in-scene environment for metallic reflections (no external HDRI) */}
      <Environment resolution={256}>
        <Lightformer form="rect" intensity={3} color={"#ffdfa6"} position={[3, 3, 4]} scale={[6, 6, 1]} />
        <Lightformer form="circle" intensity={2} color={"#8a6a2c"} position={[-4, -1, -3]} scale={[5, 5, 1]} />
        <Lightformer form="rect" intensity={1.2} color={"#ffffff"} position={[0, 4, -4]} scale={[8, 2, 1]} />
      </Environment>

      <EffectComposer>
        <Bloom luminanceThreshold={0.2} luminanceSmoothing={0.9} intensity={1.0} mipmapBlur radius={0.7} />
      </EffectComposer>
    </Canvas>
  );
}
