import { Mesh } from 'three';
import { TextureLoader } from 'expo-three';
import { Suspense, useLayoutEffect } from 'react';
import { useLoader } from '@react-three/fiber'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader'


const NikeShoeSport = () => {
    const [normal, base] = useLoader(TextureLoader, [
      require('./textures/NormalsTS.jpeg'),
      require('./textures/Texture2.jpg'),
    ])
    const material: any = useLoader(MTLLoader, require('./Mesh.mtl'))
    const obj: any = useLoader(OBJLoader, require('./Mesh.obj'), loader => {
      material.preload()
      loader.setMaterials(material)
    })
  
    useLayoutEffect(() => {
      obj.traverse((child: any) => {
        if (child instanceof Mesh) {
          child.material.map = base
          child.material.normalMap = normal
        }
      })
    },[obj])
  
    return (
      <mesh rotation={[2, 1, 5]}>
        <primitive object={obj} scale={8} />
      </mesh>
    )
  }

  export default NikeShoeSport