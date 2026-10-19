"use client";

import React, { useRef, useMemo, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

// Crafted porcelain centerpiece — reacts to the mouse with a gentle parallax
// sway. It never spins continuously: idle motion is a small sine oscillation.
function CeramicGeometry() {
  const meshRef = useRef();
  const wireRef = useRef();
  const ringRef = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    const px = state.pointer.x;
    const py = state.pointer.y;

    // Gentle idle sway (±0.07 rad) + subtle mouse parallax
    const swayX = Math.sin(time * 0.4) * 0.06;
    const swayY = Math.cos(time * 0.3) * 0.07;

    if (meshRef.current) {
      meshRef.current.rotation.x = THREE.MathUtils.lerp(
        meshRef.current.rotation.x,
        py * 0.28 + swayX,
        0.05
      );
      meshRef.current.rotation.y = THREE.MathUtils.lerp(
        meshRef.current.rotation.y,
        px * 0.32 + swayY,
        0.05
      );
    }

    if (wireRef.current) {
      wireRef.current.rotation.x = THREE.MathUtils.lerp(
        wireRef.current.rotation.x,
        -py * 0.22 - swayX * 0.8,
        0.05
      );
      wireRef.current.rotation.y = THREE.MathUtils.lerp(
        wireRef.current.rotation.y,
        -px * 0.26 - swayY * 0.8,
        0.05
      );
    }

    if (ringRef.current) {
      ringRef.current.rotation.z = Math.sin(time * 0.15) * 0.12;
      ringRef.current.rotation.x = 0.5 + Math.sin(time * 0.2) * 0.08;
    }
  });

  return (
    <group>
      {/* Inner faceted porcelain form */}
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[1.55, 0]} />
        <meshPhysicalMaterial
          color="#EDE4D4"
          roughness={0.38}
          metalness={0.12}
          clearcoat={0.7}
          clearcoatRoughness={0.35}
          flatShading={true}
        />
      </mesh>

      {/* Outer wireframe lattice in the ember accent */}
      <mesh ref={wireRef}>
        <icosahedronGeometry args={[1.88, 1]} />
        <meshStandardMaterial
          color="#A63A0A"
          wireframe={true}
          transparent={true}
          opacity={0.3}
          roughness={0.4}
          metalness={0.4}
        />
      </mesh>

      {/* Thin orbital accent ring */}
      <mesh ref={ringRef}>
        <torusGeometry args={[2.3, 0.018, 16, 72]} />
        <meshStandardMaterial
          color="#A63A0A"
          emissive="#A63A0A"
          emissiveIntensity={0.45}
          roughness={0.4}
          metalness={0.6}
        />
      </mesh>
    </group>
  );
}

// Soft procedural particle constellation in warm neutrals
function ParticleField({ count = 70 }) {
  const pointsRef = useRef();

  const [positions] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const radius = 2.4 + Math.random() * 2.2;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      pos[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = radius * Math.cos(phi);
    }
    return [pos];
  }, [count]);

  useFrame((state) => {
    if (pointsRef.current) {
      const t = state.clock.getElapsedTime();
      pointsRef.current.rotation.y = Math.sin(t * 0.05) * 0.15;
      pointsRef.current.rotation.x = Math.sin(t * 0.04) * 0.08;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.055}
        color="#B9A586"
        transparent={true}
        opacity={0.7}
        sizeAttenuation={true}
      />
    </points>
  );
}

export default function Hero3DScene() {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(true);

  // Pause rendering when off-screen to save GPU and battery
  useEffect(() => {
    if (!containerRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[320px] sm:h-[420px] md:h-[480px] flex items-center justify-center"
      style={{ touchAction: "none" }}
      role="img"
      aria-label="Interactive 3D geometric sculpture that gently follows the cursor"
    >
      <Canvas
        camera={{ position: [0, 0, 5.2], fov: 45 }}
        dpr={[1, 1.5]}
        frameloop={isVisible ? "always" : "never"}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
        style={{ pointerEvents: "auto" }}
      >
        <ambientLight intensity={1.5} />
        {/* Warm key light */}
        <pointLight position={[3.5, 3.5, 3]} color="#FFF6E8" intensity={4} />
        {/* Ember rim light */}
        <pointLight position={[-4, -3, -2]} color="#D9822B" intensity={2.2} />
        {/* Soft overhead fill */}
        <directionalLight position={[0, 6, 4]} intensity={1.4} />

        <CeramicGeometry />
        <ParticleField count={70} />
      </Canvas>
    </div>
  );
}
