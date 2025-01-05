import { View, Text, StyleSheet, ImageBackground, Pressable } from 'react-native';
import { Link } from 'expo-router';
import React from 'react';

import iceCoffeeImg from '@/assets/images/iced-coffee.png';

const App = () => {
  return (
    <View style={styles.container}>
      <ImageBackground 
        source={iceCoffeeImg} 
        style={styles.image}
      >
        <Text style={styles.title}>App Coffee Shop</Text>
        <Link href='/contact' asChild>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>
              Go to Contact Us Page
            </Text>
          </Pressable>
        </Link>
      </ImageBackground>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginTop: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    marginBottom: 20,
  },
  button: {
    height: 50,
    borderRadius: 25,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    padding: 6,
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    padding: 4,
  },
  image: {
    width: '100%',
    height: '100%',
    flex: 1,
    justifyContent: 'center',
  },
});