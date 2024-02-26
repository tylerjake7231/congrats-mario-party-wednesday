import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
} from "react-native";

export default AddPlayerScreen = ({ navigation, route }) => {
  const teams = route.params.teams;

  const [selectedTeamIndex, setSelectedTeamIndex] = useState(-1);
  const [playerName, setPlayerName] = useState("");

  const handleTeamPress = (index) => {
    setSelectedTeamIndex(index);
  };

  const handlePlayerSubmit = () => {
    // Validate player name
    if (!playerName.trim()) {
      alert("Please enter a player name.");
      return;
    }

    // Access and update the relevant team based on selectedTeamIndex
    const selectedTeam = teams[selectedTeamIndex];

    // Add player to the selected team (correct way)
    // Create a new array with the added player
    const updatedSelectedTeam = [...selectedTeam, playerName];

    // Create a copy of the teams array and update the selected team
    const updatedTeams = [...teams];
    updatedTeams[selectedTeamIndex] = updatedSelectedTeam;

    // Navigate back to GameScreen with updated teams
    navigation.navigate({
      name: "GameScreen",
      params: { teams: updatedTeams },
    });
  };

  const renderAddPlayerPrompt = () => {
    return (
      <>
        <TextInput
          style={styles.inputBox}
          onChangeText={setPlayerName}
          value={playerName}
          placeholder="Enter player name..."
        />
        <Button title="Submit" onPress={handlePlayerSubmit} />
      </>
    )
  }

  return (
    <View style={styles.container}>
      <Text style={styles.prompt}>
        Which team would you like to add a player to?
      </Text>
      <View style={styles.teamsContainer}>
        {teams.map((team, index) => (
          <View key={index}>
            <TeamBubble
              key={index}
              item={team}
              index={index}
              isTouchable = {true}
              selectedTeamIndex={selectedTeamIndex}
              handleTeamPress={handleTeamPress}
              render ={renderAddPlayerPrompt}
            />
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({

});
