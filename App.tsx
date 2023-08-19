import { Suspense } from 'react';
import {Canvas } from '@react-three/fiber'
import NikeShoe from './src/models/shoe1';
import NikeShoeWalk from './src/models/shoe2';
import HomeScreen from './src/screens/home';


export default function App() {
  return (
   <HomeScreen/>
  );
}
