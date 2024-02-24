import React, { useState } from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';

export default RandomizerScreen = ({ route, navigation }) => {
  const {playerNames, teams} = route.params;

  const renderTeamItem = ({ item, index }) => (
    <View key={index} style={styles.teamItem}>
      <Text style={styles.teamName}>Team {index + 1}</Text>
      <FlatList
        data={item}
        renderItem={({ item }) => <Text style={styles.playerName}>{item}</Text>}
        keyExtractor={(item) => item}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      {teams.length > 0 && (
        <FlatList
          data={teams}
          renderItem={renderTeamItem}
          keyExtractor={(item) => item[0]} // Use first player name as key
        />
      )}
      <Button title="Start Game!" onPress={() => navigation.navigate('GameScreen', {teams})}/>
    </View>
  );
};

const styles = StyleSheet.create({
  // ... styles for container, teamItem, teamName, playerName, button
});

