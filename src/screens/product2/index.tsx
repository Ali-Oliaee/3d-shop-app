import React, { Suspense, useEffect, useRef, useState } from 'react'
import ProductLayout from '../../layouts/product-screen-layout'
import { Canvas } from '@react-three/fiber'
import NikeShoeWalk from '../../models/shoe2'
import Slider from '@react-native-community/slider';
import { ActivityIndicator, View } from 'react-native'

const Product2Screen = ({navigation}) => {
  const [isTouch, setIsTouch] = useState(false)
  const [count, setCount] = useState<number>(1)
  const [rotation, setRotation] = useState<number[]>([0, 0, 0])
  const [horizontalRotate, setHorizontalRotate] = useState<number>(0)
  const [verticalRotate, setVerticalRotate] = useState<number>(0)

  useEffect(() => {
    setRotation([horizontalRotate,verticalRotate,0])
  }, [horizontalRotate, verticalRotate])
  

  return (
    <ProductLayout
      title='Walking Shoe'
      description="The Nike Sport Edition is a collection of shoes designed for athletes and sports enthusiasts. With a focus on performance and style, these shoes are built to provide comfort, support, and durability during various sporting activities. Whether you're a runner, a gym-goer, or a trail enthusiast, Nike Sport Edition offers a range of options to suit your needs."
      price="$30.99"
      count={count}
      onBackPress={()=>navigation.navigate('Home')}
      setCount={setCount}
    >
        <Suspense fallback={<View style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center'
          }}>
          <ActivityIndicator
          size='large'
          color='#000'
          />
        </View>}>
      <Canvas>
        <ambientLight/>
          <NikeShoeWalk rotation={rotation} isTouch={isTouch}/>
      </Canvas>
        </Suspense>
      <Slider
        style={{width: '100%', height: 40}}
        minimumValue={0}
        maximumValue={6}
        minimumTrackTintColor="#000000"
        maximumTrackTintColor="#000000"
        onValueChange={setHorizontalRotate}
        value={horizontalRotate}
        onTouchEnd={() => setIsTouch(false)}
        onTouchStart={() => setIsTouch(true)}
      />
      <Slider
        style={{width: '100%', height: 40,right: -160, top: 250, position:'absolute', transform:[{rotate: '90deg'}]}}
        minimumValue={0}
        maximumValue={6}
        minimumTrackTintColor="#000000"
        maximumTrackTintColor="#000000"
        onValueChange={setVerticalRotate}
        value={verticalRotate}
        onTouchEnd={() => setIsTouch(false)}
        onTouchStart={() => setIsTouch(true)}
        />
    </ProductLayout>
  )
}

export default Product2Screen