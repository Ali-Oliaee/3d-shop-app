import { useFrame, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'expo-three';
import { useLayoutEffect, useRef } from 'react';
import { Mesh } from 'three';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';

const NikeShoeWalk = ({ rotation = [0, 0, 0], isTouch = false }) => {
  const mesh = useRef();
  const [normal, base] = useLoader(TextureLoader, [
    require('./textures/bottom.png'),
    require('./textures/logo.png'),
  ]);
  const material: any = useLoader(MTLLoader, require('./nike.mtl'));
  const obj: any = useLoader(OBJLoader, require('./nike.obj'), (loader) => {
    material.preload();
    loader.setMaterials(material);
  });

  useLayoutEffect(() => {
    obj.traverse((child: any) => {
      if (child instanceof Mesh) {
        child.material.normalMap = base;
        child.material.map = normal;
      }
    });
  }, [obj]);

  useFrame(() => {
    if (isTouch) {
      mesh.current.rotation.y = rotation[0];
      mesh.current.rotation.x = rotation[1] * -1;
    }
  });

  return (
    <mesh ref={mesh} rotation={[0, 0, 0]}>
      <primitive object={obj} scale={0.017} />
    </mesh>
  );
};

export default NikeShoeWalk;
