import React from 'react'
import { Text, TouchableWithoutFeedback, View } from 'react-native'
import styles from './styles'

const BottomTab = () => {
  return (
    <View style={styles.container}>
        <TouchableWithoutFeedback>
            <Text>option</Text>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback>
            <Text>option</Text>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback>
            <Text>option</Text>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback>
            <Text>option</Text>
        </TouchableWithoutFeedback>
    </View>
  )
}

export default BottomTab