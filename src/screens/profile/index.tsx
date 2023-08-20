import React from 'react';
import styles from './styles';
import {Image, ScrollView, Text, View} from 'react-native';
import BottomTab from '../../components/bottom-tab';

const ProfileScreen = ({navigation}) => {
  return (
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}>
        <View style={styles.header}>
          <Image
            style={styles.headerImage}
            source={require('../../assets/logo.jpeg')}
          />
        </View>
        <View style={styles.body}>
          <View style={styles.field}>
            <Text style={styles.label}>Name</Text>
            <Text style={styles.value}>RN Coder</Text>
          </View>
          <View style={styles.field}>
            <Text style={styles.label}>Email</Text>
            <Text style={styles.value}>rn_coder@gmail.com</Text>
          </View>
          <View style={styles.field}>
            <Text style={styles.label}>Phone</Text>
            <Text style={styles.value}>+98 910 575 3695</Text>
          </View>
          <View style={styles.field}>
            <Text style={styles.label}>Address</Text>
            <Text style={styles.value}>Mashhad, Iran</Text>
          </View>
        </View>
      <BottomTab navigation={navigation}/>
      </ScrollView>
  );
};

export default ProfileScreen