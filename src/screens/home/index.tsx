import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import styles from './styles'
import BottomTab from '../../components/bottom-tab'
import BasketIcon from '../../assets/basket'
import SearchInput from '../../components/search-input'
import CategoriesContainer from '../../components/categories-container'
import ProductCard from '../../components/product-card'

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.logo}>FurnitureCo.</Text>
        <BasketIcon style={styles.basketIcon}/>
      </View>
      <SearchInput/>
      <CategoriesContainer/>
      <ScrollView
      showsVerticalScrollIndicator={false}
      style={styles.productsList}
      contentContainerStyle={{
        flex: 1,
        width: '100%',
        paddingBottom: 40,
        paddingTop: 60,
        paddingHorizontal: 10,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
      }}
      >
        <ProductCard
          title="Two Seater Luxury Sofa"
          price="$50.18"
          image={require('../../assets/sofa1.png')}
        />
         <ProductCard
          title="Royal Palm Sofa"
          price="$30.99"
          image={require('../../assets/chair1.png')}
        />
          <ProductCard
          title="Gaming chair"
          price="$12.39"
          image={require('../../assets/chair2.png')}
        />
          <ProductCard
          title="Leatherette Sofa"
          price="$42.49"
          image={require('../../assets/chair3.png')}
        />
        <ProductCard
          title="Luxury Bed"
          price="$73.19"
          image={require('../../assets/bed1.png')}
        />
        <ProductCard
        title="Royal Palm Sofa"
        price="$33.00"
        image={require('../../assets/sofa2.png')}
      />
      </ScrollView>
      <BottomTab/>
    </View>
  )
}

export default HomeScreen