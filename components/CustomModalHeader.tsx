import Colors from '@/constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import React from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

interface CustomModalProps {
  isVisible: boolean;
  onClose: () => void;
  height?: string | number;
}

const CustomModalHeader: React.FC<CustomModalProps> = ({ isVisible, onClose, height = '50%' }) => {
  const modalHeight = typeof height === 'number' ? height : Dimensions.get('window').height * (parseInt(height) / 100);

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose}
    >
      <View style={styles.modalView}>
        <View style={[styles.contentContainer, { height: modalHeight }]}>
          <View style={styles.toggle}>
            <TouchableOpacity style={styles.toggleActive}>
              <Text style={styles.activeText}>Delivery</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.toggleInactive}>
              <Text style={styles.inactiveText}>Pickup</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.subheader}>Your Location</Text>
          <Link href={'/'} asChild>
            <TouchableOpacity>
              <View style={styles.item}>
                <Ionicons name="location-outline" size={20} color={Colors.medium} />
                <Text style={{ flex: 1 }}>Current location</Text>
                <Ionicons name="chevron-forward" size={20} color={Colors.primary} />
              </View>
            </TouchableOpacity>
          </Link>

          <Text style={styles.subheader}>Arrival time</Text>
          <TouchableOpacity>
            <View style={styles.item}>
              <Ionicons name="stopwatch-outline" size={20} color={Colors.medium} />
              <Text style={{ flex: 1 }}>Now</Text>
              <Ionicons name="chevron-forward" size={20} color={Colors.primary} />
            </View>
          </TouchableOpacity>          
          <TouchableOpacity
            style={styles.button}
            onPress={onClose}
          >
            <Text style={styles.buttonText}>Confirm</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalView: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  contentContainer: {
    width: '100%',
    backgroundColor: Colors.lightGrey,
    paddingTop: 24,
  },
  toggle: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10,
    marginBottom: 24,
  },
  toggleActive: {
    backgroundColor: Colors.primary,
    padding: 8,
    borderRadius: 32,
    paddingHorizontal: 30,
  },
  activeText: {
    color: '#fff',
    fontWeight: '700',
  },
  toggleInactive: {
    padding: 8,
    borderRadius: 32,
    paddingHorizontal: 30,
  },
  inactiveText: {
    color: Colors.primary,
  },
  subheader: {
    fontSize: 16,
    fontWeight: '600',
    margin: 16,
  },
  item: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 16,
    borderColor: Colors.grey,
    borderWidth: 1,
  },
  button: {
    backgroundColor: Colors.primary,
    padding: 16,
    margin: 16,
    borderRadius: 4,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default CustomModalHeader;