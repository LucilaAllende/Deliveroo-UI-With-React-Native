import Colors from '@/constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import React from 'react';
import { Text, SafeAreaView, StyleSheet, View, TouchableOpacity, Image } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

const SearchBar = () => {
  return (
    <View style={styles.searchContainer}>
      <View style={styles.searchSection} >
        <View style={styles.searchField}>
          <Ionicons name="ios-search" size={20} color={Colors.medium} style={styles.searchIcon} />
          <TextInput
            style={styles.inputSearch}
            placeholder="Restaurants, groceries, dishes"
          />
        </View>
        <Link href={'/'} asChild>
          <TouchableOpacity  style={styles.optionButton}>
            <Ionicons name="options-outline" size={20} color={Colors.primary} />
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
}

const CustomHeader = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <TouchableOpacity>
          <Image 
            style={styles.bike}
            source={require('@/assets/images/bike.png')} 
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.titleContainer} >
          <Text style={styles.title} >Delivery · Now</Text>
          <View style={styles.subtitleContainer}>
            <Text style={styles.subtitle}>Your location</Text>
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
  searchContainer: {
    height: 60,
    backgroundColor: '#fff',
  },
  searchSection: {
    flexDirection: 'row',
    gap: 10,
    flex: 1,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  searchField: {
    flex: 1,
    backgroundColor: Colors.lightGrey,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  optionButton: {
    padding: 10,
    borderRadius: 50,
  },
  searchIcon: {
    paddingLeft: 10
  },
  inputSearch:{
    padding: 10,
    color: Colors.mediumDark,
  }
});



export default CustomHeader;