import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableHighlight,
} from "react-native";

const teamColors = ["blue", "red", "green", "yellow"];

export default TeamBubble = ({ item, index, isTouchable, onPress }) => {
  return isTouchable ? (
    <TouchableHighlight
      key={index}
      style={[
        styles.bubble,
        { backgroundColor: teamColors[index % teamColors.length] },
      ]}
      onPress={onPress}
    >
      <Text style={styles.teamName}>Team {index + 1}</Text>
      <FlatList
        data={item}
        renderItem={({ item }) => <Text style={styles.playerName}>{item}</Text>}
        keyExtractor={(item) => item}
        style={styles.playerList}
      />
    </TouchableHighlight>
  ) : (
    <View
      key={index}
      style={[
        styles.bubble,
        { backgroundColor: teamColors[index % teamColors.length] },
      ]}
    >
      <Text style={styles.teamName}>Team {index + 1}</Text>
      <FlatList
        data={item}
        renderItem={({ item }) => <Text style={styles.playerName}>{item}</Text>}
        keyExtractor={(item) => item}
        style={styles.playerList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  bubble: {
    padding: 10,
    borderRadius: 10,
    borderColor: "black",
    borderStyle: "solid",
    borderWidth: "2px",
    margin: 10,
  },
  teamName: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 5,
  },
  playerList: {
    //rendering players
  },
  playerName: {
    fontSize: 14,
    marginBottom: 5,
  },
});
