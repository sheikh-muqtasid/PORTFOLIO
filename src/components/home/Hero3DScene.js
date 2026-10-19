"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

/* ------------------------------------------------------------------ */
/* Violet particle field — GPU shader drift. The CPU only bumps a time   */
/* uniform each frame; all motion (rise, sway, twinkle) happens in the  */
/* vertex shader, so this costs ~zero per-frame JS work.               */
/* ------------------------------------------------------------------ */

const particleVertex = /* glsl */ `
  attribute float aSeed;
  attribute float aSize;
  uniform float uTime;
  uniform float uPixelRatio;
  varying float vAlpha;
  void main() {
    vec3 p = position;
    float speed = 0.10 + aSeed * 0.22;
    // slow upward drift with wrap over a 7-unit column
    p.y = mod(p.y + uTime * speed + 3.5, 7.0) - 3.5;
    p.x += sin(uTime * 0.22 + aSeed * 6.28318) * 0.35;
    p.z += cos(uTime * 0.18 + aSeed * 6.28318) * 0.22;
    vec4 mv = modelViewMatrix * vec4(p, 1.0);
    gl_Position = projectionMatrix * mv;
    float dist = max(-mv.z, 0.001);
    gl_PointSize = aSize * uPixelRatio * (120.0 / dist);
    vAlpha = (0.25 + aSeed * 0.75) * smoothstep(13.0, 4.5, dist);
  }
`;

const particleFragment = /* glsl */ `
  precision mediump float;
  varying float vAlpha;
  void main() {
    float d = length(gl_PointCoord - 0.5);
    float g = pow(smoothstep(0.5, 0.0, d), 1.9);
    vec3 hot = vec3(0.65, 0.55, 0.98);
    vec3 deep = vec3(0.31, 0.27, 0.90);
    vec3 col = mix(deep, hot, g);
    gl_FragColor = vec4(col * g, g * vAlpha);
  }
`;

function VioletParticles({ count }) {
  const matRef = useRef(null);

  const geometry = useMemo(() => {
    const g = new THREE.BufferGeometry();
    const pos = new Float32Array(count * 3);
    const seed = new Float32Array(count);
    const size = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() * 2 - 1) * 6.5;
      pos[i * 3 + 1] = (Math.random() * 2 - 1) * 3.5;
      pos[i * 3 + 2] = -4 + Math.random() * 6;
      seed[i] = Math.random();
      size[i] = 0.5 + Math.random() * 1.6;
    }
    g.setAttribute("position", new THREE.BufferAttribute(pos, 3));
    g.setAttribute("aSeed", new THREE.BufferAttribute(seed, 1));
    g.setAttribute("aSize", new THREE.BufferAttribute(size, 1));
    return g;
  }, [count]);

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uPixelRatio: {
        value:
          typeof window !== "undefined"
            ? Math.min(window.devicePixelRatio || 1, 2)
            : 1,
      },
    }),
    []
  );

  useEffect(() => () => geometry.dispose(), [geometry]);

  useFrame((_, delta) => {
    if (matRef.current) {
      matRef.current.uniforms.uTime.value += Math.min(delta, 0.05);
    }
  });

  return (
    <points geometry={geometry} frustumCulled={false}>
      <shaderMaterial
        ref={matRef}
        vertexShader={particleVertex}
        fragmentShader={particleFragment}
        uniforms={uniforms}
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

/* ------------------------------------------------------------------ */
/* Hero form — a dark metallic distorted icosahedron (drei              */
/* MeshDistortMaterial, shader-driven morph = free), an accent wireframe */
/* shell, a tilted emissive orbit ring, and an additive halo sprite.   */
/* ------------------------------------------------------------------ */

function HeroForm({ mobile }) {
  const coreRef = useRef(null);
  const ringRef = useRef(null);

  const glowTexture = useMemo(() => {
    const c = document.createElement("canvas");
    c.width = 128;
    c.height = 128;
    const ctx = c.getContext("2d");
    const grd = ctx.createRadialGradient(64, 64, 0, 64, 64, 64);
    grd.addColorStop(0, "rgba(167,139,250,0.55)");
    grd.addColorStop(0.4, "rgba(109,93,246,0.22)");
    grd.addColorStop(1, "rgba(109,93,246,0)");
    ctx.fillStyle = grd;
    ctx.fillRect(0, 0, 128, 128);
    return new THREE.CanvasTexture(c);
  }, []);

  useEffect(() => () => glowTexture.dispose(), [glowTexture]);

  useFrame((state, delta) => {
    const d = Math.min(delta, 0.05);
    const t = state.clock.elapsedTime;
    if (coreRef.current) {
      coreRef.current.rotation.y += d * 0.12;
      coreRef.current.rotation.x = Math.sin(t * 0.25) * 0.08;
    }
    if (ringRef.current) {
      ringRef.current.rotation.z -= d * 0.18;
    }
  });

  const detail = mobile ? 3 : 5;
  const position = mobile ? [0, -1.7, -1] : [2.4, 0.1, -0.8];
  const scale = mobile ? 0.8 : 1.15;

  return (
    <group position={position} scale={scale}>
      {/* additive halo behind the form */}
      <sprite scale={[5.4, 5.4, 1]}>
        <spriteMaterial
          map={glowTexture}
          transparent
          depthWrite={false}
          blending={THREE.AdditiveBlending}
          opacity={0.85}
        />
      </sprite>

      <group ref={coreRef}>
        {/* dark metallic morphing core */}
        <mesh>
          <icosahedronGeometry args={[1.3, detail]} />
          <MeshDistortMaterial
            color="#141126"
            metalness={0.55}
            roughness={0.38}
            distort={0.42}
            speed={1.4}
            emissive="#1E1B4B"
            emissiveIntensity={0.55}
          />
        </mesh>
        {/* faint accent wireframe shell for rim definition */}
        <mesh scale={1.02}>
          <icosahedronGeometry args={[1.3, Math.max(detail - 2, 1)]} />
          <meshBasicMaterial
            color="#8b7cff"
            wireframe
            transparent
            opacity={0.1}
          />
        </mesh>
      </group>

      {/* tilted emissive orbit ring */}
      <mesh ref={ringRef} rotation={[1.15, 0, 0.4]}>
        <torusGeometry args={[2.05, 0.016, 12, mobile ? 48 : 96]} />
        <meshStandardMaterial
          color="#6d5df6"
          emissive="#8b7cff"
          emissiveIntensity={1.6}
          roughness={0.4}
          metalness={0.6}
        />
      </mesh>
    </group>
  );
}

/* ------------------------------------------------------------------ */
/* CameraRig — mouse parallax + scroll-linked dolly. Listeners write   */
/* into refs (scroll is rAF-throttled); useFrame only lerps transforms. */
/* No per-frame allocations: no `new`, no object spreads in the loop.   */
/* ------------------------------------------------------------------ */

function CameraRig({ children, staticFrame }) {
  const group = useRef(null);
  const mouse = useRef({ x: 0, y: 0, tx: 0, ty: 0 });
  const scrollP = useRef(0);

  useEffect(() => {
    if (staticFrame) return;
    const onMove = (e) => {
      mouse.current.tx = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.ty = -((e.clientY / window.innerHeight) * 2 - 1);
    };
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        scrollP.current = Math.min(
          Math.max(window.scrollY / Math.max(window.innerHeight, 1), 0),
          1
        );
      });
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [staticFrame]);

  useFrame((state, delta) => {
    const d = Math.min(delta, 0.05);
    const m = mouse.current;
    // frame-rate independent lerp factor
    const k = 1 - Math.pow(0.002, d);
    m.x += (m.tx - m.x) * k;
    m.y += (m.ty - m.y) * k;

    if (group.current) {
      group.current.rotation.y += (m.x * 0.22 - group.current.rotation.y) * k;
      group.current.rotation.x += (m.y * 0.14 - group.current.rotation.x) * k;
      const p = scrollP.current;
      const s = 1 + p * 0.1;
      group.current.scale.set(s, s, s);
    }

    // scroll-linked dolly: camera pulls back and sinks as the hero leaves
    const p = scrollP.current;
    const cam = state.camera;
    cam.position.z = 5.4 + p * 2.6;
    cam.position.y = -p * 0.9;
    cam.lookAt(0, 0.1, 0);
  });

  return <group ref={group}>{children}</group>;
}

/* Render exactly one frame (reduced-motion mode, frameloop="never"). */
function StaticShot() {
  const gl = useThree((s) => s.gl);
  const scene = useThree((s) => s.scene);
  const camera = useThree((s) => s.camera);
  useEffect(() => {
    const id = requestAnimationFrame(() => {
      gl.render(scene, camera);
    });
    return () => cancelAnimationFrame(id);
  }, [gl, scene, camera]);
  return null;
}

export default function Hero3DScene({ mobile = false, staticFrame = false }) {
  const wrapRef = useRef(null);
  const [visible, setVisible] = useState(true);

  // Pause rendering when the hero scrolls off-screen (GPU + battery).
  useEffect(() => {
    if (staticFrame || !wrapRef.current) return;
    const io = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.05 }
    );
    io.observe(wrapRef.current);
    return () => io.disconnect();
  }, [staticFrame]);

  return (
    <div
      ref={wrapRef}
      className="absolute inset-0 h-full w-full"
      style={{ touchAction: "pan-y" }}
    >
      <Canvas
        dpr={mobile ? [1, 1.5] : [1, 2]}
        camera={{ position: [0, 0, 5.4], fov: 42 }}
        frameloop={staticFrame ? "never" : visible ? "always" : "never"}
        gl={{
          antialias: !mobile,
          alpha: false,
          powerPreference: "high-performance",
          stencil: false,
        }}
        style={{ pointerEvents: "none" }}
      >
        <color attach="background" args={["#0a0908"]} />
        <fog attach="fog" args={["#0a0908", 7.5, 15]} />

        {/* cinematic lighting: cool key, violet rim, faint fill */}
        <hemisphereLight args={["#2e2a5e", "#0a0908", 0.7]} />
        <directionalLight position={[4, 5, 3]} color="#e2dcff" intensity={2.4} />
        <directionalLight position={[-5, -2, -3]} color="#7c6cff" intensity={1.6} />
        <pointLight
          position={[0, 0.5, 3.5]}
          color="#a78bfa"
          intensity={10}
          distance={14}
          decay={2}
        />

        <CameraRig staticFrame={staticFrame}>
          <VioletParticles count={mobile ? 220 : 600} />
          <HeroForm mobile={mobile} />
        </CameraRig>

        {staticFrame && <StaticShot />}
      </Canvas>
    </div>
  );
}
