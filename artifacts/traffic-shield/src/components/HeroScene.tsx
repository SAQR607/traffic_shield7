import { Suspense, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const GOLD = new THREE.Color("#C9A14A");
const GOLD_BRIGHT = new THREE.Color("#F4D97A");

function Network({ count = 36 }: { count?: number }) {
  const groupRef = useRef<THREE.Group>(null);
  const linesRef = useRef<THREE.LineSegments>(null);
  const pointsRef = useRef<THREE.Points>(null);

  const { positions, lineGeom, pointGeom } = useMemo(() => {
    const positions: THREE.Vector3[] = [];
    for (let i = 0; i < count; i++) {
      // distribute roughly on a sphere
      const u = Math.random();
      const v = Math.random();
      const theta = 2 * Math.PI * u;
      const phi = Math.acos(2 * v - 1);
      const r = 2.4 + Math.random() * 0.6;
      positions.push(
        new THREE.Vector3(
          r * Math.sin(phi) * Math.cos(theta),
          r * Math.sin(phi) * Math.sin(theta),
          r * Math.cos(phi),
        ),
      );
    }

    const lineVerts: number[] = [];
    const lineColors: number[] = [];
    const linkThreshold = 1.6;
    for (let i = 0; i < positions.length; i++) {
      for (let j = i + 1; j < positions.length; j++) {
        const a = positions[i];
        const b = positions[j];
        if (!a || !b) continue;
        const d = a.distanceTo(b);
        if (d < linkThreshold) {
          lineVerts.push(a.x, a.y, a.z, b.x, b.y, b.z);
          const alpha = 1 - d / linkThreshold;
          const c = GOLD.clone().multiplyScalar(0.4 + alpha * 0.6);
          lineColors.push(c.r, c.g, c.b, c.r, c.g, c.b);
        }
      }
    }

    const lineGeom = new THREE.BufferGeometry();
    lineGeom.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(lineVerts, 3),
    );
    lineGeom.setAttribute(
      "color",
      new THREE.Float32BufferAttribute(lineColors, 3),
    );

    const pointGeom = new THREE.BufferGeometry();
    const pointVerts: number[] = [];
    const pointColors: number[] = [];
    for (const p of positions) {
      pointVerts.push(p.x, p.y, p.z);
      const c = Math.random() > 0.7 ? GOLD_BRIGHT : GOLD;
      pointColors.push(c.r, c.g, c.b);
    }
    pointGeom.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(pointVerts, 3),
    );
    pointGeom.setAttribute(
      "color",
      new THREE.Float32BufferAttribute(pointColors, 3),
    );

    return { positions, lineGeom, pointGeom };
  }, [count]);

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.08;
      groupRef.current.rotation.x += delta * 0.02;
    }
  });

  return (
    <group ref={groupRef}>
      <lineSegments ref={linesRef} geometry={lineGeom}>
        <lineBasicMaterial
          vertexColors
          transparent
          opacity={0.55}
          depthWrite={false}
        />
      </lineSegments>
      <points ref={pointsRef} geometry={pointGeom}>
        <pointsMaterial
          size={0.07}
          vertexColors
          sizeAttenuation
          transparent
          opacity={0.95}
          depthWrite={false}
        />
      </points>
    </group>
  );
}

function Particles({ count = 80 }: { count?: number }) {
  const ref = useRef<THREE.Points>(null);
  const geom = useMemo(() => {
    const g = new THREE.BufferGeometry();
    const verts: number[] = [];
    for (let i = 0; i < count; i++) {
      verts.push(
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 8,
      );
    }
    g.setAttribute("position", new THREE.Float32BufferAttribute(verts, 3));
    return g;
  }, [count]);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = state.clock.elapsedTime * 0.02;
  });

  return (
    <points ref={ref} geometry={geom}>
      <pointsMaterial
        size={0.025}
        color="#C9A14A"
        transparent
        opacity={0.4}
        depthWrite={false}
      />
    </points>
  );
}

export function HeroScene() {
  return (
    <div
      className="absolute inset-0 pointer-events-none"
      aria-hidden="true"
    >
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 6.5], fov: 45 }}
        gl={{ antialias: true, alpha: true, powerPreference: "low-power" }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.4} />
        <pointLight position={[5, 5, 5]} intensity={0.5} color="#C9A14A" />
        <Suspense fallback={null}>
          <Network count={32} />
          <Particles count={70} />
        </Suspense>
      </Canvas>
    </div>
  );
}
