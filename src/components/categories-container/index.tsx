import React from 'react'
import { ScrollView, TouchableOpacity, View } from 'react-native'
import styles from './styles'
import ArchiveIcon from '../../assets/archiveIcon'
import HomeIcon from '../../assets/homeIcon'
import BellIcon from '../../assets/belIIcon'
import UserIcon from '../../assets/userIcon'

const CategoriesContainer = () => {
  const categories = [
    { id: 0, icon: <HomeIcon/>},
    { id: 1, icon: <ArchiveIcon/> },
    { id: 2, icon: <BellIcon/> },
    { id: 3, icon: <UserIcon/> },
    { id: 4, icon: <UserIcon/> },
    { id: 5, icon: <HomeIcon/> },
    { id: 6, icon: <ArchiveIcon/> },
    { id: 7, icon: <BellIcon/> },
    { id: 8, icon: <UserIcon/> },
    { id: 9, icon: <UserIcon/> },
    { id: 10, icon: <HomeIcon/> },
  ]

  return (
    <ScrollView horizontal
    showsHorizontalScrollIndicator={false}
    style={styles.container}
    contentContainerStyle={styles.contentContainer}>
       {categories.map(({id,icon}) => (
            <TouchableOpacity key={id} style={styles.button}>
                {icon}
            </TouchableOpacity>
       ))}
    </ScrollView>
  )
}

export default CategoriesContainer