import React, { useState, useEffect} from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';

export default GameScreen = ({ route, navigation}) => {
  const teams = route.params.teams;

  const RenderTeamItem = ({ item, index }) => (
    <View key={index} style={styles.teamItem}>
      <Text style={styles.teamName}>Team {index + 1}</Text>
      <FlatList
        data={item}
        renderItem={({ item }) => <Text style={styles.playerName}>{item}</Text>}
        keyExtractor={(item, index) => `team${index}-player${item}`} // Ensure unique keys
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={teams}
        renderItem={RenderTeamItem}
        keyExtractor={(item, index) => `team${index}`} // Ensure unique keys for teams
      />
      <Button title="Add Player" onPress={() => navigation.navigate('AddPlayerScreen', {teams})} />
      <Button title="Input Game Results" onPress={() => navigation.navigate('InputGameResultsScreen')} />
    </View>
  );
};

const styles = StyleSheet.create({
  // ... styles for container, teamItem, teamName, playerName, button
});

