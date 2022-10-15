import { StyleSheet, Text, View, Pressable, FlatList } from "react-native";
import React, { useState } from "react";

import colors from "../style/Colors";
import TableCell from "./TableCell";

const TableGrid = ({ handleScore }) => {
  let gameTable = [
    { id: 0, value: "" },
    { id: 1, value: "" },
    { id: 2, value: "" },
    { id: 3, value: "" },
    { id: 4, value: "" },
    { id: 5, value: "" },
    { id: 6, value: "" },
    { id: 7, value: "" },
    { id: 8, value: "" },
  ];

  const [table, setTable] = useState(gameTable);
  const [player, setPlayer] = useState("X");
  const [gameOver, setGameOver] = useState(false);
  const [numberOfFilledCells, setNumberOfFilledCells] = useState(0);

  const cellValueHandler = (position) => {
    if (checkEmptyCell(position) || gameOver === true) return;

    updateCell(position);
    setNumberOfFilledCells((prev) => prev + 1);

    if (
      horizontalCheck() ||
      verticalCheck() ||
      firstDiagonalCheck() ||
      secondDiagonalCheck() ||
      numberOfFilledCells === 9
    ) {
      setGameOver(true);
      handleScore(player);
    } else changePlayer();
  };

  const updateCell = (position) => {
    setTable((prev) => {
      return [...prev, (prev[position].value = player)];
    });
  };

  const checkEmptyCell = (position) => {
    if (table[position].value != "") return true;
    return false;
  };

  const changePlayer = () => {
    if (player === "X") setPlayer("0");
    else setPlayer("X");
  };

  const horizontalCheck = () => {
    if (
      table[0].value === table[1].value &&
      table[1].value == table[2].value &&
      table[2].value !== ""
    )
      return true;

    if (
      table[3].value === table[4].value &&
      table[4].value == table[5].value &&
      table[5].value !== ""
    )
      return true;

    if (
      table[6].value === table[7].value &&
      table[7].value == table[8].value &&
      table[8].value !== ""
    )
      return true;

    return false;
  };

  const verticalCheck = () => {
    if (
      table[0].value === table[3].value &&
      table[3].value == table[6].value &&
      table[6].value !== ""
    )
      return true;

    if (
      table[1].value === table[4].value &&
      table[4].value == table[7].value &&
      table[7].value !== ""
    )
      return true;

    if (
      table[2].value === table[5].value &&
      table[5].value == table[8].value &&
      table[8].value !== ""
    )
      return true;

    return false;
  };

  const firstDiagonalCheck = () => {
    if (
      table[0].value === table[4].value &&
      table[4].value == table[8].value &&
      table[8].value !== ""
    )
      return true;
    return false;
  };

  const secondDiagonalCheck = () => {
    if (
      table[2].value === table[4].value &&
      table[4].value == table[6].value &&
      table[6].value !== ""
    )
      return true;
    return false;
  };

  console.log(numberOfFilledCells);
  return (
    <View style={styles.gridContainer}>
      <View style={styles.gridRow}>
        <Pressable
          style={styles.fullSize}
          onPress={() => cellValueHandler(0)}
          android_ripple={{ borderless: true }}
          key={table[0].id}
        >
          <TableCell value={table[0].value} />
        </Pressable>
        <Pressable
          style={styles.fullSize}
          onPress={() => cellValueHandler(1)}
          android_ripple={{ borderless: true }}
          key={table[1].id}
        >
          <TableCell value={table[1].value} />
        </Pressable>
        <Pressable
          style={styles.fullSize}
          onPress={() => cellValueHandler(2)}
          android_ripple={{ borderless: true }}
          key={table[2].id}
        >
          <TableCell value={table[2].value} />
        </Pressable>
      </View>
      <View style={styles.gridRow}>
        <Pressable
          style={styles.fullSize}
          onPress={() => cellValueHandler(3)}
          android_ripple={{ borderless: true }}
          key={table[3].id}
        >
          <TableCell value={table[3].value} />
        </Pressable>
        <Pressable
          style={styles.fullSize}
          onPress={() => cellValueHandler(4)}
          android_ripple={{ borderless: true }}
          key={table[4].id}
        >
          <TableCell value={table[4].value} />
        </Pressable>
        <Pressable
          style={styles.fullSize}
          onPress={() => cellValueHandler(5)}
          android_ripple={{ borderless: true }}
          key={table[5].id}
        >
          <TableCell value={table[5].value} />
        </Pressable>
      </View>
      <View style={styles.gridRow}>
        <Pressable
          style={styles.fullSize}
          onPress={() => cellValueHandler(6)}
          android_ripple={{ borderless: true }}
          key={table[6].id}
        >
          <TableCell value={table[6].value} />
        </Pressable>
        <Pressable
          style={styles.fullSize}
          onPress={() => cellValueHandler(7)}
          android_ripple={{ borderless: true }}
          key={table[7].id}
        >
          <TableCell value={table[7].value} />
        </Pressable>
        <Pressable
          style={styles.fullSize}
          onPress={() => cellValueHandler(8)}
          android_ripple={{ borderless: true }}
          key={table[8].id}
        >
          <TableCell value={table[8].value} />
        </Pressable>
      </View>
      {!gameOver && numberOfFilledCells < 9 && <Text>Player {player}</Text>}
      {gameOver && <Text>{player + " a câștigat"}</Text>}
      {numberOfFilledCells === 9 && <Text>Remiză</Text>}
    </View>
  );
};

export default TableGrid;

const styles = StyleSheet.create({
  gridContainer: {
    marginTop: 30,
    padding: 5,
    backgroundColor: colors.blue,
  },
  gridRow: {
    height: 120,
    width: "100%",
    flexDirection: "row",
    marginVertical: 5,
  },
  fullSize: {
    flex: 1,
  },
});
