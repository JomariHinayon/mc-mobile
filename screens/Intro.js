import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation

const Intro = () => {
  const navigation = useNavigation(); // Get the navigation object

  // Handle screen navigation
  const handlePress = () => {
    navigation.navigate('Login'); // Navigate to the Login screen
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <View style={styles.logoContainer}>
        <Icon name="music-note" size={300} color="#D9d9d9" />
        <Text style={styles.text}>MSCLBR</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  text: {
    fontSize: 32,
    fontWeight: 'bold',
    marginTop: 20,
    color: '#333',
  },
});

export default Intro;
