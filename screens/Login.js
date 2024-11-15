import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginS = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  
  const navigation = useNavigation(); 

  const handleLogin = async () => {
    try {
      const storedEmail = await AsyncStorage.getItem('email');
      const storedPassword = await AsyncStorage.getItem('password');

      // Validate that stored values are not null and are strings
      if (!storedEmail || !storedPassword) {
        setErrorMessage('No account found, please sign up first.');
        return;
      }

      if (typeof storedEmail !== 'string' || typeof storedPassword !== 'string') {
        setErrorMessage('Invalid data format in stored credentials.');
        return;
      }

      if (storedEmail === email && storedPassword === password) {
        Alert.alert('Login Successful', 'Welcome back!');
        navigation.navigate('Dashboard');
      } else {
        setErrorMessage('Invalid email or password.');
      }
    } catch (error) {
      console.error("Login error: ", error);
      setErrorMessage('An error occurred. Please try again.');
    }
  };

  const handleSignupNavigation = () => {
    navigation.navigate('Signup');
  };

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Icon name="music" size={50} color="#4CAF50" />
        <Text>MUSIC</Text>
      </View>

      <View style={styles.Logincon}>
        <Text style={styles.heading}>Login</Text>

        <TextInput
          style={styles.input}
          placeholder="Enter Email"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />

        <TextInput
          style={styles.input}
          placeholder="Enter Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        {errorMessage ? <Text style={styles.errorText}>{errorMessage}</Text> : null}

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Log In</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.signupButton} onPress={handleSignupNavigation}>
          <Text style={styles.signupText}>Don't have an account? Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
    padding: 16,
  },
  iconContainer: {
    marginBottom: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingLeft: 16,
    marginBottom: 10,
  },
  button: {
    width: '100%',
    padding: 15,
    backgroundColor: '#4CAF50',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  signupButton: {
    marginTop: 15,
  },
  signupText: {
    color: '#4CAF50',
    fontSize: 14,
    fontWeight: 'bold',
  },
  Logincon: {
    width: '100%',
    justifyContent: 'center',
    padding: 20,
    alignItems: 'center',
    borderRadius: 1,
    shadowOffset: { width: 8, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 20,
    elevation: 4,
  },
  errorText: {
    color: 'red',
    fontSize: 14,
    marginTop: 10,
  },
});

export default LoginS;
