import React, { useState } from 'react'
import ProductLayout from '../../layouts/product-screen-layout'

const Product2Screen = ({setPage}) => {
  const [count, setCount] = useState<number>(1)
  return (
    <ProductLayout
      title='Walking Shoe'
      description="The Nike Sport Edition is a collection of shoes designed for athletes and sports enthusiasts. With a focus on performance and style, these shoes are built to provide comfort, support, and durability during various sporting activities. Whether you're a runner, a gym-goer, or a trail enthusiast, Nike Sport Edition offers a range of options to suit your needs."
      price="$30.99"
      count={count}
      onBackPress={()=>setPage('home')}
      setCount={setCount}
    />
  )
}

export default Product2Screen