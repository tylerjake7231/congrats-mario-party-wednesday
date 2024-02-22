import React, {useState} from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';

export default PlayerConfirmationScreen = ({ route, navigation }) => {
  const playerNames = route.params.playerNames;
  const [teams, setTeams] = useState([]);

  const renderPlayerItem = ({ item, index }) => (
    <Text key={index} style={styles.playerItem}>{item}</Text>
  );

  // Function to randomize players into teams
  const shufflePlayersIntoTeams = (playerNames) => {
    // Implement your chosen shuffling and splitting logic here
    // Example using Fisher-Yates shuffle
    for (let i = playerNames.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [playerNames[i], playerNames[j]] = [playerNames[j], playerNames[i]];
    }
    const teamSize = Math.floor(playerNames.length / 4);
    const shuffledTeams = [];
    for (let i = 0; i < playerNames.length; i += teamSize) {
      shuffledTeams.push(playerNames.slice(i, i + teamSize));
    }
    setTeams(shuffledTeams);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Players Confirmed</Text>
      <FlatList
        data={playerNames}
        renderItem={renderPlayerItem}
        keyExtractor={(item) => item}
      />
      <Button title="Create Teams" 
        onPress={() => {
            shufflePlayersIntoTeams(playerNames); // Implement your shuffling logic
            navigation.navigate('Randomizer', { playerNames, teams });
        }} />
    </View>
  );
};

const styles = StyleSheet.create({
  // ... styles for container, title, playerItem, button
});

