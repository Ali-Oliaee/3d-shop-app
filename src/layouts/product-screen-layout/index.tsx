import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import styles from './styles'
import { Canvas } from '@react-three/fiber'
import ArchiveIconLarge from '../../assets/archiveIconLarge'
import YellowStar from '../../assets/starYellow'
import LeftArrow from '../../assets/leftArrow'

const ProductLayout = ({model, title, count,price,description}) => {
  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.backButton}>
            <LeftArrow/>
        </TouchableOpacity>
        <View style={styles.modelContainer}>
            <Canvas>
                <ambientLight/>
                {model}
            </Canvas>
        </View>
        <View>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.row}>
                <Text style={styles.price}>{price}</Text>
                <Text>{count}</Text>
            </View>
            <View style={styles.rateContainer}>
                <YellowStar/>
                <Text style={styles.rate}>4.5</Text>
                <Text style={styles.reviewers}>(500 Reviews)</Text>
            </View>
            <Text style={styles.description}>{description}</Text>
            <View style={styles.footer}>
                <TouchableOpacity style={styles.archiveButton}>
                    <ArchiveIconLarge/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.confirmButton}>
                    <Text style={styles.confirmButtonText}>Add to cart</Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>
  )
}

export default ProductLayout