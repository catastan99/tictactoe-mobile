import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import colors from "../style/Colors";
import Button from "../components/UI/Button";

const StartScreen = ({
  playerXName,
  player0Name,
  playerXNameHandler,
  player0NameHandler,
  startHandler,
}) => {
  return (
    <View style={styles.startScreenContainer}>
      <Text style={styles.infoText}>
        Vă rugăm să completați numele pentru a începe jocul.
      </Text>
      <View style={styles.card}>
        <View style={styles.playerNameContainer}>
          <Text style={styles.inputLabel}>Player 1 (X)</Text>
          <TextInput
            placeholder="Gigel"
            style={styles.playerInput}
            onChangeText={playerXNameHandler}
            value={playerXName}
          />
        </View>
        <View style={styles.playerNameContainer}>
          <Text style={styles.inputLabel}>Player 2 (0)</Text>
          <TextInput
            placeholder="Vasile"
            style={styles.playerInput}
            onChangeText={player0NameHandler}
            value={player0Name}
          />
        </View>
        <Button style={{ backgroundColor: "green" }} onPress={startHandler}>
          START
        </Button>
      </View>
    </View>
  );
};

export default StartScreen;

const styles = StyleSheet.create({
  startScreenContainer: {
    padding: 20,
    flex: 1,
    height: "100%",
  },
  infoText: {
    color: colors.gray,
    marginBottom: 40,
  },
  card: {
    backgroundColor: "white",
    paddingVertical: 15,
    paddingHorizontal: 8,
    borderRadius: 12,
  },
  playerNameContainer: {
    marginBottom: 25,
  },
  playerInput: {
    backgroundColor: colors.gray,
    padding: 8,
    fontSize: 15,
    color: colors.blue,
    borderRadius: 8,
  },
  inputLabel: {
    fontSize: 13,
    marginBottom: 10,
  },
});
