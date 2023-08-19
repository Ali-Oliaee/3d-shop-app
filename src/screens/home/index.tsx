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
        <Text style={styles.logo}>Shoe Store</Text>
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
          title="Nike Sport Edition"
          price="$50.18"
          image={require('../../assets/nikeShoe.png')}
        />
          <ProductCard
          title="Adidas Hill"
          price="$12.39"
          image={require('../../assets/sport.png')}
        />
         <ProductCard
          title="Walking Shoe"
          price="$30.99"
          image={require('../../assets/nikeWalk.png')}
        />
          <ProductCard
          title="Sport Shoe"
          price="$42.49"
          image={require('../../assets/blackShoe.png')}
        />
        <ProductCard
          title="HOKA Child"
          price="$73.19"
          image={require('../../assets/shoe2.png')}
        />
        <ProductCard
        title="Gucci Sandal"
        price="$33.00"
        image={require('../../assets/sandal.png')}
      />
      </ScrollView>
      <BottomTab/>
    </View>
  )
}

export default HomeScreen