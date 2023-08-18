import React from 'react'
import { View } from 'react-native'
import styles from './styles'
import BottomTab from '../../components/bottom-tab'

const HomeScreen = () => {
  return (
    <View style={styles.container}>
        <BottomTab/>
    </View>
  )
}

export default HomeScreen