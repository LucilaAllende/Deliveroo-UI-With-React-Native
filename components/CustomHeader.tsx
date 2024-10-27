import Colors from '@/constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Text, SafeAreaView, StyleSheet, View, TouchableOpacity, Image } from 'react-native';
import SearchBar from './SearchBar';
import CustomModalHeader from './CustomModalHeader';

const CustomHeader = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <CustomModalHeader isVisible={isModalVisible} onClose={toggleModal} />
      <View style={styles.container}>
        <TouchableOpacity onPress={toggleModal} >
          <Image 
            style={styles.bike}
            source={require('@/assets/images/bike.png')} 
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.titleContainer} >
          <Text style={styles.title} >Delivery · Now</Text>
          <View style={styles.subtitleContainer}>
            <Text style={styles.subtitle}>Selected location</Text>
            <Ionicons name="chevron-down" size={20} color={Colors.primary} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.profileButton}>
          <Ionicons name="person-outline" size={20} color={Colors.primary} />
        </TouchableOpacity>
      </View>
      <SearchBar />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    height: 60,
    backgroundColor: '#fff',
    flexDirection: 'row',
    gap: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  bike: {
    width: 30,
    height: 30,
  },
  titleContainer: {
    flex: 1,
  },
  title: {
    fontSize: 14,
    color: Colors.medium
  },
  subtitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  subtitle:{
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  profileButton: {
    backgroundColor: Colors.lightGrey,
    padding: 10,
    borderRadius: 50,
  },
});

export default CustomHeader;