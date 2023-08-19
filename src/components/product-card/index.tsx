import React from 'react'
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import styles from './styles'
import RightArrowIcon from '../../assets/rightArrow'

const ProductCard = ({title, price, image, hasShadow=true}) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
      {image && <Image source={image} style={styles.image}/>}
      {hasShadow && <View style={styles.shadow}/>}
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.footer}>
          <Text style={styles.price}>{price}</Text>
          <TouchableOpacity style={styles.button}>
            <RightArrowIcon/>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default ProductCard