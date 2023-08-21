import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';

import styles from './styles';
import AdidasLogo from '../../assets/adidasLogo';
import GucciLogo from '../../assets/gucciLogo';
import NikeLogo from '../../assets/nikeLogo';
import PumaLogo from '../../assets/pumaLogo';
import ReebokLogo from '../../assets/reebokLogo';
import StarIcon from '../../assets/starIcon';

const CategoriesContainer = () => {
  const categories = [
    { id: 0, icon: <StarIcon style={styles.icon} />, title: 'Popular' },
    { id: 1, icon: <AdidasLogo style={styles.icon} />, title: 'Adidas' },
    { id: 2, icon: <NikeLogo style={styles.icon} />, title: 'Nike' },
    { id: 3, icon: <GucciLogo style={styles.icon} />, title: 'Gucci' },
    { id: 4, icon: <PumaLogo style={styles.icon} />, title: 'Puma' },
    { id: 5, icon: <ReebokLogo style={styles.icon} />, title: 'Reebok' },
    { id: 6, icon: <AdidasLogo style={styles.icon} />, title: 'Adidas' },
    { id: 7, icon: <NikeLogo style={styles.icon} />, title: 'Nike' },
    { id: 8, icon: <GucciLogo style={styles.icon} />, title: 'Gucci' },
    { id: 9, icon: <PumaLogo style={styles.icon} />, title: 'Puma' },
    { id: 10, icon: <ReebokLogo style={styles.icon} />, title: 'Reebok' },
  ];

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.container}
      contentContainerStyle={styles.contentContainer}>
      {categories.map(({ id, icon, title }) => (
        <View key={id} style={styles.buttonContainer}>
          <TouchableOpacity style={[styles.button, id === 0 && styles.selected]}>
            {icon}
          </TouchableOpacity>
          <Text style={[styles.title, id === 0 && styles.selectedTitle]}>{title}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

export default CategoriesContainer;
