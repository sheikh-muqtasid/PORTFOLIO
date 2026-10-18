"use client";

import React, { useRef, useMemo, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

// Interactive 3D Crystal Centerpiece
function CrystalGeometry() {
  const meshRef = useRef();
  const wireRef = useRef();
  const ringsRef = useRef();

  useFrame((state, delta) => {
    const time = state.clock.getElapsedTime();
    const px = state.pointer.x;
    const py = state.pointer.y;

    if (meshRef.current) {
      meshRef.current.rotation.x = THREE.MathUtils.lerp(
        meshRef.current.rotation.x,
        py * 0.3 + time * 0.18,
        0.05
      );
      meshRef.current.rotation.y = THREE.MathUtils.lerp(
        meshRef.current.rotation.y,
        px * 0.35 + time * 0.25,
        0.05
      );
    }

    if (wireRef.current) {
      wireRef.current.rotation.x = THREE.MathUtils.lerp(
        wireRef.current.rotation.x,
        -py * 0.25 - time * 0.12,
        0.05
      );
      wireRef.current.rotation.y = THREE.MathUtils.lerp(
        wireRef.current.rotation.y,
        -px * 0.3 - time * 0.16,
        0.05
      );
    }

    if (ringsRef.current) {
      ringsRef.current.rotation.z = time * 0.08;
      ringsRef.current.rotation.x = 0.5 + Math.sin(time * 0.2) * 0.1;
    }
  });

  return (
    <group>
      {/* Inner faceted crystal */}
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[1.55, 0]} />
        <meshPhysicalMaterial
          color="#161722"
          roughness={0.12}
          metalness={0.88}
          clearcoat={1}
          clearcoatRoughness={0.1}
          reflectivity={0.9}
          flatShading={true}
        />
      </mesh>

      {/* Outer wireframe geometric lattice */}
      <mesh ref={wireRef}>
        <icosahedronGeometry args={[1.88, 1]} />
        <meshStandardMaterial
          color="#D4FF3F"
          wireframe={true}
          transparent={true}
          opacity={0.32}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>

      {/* Orbital accent ring */}
      <mesh ref={ringsRef}>
        <torusGeometry args={[2.3, 0.02, 16, 64]} />
        <meshStandardMaterial
          color="#D4FF3F"
          emissive="#D4FF3F"
          emissiveIntensity={0.6}
          roughness={0.2}
          metalness={0.9}
        />
      </mesh>
    </group>
  );
}

// Procedural floating particle constellation
function ParticleField({ count = 90 }) {
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
      pointsRef.current.rotation.y = t * 0.04;
      pointsRef.current.rotation.x = Math.sin(t * 0.03) * 0.08;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.06}
        color="#D4FF3F"
        transparent={true}
        opacity={0.65}
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
      className="relative w-full h-[360px] sm:h-[440px] md:h-[500px] flex items-center justify-center"
      style={{ touchAction: "none" }}
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
        <ambientLight intensity={0.8} />
        {/* Electric Lime rim light */}
        <pointLight position={[3.5, 3.5, 3]} color="#D4FF3F" intensity={3.5} />
        {/* Electric Indigo fill light */}
        <pointLight position={[-4, -3, -2]} color="#6366F1" intensity={2.8} />
        {/* Soft overhead key */}
        <directionalLight position={[0, 6, 4]} intensity={1.2} />

        <CrystalGeometry />
        <ParticleField count={80} />
      </Canvas>
    </div>
  );
}
