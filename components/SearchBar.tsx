import React from 'react';
import { Link } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, View, TouchableOpacity, TextInput } from 'react-native';
import Colors from '@/constants/Colors';

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.section} >
        <View style={styles.inputContainer}>
          <Ionicons name="search" size={20} color={Colors.medium} style={styles.icon} />
          <TextInput
            style={styles.input}
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

const styles = StyleSheet.create({
  container: {
    height: 60,
    backgroundColor: '#fff',
  },
  section: {
    flexDirection: 'row',
    gap: 10,
    flex: 1,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  inputContainer: {
    flex: 1,
    backgroundColor: Colors.lightGrey,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    paddingLeft: 10
  },
  input:{
    flex: 1,
    padding: 10,
    color: Colors.mediumDark,
  },
  optionButton: {
    padding: 10,
    borderRadius: 50,
  },
});

export default SearchBar;