import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import styles from './styles';
import ArchiveIconLarge from '../../assets/archiveIconLarge';
import LeftArrow from '../../assets/leftArrow';
import YellowStar from '../../assets/starYellow';

const ProductLayout = ({ title, setCount, count, price, description, onBackPress, children }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={onBackPress}>
        <LeftArrow />
      </TouchableOpacity>
      <View style={styles.modelContainer}>{children}</View>
      <View>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.row}>
          <Text style={styles.price}>{price}</Text>
          <View style={styles.counter}>
            <TouchableOpacity style={styles.counterButton} onPress={() => setCount(count + 1)}>
              <Text style={styles.counterButtonText}>+</Text>
            </TouchableOpacity>
            <Text style={styles.count}>
              {count < 10 && '0'}
              {count || 0}
            </Text>
            <TouchableOpacity
              style={styles.counterButton}
              onPress={() => setCount(count >= 1 && count - 1)}>
              <Text style={styles.counterButtonText}>-</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.rateContainer}>
          <YellowStar />
          <Text style={styles.rate}>4.5</Text>
          <Text style={styles.reviewers}>(500 Reviews)</Text>
        </View>
        <Text style={styles.description}>{description}</Text>
        <View style={styles.footer}>
          <TouchableOpacity style={styles.archiveButton}>
            <ArchiveIconLarge />
          </TouchableOpacity>
          <TouchableOpacity style={styles.confirmButton}>
            <Text style={styles.confirmButtonText}>Add to cart</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ProductLayout;
