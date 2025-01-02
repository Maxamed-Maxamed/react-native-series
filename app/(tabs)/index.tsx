import { View, Text , StyleSheet} from 'react-native'
import React from 'react'

const app = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text} >App coffe shop </Text>
    </View>
  )
}

export default app

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
   
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'red',
    textAlign: 'center',
    marginTop: 20,
  }
})