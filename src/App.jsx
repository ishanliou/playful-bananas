import { Environment, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { DepthOfField, EffectComposer } from "@react-three/postprocessing";
import { Suspense } from "react";
import Banana from "./Banana";

useGLTF.preload("/banana-transformed.glb");
export default function App({ count = 100, depth = 80 }) {
  return (
    <Canvas
      gl={{ alpha: false }}
      camera={{ near: 0.01, far: depth + 15, fov: 30 }}
    >
      <color attach="background" args={["#ffc0cb"]} />
      {/* <color attach="background" args={["#ffbf40"]} /> */}
      {/* <ambientLight intensity={0.2} /> */}
      <spotLight position={[10, 10, 10]} intensity={1} color="orange" />
      <Suspense fallback={null}>
        <Environment preset="sunset" />
        {Array.from({ length: count }, (_, i) => (
          <Banana key={i} z={-(i / count) * depth - 20} />
        ))}
        <EffectComposer>
          <DepthOfField
            target={[0, 0, depth / 2]}
            focalLength={0.5}
            bokehScale={20}
            height={700}
          />
        </EffectComposer>
      </Suspense>
    </Canvas>
  );
}
