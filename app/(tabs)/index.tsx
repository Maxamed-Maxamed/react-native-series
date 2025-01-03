import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import React from 'react';

const iceCoffeeImg = require('@/assets/images/iced-coffee.png');

const app = () => {
  return (
    <View style={styles.container}>
      <ImageBackground 
        source={iceCoffeeImg} 
        resizeMode='cover'
        style = {styles.image}

     >
        <Text style={styles.text}>App coffee shop</Text>
      </ImageBackground>
    </View>
  );
};

export default app;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'red',
    textAlign: 'center',
    marginTop: 20,
  },

  image: {
    width: '100%',
    height: '100%',
    flex: 1,
    justifyContent: 'center',
    resizeMode: 'cover',
    
    
  }
});