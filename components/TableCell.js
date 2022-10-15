import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../style/Colors'

const TableCell = ({value}) => {
  return (
    <View style={styles.gridItem}>
            <Text style={styles.text}>{value}</Text>    
    </View>
  )
}

export default TableCell

const styles = StyleSheet.create({
    gridItem:{
        flex:1,
        backgroundColor:colors.yellow,
        marginHorizontal:5,
        alignItems:"center",
        justifyContent:"center"
    },
    text:{
        fontSize:60 ,
        color:"white"       
    }
})