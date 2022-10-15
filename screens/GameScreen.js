import { useState } from "react";
import {  View, StyleSheet, Text } from "react-native";
import TableGrid from "../components/TableGrid";
import Button from "../components/UI/Button";
import colors from "../style/Colors";

function GameScreen({ playerXName, player0Name, startHandler }) {
  const [playerXScore, setPlayerXScore] = useState(0)
  const [player0Score, setPlayer0Score] = useState(0)

  const handleScore = (player) =>{
    if(player==='X') setPlayerXScore(prev=>prev+1)
    else setPlayer0Score(prev=>prev+1)
  }

  return (
    <View style={styles.gameContainer}>
      <View style={styles.scoreContainer}>
        <View style={styles.playerCard}>
          <Text style={styles.playerName}>(X) {playerXName}</Text>
          <Text style={styles.playerScore}>{playerXScore}</Text>
        </View>
        <View>
          <Text style={styles.playerScore}>-</Text>
        </View>
        <View style={styles.playerCard}>
          <Text style={styles.playerScore}>{player0Score}</Text>
          <Text style={styles.playerName}>{player0Name} (0)</Text>
        </View>
      </View>
      <TableGrid handleScore={handleScore}/>
      <View style={styles.buttonsContainer}>
        <View>
          <Button onPress={startHandler}>RESET</Button>
        </View>
        {/* <View>
          <Button style={{backgroundColor:colors.gray}}>PLAY AGAIN</Button>
        </View> */}
      </View>
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  gameContainer: {
    flex: 1,
  },
  buttonsContainer: {
    flexDirection: "row",
    paddingVertical: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  scoreContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  playerCard: {
    flexDirection: "row",
  },
  playerName: {
    backgroundColor: colors.blue,
    padding: 10,
  },
  playerScore: {
    padding: 10,
    backgroundColor: colors.gray,
  },
});
