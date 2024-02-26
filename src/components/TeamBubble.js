import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableHighlight,
} from "react-native";

const teamColors = ["blue", "red", "green", "yellow"];

export default TeamBubble = ({ item, index, isTouchable, selectedTeamIndex, handleTeamPress, render}) => {
  return isTouchable ? (
    <TouchableHighlight
      key={index}
      style={[
        styles.bubble,
        { backgroundColor: teamColors[index % teamColors.length] },
        selectedTeamIndex === index ? styles.selectedTeamBubble : {}, // Apply selected style
      ]}
      onPress={() => handleTeamPress(index)}
    >
      <>
        <TeamBubbleData item={item} index={index}/>
        {selectedTeamIndex === index && render()}
      </>
    </TouchableHighlight>
  ) : (
    <View
      key={index}
      style={[
        styles.bubble,
        { backgroundColor: teamColors[index % teamColors.length] },
      ]}
    >
      <TeamBubbleData item={item} index={index}/>
    </View>
  );
};

const TeamBubbleData = ({ item, index}) => {
  return (
    <>
      <Text style={styles.teamName}>Team {index + 1}</Text>
      <FlatList
        data={item}
        renderItem={({ item }) => <Text style={styles.playerName}>{item}</Text>}
        keyExtractor={(item) => item}
        style={styles.playerList}
      />
    </>
  )
}

const styles = StyleSheet.create({
  bubble: {
    padding: 10,
    borderRadius: 10,
    borderColor: "black",
    borderStyle: "solid",
    borderWidth: "2px",
    margin: 10,
  },
  selectedTeamBubble: {
    backgroundColor: 'gold', // Or your desired color
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
