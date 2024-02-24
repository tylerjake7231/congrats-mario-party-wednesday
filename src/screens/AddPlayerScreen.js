import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, Button, StyleSheet } from 'react-native';

export default AddPlayerScreen = ({ navigation, route }) => {
    const teams = route.params.teams

  const [selectedTeamIndex, setSelectedTeamIndex] = useState(-1);
  const [playerName, setPlayerName] = useState('');

  const handleTeamPress = (index) => {
    setSelectedTeamIndex(index);
  };

  const handlePlayerSubmit = () => {
    // Validate player name
    if (!playerName.trim()) {
        alert('Please enter a player name.');
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
      name:"GameScreen", 
      params:{ teams: updatedTeams }});
  };

  const renderTeamTouchableOpacity = (team, index) => (
    <TouchableOpacity
      key={index}
      style={[styles.teamButton, selectedTeamIndex === index ? styles.selectedTeamButton : {}]}
      onPress={() => handleTeamPress(index)}
    >
      <Text style={styles.teamButtonText}>Team {index + 1}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.prompt}>Which team would you like to add a player to?</Text>
      <View style={styles.teamsContainer}>
        {teams.map(renderTeamTouchableOpacity)}
      </View>
      {selectedTeamIndex !== -1 && (
        <>
          <TextInput
            style={styles.inputBox}
            onChangeText={setPlayerName}
            value={playerName}
            placeholder="Enter player name..."
          />
          <Button title="Submit" onPress={handlePlayerSubmit} />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
    selectedTeamButton: {
        backgroundColor: 'yellow',
    },
});

