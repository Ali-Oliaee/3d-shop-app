import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import styles from './styles'
import { Canvas } from '@react-three/fiber'

const ProductLayout = ({model, title, count,price,description}) => {
  return (
    <View style={styles.container}>
        <View style={styles.modelContainer}>
            <Canvas>
                <ambientLight/>
                {model}
            </Canvas>
        </View>
        <View style={styles.content}>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.row}>
                <Text style={styles.price}>{price}</Text>
                <Text>{count}</Text>
            </View>
            <Text style={styles.description}>{description}</Text>
            <View style={styles.row}>
                <TouchableOpacity style={styles.archiveButton}>
                    <Text>Archive</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.confirmButton}>
                    <Text>Add to cart</Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>
  )
}

export default ProductLayout