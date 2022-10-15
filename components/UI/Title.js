import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Title = ({children}) => {
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.title}>{children}</Text>
    </View>
  )
}

export default Title;

const styles = StyleSheet.create({
    titleContainer: {
        padding: 5,
        
       
        
    },
    title: {
        textAlign:'center',
        fontSize:34,
        color:'white',

    }

})