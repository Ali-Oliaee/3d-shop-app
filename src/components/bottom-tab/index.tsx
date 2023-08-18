import React from 'react'
import { TouchableWithoutFeedback, View } from 'react-native'
import styles from './styles'
import ArchiveIcon from '../../assets/archiveIcon'
import HomeIcon from '../../assets/homeIcon'
import BellIcon from '../../assets/belIIcon'
import UserIcon from '../../assets/userIcon'

const BottomTab = () => {
  return (
    <View style={styles.container}>
        <TouchableWithoutFeedback>
            <HomeIcon/>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback>
            <ArchiveIcon/>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback>
            <BellIcon/>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback>
            <UserIcon />
        </TouchableWithoutFeedback>
    </View>
  )
}

export default BottomTab