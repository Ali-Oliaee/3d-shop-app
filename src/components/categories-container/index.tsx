import React from 'react'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import styles from './styles'
import ArchiveIcon from '../../assets/archiveIcon'
import HomeIcon from '../../assets/homeIcon'
import BellIcon from '../../assets/belIIcon'
import UserIcon from '../../assets/userIcon'
import StarIcon from '../../assets/starIcon'
import ChairIcon from '../../assets/chairIcon'
import TableIcon from '../../assets/tableIcon'
import SofaIcon from '../../assets/sofaIcon'
import BedIcon from '../../assets/bedIcon'

const CategoriesContainer = () => {
  const categories = [
    { id: 0, icon: <StarIcon style={styles.icon}/>, title: 'Popular'},
    { id: 1, icon: <ChairIcon style={styles.icon}/>, title: 'Chairs'},
    { id: 2, icon: <TableIcon style={styles.icon}/>, title: 'Tables'},
    { id: 3, icon: <SofaIcon style={styles.icon}/>, title: 'Sofas'},
    { id: 4, icon: <BedIcon style={styles.icon}/>, title: 'Beds'},
    { id: 5, icon: <ChairIcon style={styles.icon}/>, title: 'Chairs'},
    { id: 6, icon: <ChairIcon style={styles.icon}/>, title: 'Chairs' },
    { id: 7, icon: <TableIcon style={styles.icon}/> , title: 'Tables'},
    { id: 8, icon: <SofaIcon style={styles.icon}/>, title: 'Sofas' },
    { id: 9, icon: <BedIcon style={styles.icon}/>, title: 'Beds' },
  ]

  return (
    <ScrollView horizontal
    showsHorizontalScrollIndicator={false}
    style={styles.container}
    contentContainerStyle={styles.contentContainer}>
       {categories.map(({id,icon,title}) => (
        <View key={id} style={styles.buttonContainer}>
            <TouchableOpacity style={[styles.button, id === 0 && styles.selected]}>
                {icon}
            </TouchableOpacity>
            <Text style={[styles.title, id === 0 && styles.selectedTitle]}>
                {title}
            </Text>
          </View>
       ))}
    </ScrollView>
  )
}

export default CategoriesContainer