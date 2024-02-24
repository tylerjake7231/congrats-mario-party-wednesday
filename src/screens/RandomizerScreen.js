import React, { useState } from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';

import TeamBubble from '../components/TeamBubble';
import { render } from 'react-dom';

export default RandomizerScreen = ({ route, navigation }) => {
  const {playerNames, teams} = route.params;

  return (
    <View style={styles.container}>
      {teams.length > 0 && (
        <FlatList
          data={teams}
          renderItem={TeamBubble}
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

