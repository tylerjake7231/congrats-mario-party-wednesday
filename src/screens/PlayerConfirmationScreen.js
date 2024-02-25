import React, { useState } from "react";
import { View, Text, FlatList, Button, StyleSheet } from "react-native";

export default PlayerConfirmationScreen = ({ route, navigation }) => {
  const playerNames = route.params.playerNames;

  const renderPlayerItem = ({ item, index }) => (
    <Text key={index} style={styles.playerItem}>
      {item}
    </Text>
  );

  const shufflePlayersIntoTeams = (playerNames) => {
    // Implement your chosen shuffling and splitting logic here

    // 1. Shuffle players using Fisher-Yates shuffle
    for (let i = playerNames.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [playerNames[i], playerNames[j]] = [playerNames[j], playerNames[i]];
    }

    // 2. Calculate balanced team size and remainder
    const teamSize = Math.floor(playerNames.length / 4);
    const remainder = playerNames.length % 4;

    // 3. Create teams:
    const shuffledTeams = [];
    for (let i = 0; i < playerNames.length - remainder; i += teamSize) {
      shuffledTeams.push(playerNames.slice(i, i + teamSize));
    }

    // 4. Handle remaining players:
    if (remainder > 0) {
      // Distribute remaining players evenly to existing teams
      for (let i = 0; i < remainder; i++) {
        shuffledTeams[i].push(playerNames[playerNames.length - remainder + i]);
      }
    }

    return shuffledTeams;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Players Confirmed</Text>
      <FlatList
        data={playerNames}
        renderItem={renderPlayerItem}
        keyExtractor={(item) => item}
      />
      <Button
        title="Create Teams"
        onPress={() => {
          const teams = shufflePlayersIntoTeams(playerNames); // Implement your shuffling logic
          navigation.navigate("Randomizer", { playerNames, teams });
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  // ... styles for container, title, playerItem, button
});
