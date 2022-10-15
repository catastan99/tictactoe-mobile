import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "../../style/Colors";

const Button = ({children, style, onPress}) => {
  
  return (
    <View style={[styles.buttonContainer,style]}>
      <Pressable onPress={onPress}>
        <Text style={styles.textContainer}>{children}</Text>
      </Pressable>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
    textContainer: {
        padding:10,
        color:"white",
        textAlign:"center",
        fontSize:18
    },
    buttonContainer:{
        backgroundColor:colors.pink,
        borderRadius:8,
        marginHorizontal:10,
        overflow:"hidden"
    }
});
