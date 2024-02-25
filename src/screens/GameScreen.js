import React from "react";
import { View, FlatList, Button, StyleSheet } from "react-native";

import TeamBubble from "../components/TeamBubble";

export default GameScreen = ({ route, navigation }) => {
  const teams = route.params.teams;

  return (
    <View style={styles.container}>
      <FlatList
        data={teams}
        renderItem={TeamBubble}
        keyExtractor={(item) => item[0]} // Use first player name as key
      />
      <Button
        title="Add Player"
        onPress={() => navigation.navigate("AddPlayerScreen", { teams })}
      />
      <Button
        title="Input Game Results"
        onPress={() => navigation.navigate("InputGameResultsScreen")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  // ... styles for container, teamItem, teamName, playerName, button
});
