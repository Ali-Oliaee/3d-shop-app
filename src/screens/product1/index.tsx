import React, { useState } from 'react'
import { ScrollView, Text, View } from 'react-native'
import styles from './styles'
import BottomTab from '../../components/bottom-tab'
import BasketIcon from '../../assets/basket'
import SearchInput from '../../components/search-input'
import CategoriesContainer from '../../components/categories-container'
import ProductCard from '../../components/product-card'
import ProductLayout from '../../layouts/product-screen-layout'

const Product1Screen = ({setPage}) => {
  const [count, setCount] = useState<number>(0)
  console.log(setPage);
  
  return (
    <ProductLayout
      title='Nike Sport Edition'
      description="The Nike Sport Edition is a collection of shoes designed for athletes and sports enthusiasts. With a focus on performance and style, these shoes are built to provide comfort, support, and durability during various sporting activities. Whether you're a runner, a gym-goer, or a trail enthusiast, Nike Sport Edition offers a range of options to suit your needs."
      price="$50.18"
    />
  )
}

export default Product1Screen