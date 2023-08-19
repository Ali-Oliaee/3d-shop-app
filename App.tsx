import { Suspense } from 'react';
import {Canvas } from '@react-three/fiber'
import NikeShoe from './src/models/shoe1';


export default function App() {
  return (
    <Canvas>
      <ambientLight />
      {/* <pointLight position={[0, 0, 0]} /> */}
      

      <Suspense fallback={null}>
        <NikeShoe />
      </Suspense>
    </Canvas>
  );
}
