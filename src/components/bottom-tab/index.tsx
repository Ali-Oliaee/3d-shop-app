import React from 'react';
import { TouchableWithoutFeedback, View } from 'react-native';

import styles from './styles';
import ArchiveIcon from '../../assets/archiveIcon';
import BellIcon from '../../assets/belIIcon';
import HomeIcon from '../../assets/homeIcon';
import UserIcon from '../../assets/userIcon';

const BottomTab = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={() => navigation.navigate('Home')}>
        <HomeIcon />
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback>
        <ArchiveIcon />
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback>
        <BellIcon />
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={() => navigation.navigate('Profile')}>
        <UserIcon />
      </TouchableWithoutFeedback>
    </View>
  );
};

export default BottomTab;
