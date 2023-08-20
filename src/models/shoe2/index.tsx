import { Mesh } from 'three';
import { TextureLoader } from 'expo-three';
import {  useLayoutEffect, useRef} from 'react';
import { useFrame, useLoader } from '@react-three/fiber'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader'


const NikeShoeWalk = ({rotation, isTouch}) => {
    const mesh = useRef();
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

    useFrame(() => {
      if(isTouch){
        mesh.current.rotation.y += rotation[1]
        mesh.current.rotation.x += (rotation[0] * -1);
        mesh.current.rotation.z += (rotation[2] * -1);
      }
    })

    return (
      <mesh ref={mesh} rotation={[0,0,0]}>
        <primitive object={obj} scale={0.018} />
      </mesh>
    )
  }

  export default NikeShoeWalk