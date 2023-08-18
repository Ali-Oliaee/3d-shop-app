import React from 'react'
import { Text, View } from 'react-native'
import styles from './styles'
import BottomTab from '../../components/bottom-tab'
import BasketIcon from '../../assets/basket'
import SearchInput from '../../components/search-input'
import CategoriesContainer from '../../components/categories-container'

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.logo}>FurnitureCo.</Text>
        <BasketIcon style={styles.basketIcon}/>
      </View>
      <SearchInput/>
      <CategoriesContainer/>
        <BottomTab/>
    </View>
  )
}

export default HomeScreen