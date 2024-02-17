import React from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';

export default PlayerConfirmationScreen = ({ route, navigation }) => {
  const playerNames = route.params.playerNames;

  const renderPlayerItem = ({ item, index }) => (
    <Text key={index} style={styles.playerItem}>{item}</Text>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Players Confirmed</Text>
      <FlatList
        data={playerNames}
        renderItem={renderPlayerItem}
        keyExtractor={(item) => item}
      />
      <Button title="Create Teams" onPress={() => navigation.navigate('Randomizer', { playerNames })} />
    </View>
  );
};

const styles = StyleSheet.create({
  // ... styles for container, title, playerItem, button
});

