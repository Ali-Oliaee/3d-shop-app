import { Mesh } from 'three';
import { TextureLoader } from 'expo-three';
import { useLayoutEffect } from 'react';
import { useLoader } from '@react-three/fiber'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader'


const NikeShoeWalk = () => {
    const [normal, base] = useLoader(TextureLoader, [
      require('./textures/bottom.png'),
      require('./textures/logo.png'),
    ])
    const material: any = useLoader(MTLLoader, require('./nike.mtl'))
    const obj: any = useLoader(OBJLoader, require('./nike.obj'), loader => {
      material.preload()
      loader.setMaterials(material)
    })
  
    useLayoutEffect(() => {
      obj.traverse((child: any) => {
        if (child instanceof Mesh) {
          child.material.normalMap = base
          child.material.map = normal
        }
      })
    },[obj])
  
    return (
      <mesh rotation={[1, 5.2, 0.4]}>
        <primitive object={obj} scale={0.015} />
      </mesh>
    )
  }

  export default NikeShoeWalk