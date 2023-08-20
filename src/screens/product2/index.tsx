import React, { Suspense, useRef, useState } from 'react'
import ProductLayout from '../../layouts/product-screen-layout'
import { Canvas } from '@react-three/fiber'
import NikeShoeWalk from '../../models/shoe2'
import { PanResponder, View } from 'react-native'

const Product2Screen = ({navigation}) => {
  const [isTouch, setIsTouch] = useState(false)
  const viewRef = useRef(null);
  const [count, setCount] = useState<number>(1)
  const [rotation, setRotation] = useState([0, 0, 0])
  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: (_, gestureState) => {
      const { dx, dy } = gestureState;
      const newRotation = [
        dy * Math.PI / 100,
        dx * Math.PI / 100,
        0,
      ];
      setRotation(newRotation);
    },
  });

  return (
    <ProductLayout
      title='Walking Shoe'
      description="The Nike Sport Edition is a collection of shoes designed for athletes and sports enthusiasts. With a focus on performance and style, these shoes are built to provide comfort, support, and durability during various sporting activities. Whether you're a runner, a gym-goer, or a trail enthusiast, Nike Sport Edition offers a range of options to suit your needs."
      price="$30.99"
      count={count}
      onBackPress={()=>navigation.navigate('Home')}
      setCount={setCount}
    >
      <View style={{flex: 1}} ref={viewRef} onTouchStart={() => setIsTouch(true)}
      onTouchEnd={() => setIsTouch(false)}
      {...panResponder.panHandlers}>
        <Suspense fallback={null}>
      <Canvas>
        <ambientLight/>
          <NikeShoeWalk rotation={rotation} isTouch={isTouch}/>
      </Canvas>
        </Suspense>
      </View>
    </ProductLayout>
  )
}

export default Product2Screen