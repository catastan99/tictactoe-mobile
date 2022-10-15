import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import Title from "./components/UI/Title";
import GameScreen from "./screens/GameScreen";
import StartScreen from "./screens/StartScreen";

export default function App() {
  const [screen, setScreen] = useState(false);
  const [playerXName, setPlayerXName] = useState("");
  const [player0Name, setPlayer0Name] = useState("");

  const playerXNameHandler = (enteredName) => {
    setPlayerXName(enteredName);
  };

  const player0NameHandler = (enteredName) => {
    setPlayer0Name(enteredName);
  };

  const startHandler = () => {
    setScreen((prev) => !prev);
  };

  console.log(player0Name, playerXName);
  return (
    <>
      <StatusBar style="light" />
      <SafeAreaView style={styles.appContainer}>
        <ScrollView>
          <Title>TicTacToe</Title>
          {screen === false && (
            <StartScreen
              player0NameHandler={player0NameHandler}
              playerXNameHandler={playerXNameHandler}
              startHandler={startHandler}
              playerXName={playerXName}
              player0Name={player0Name}
            />
          )}
          {screen === true && (
            <GameScreen
              playerXName={playerXName}
              player0Name={player0Name}
              startHandler={startHandler}
            />
          )}
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
  },
});
