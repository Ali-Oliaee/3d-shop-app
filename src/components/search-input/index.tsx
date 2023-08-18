import React from 'react'
import { TextInput, TouchableOpacity, View } from 'react-native'
import styles from './styles'
import SearchIcon from '../../assets/searchIcon'
import FilterIcon from '../../assets/filterIcon'

const SearchInput = () => {
  return (
    <View style={styles.container}>
       <SearchIcon style={styles.icon}/>
       <TextInput
        placeholder='Search'
        style={styles.input}
        cursorColor='#808080'
        placeholderTextColor='#808080'
       />
       <TouchableOpacity activeOpacity={0.8} style={styles.filterButton}>
        <FilterIcon/>
       </TouchableOpacity>
    </View>
  )
}

export default SearchInput