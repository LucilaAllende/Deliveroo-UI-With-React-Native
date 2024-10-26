import { Link } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, View, TouchableOpacity, TextInput } from 'react-native';
import Colors from '@/constants/Colors';


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

const styles = StyleSheet.create({
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
  searchIcon: {
    paddingLeft: 10
  },
  inputSearch:{
    padding: 10,
    color: Colors.mediumDark,
  },
  optionButton: {
    padding: 10,
    borderRadius: 50,
  },
});

export default SearchBar;