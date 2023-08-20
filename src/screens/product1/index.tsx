import React, { Suspense, useState } from 'react'
import ProductLayout from '../../layouts/product-screen-layout'
import NikeShoeSport from '../../models/shoe1'
import { Canvas } from '@react-three/fiber'

const Product1Screen = ({navigation}) => {
  const [count, setCount] = useState<number>(1)
  return (
    <ProductLayout
      title='Nike Sport Edition'
      description="The Nike Sport Edition is a collection of shoes designed for athletes and sports enthusiasts. With a focus on performance and style, these shoes are built to provide comfort, support, and durability during various sporting activities. Whether you're a runner, a gym-goer, or a trail enthusiast, Nike Sport Edition offers a range of options to suit your needs."
      price="$50.18"
      count={count}
      onBackPress={()=>navigation.navigate('Home')}
      setCount={setCount}
    >
      <Canvas>
        <Suspense fallback={null}>
        <ambientLight/>
          {/* <NikeShoeSport/> */}
        </Suspense>
      </Canvas>
    </ProductLayout>
  )
}

export default Product1Screen