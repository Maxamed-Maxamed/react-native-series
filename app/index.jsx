import { View, Text, StyleSheet, ImageBackground , Pressable, Button} from 'react-native';
import { Link } from 'expo-router';
import React from 'react';

import iceCoffeeImg from '@/assets/images/iced-coffee.png';

const app = () => {
  return (
    <View style={styles.container}>
      <ImageBackground 
        source={iceCoffeeImg} 
        resizeMode='cover'
        style = {styles.image}

     >
        <Text style={styles.title}>App coffee shop</Text>
        <Link href='/explore' style={{marginHorizontal : 'auto'}} asChild> 
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>
            Go to Explore pages

          </Text>
          </Pressable>
         </Link>
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
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginTop: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    marginBottom: 20,
  },
  link: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginTop: 20,
    textDecorationLine: 'underline',
    padding: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  button: {
    height: 50,
    borderRadius: 25,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    padding:6,
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
    resizeMode: 'cover',
    
    
  }
});