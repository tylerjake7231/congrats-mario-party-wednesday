import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

export default TeamBubble = ({ item , index}) => {
  return (
    <View key={index} style={styles.bubble}>
      <Text style={styles.teamName}>Team {index + 1}</Text>
      <FlatList
        data={item}
        renderItem={({ item }) => <Text style={styles.playerName}>{item}</Text>}
        keyExtractor={(item) => item}
        style={styles.playerList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
    bubble: {
      backgroundColor: '#72947f',
      padding: 10,
      borderRadius: 10,
      margin:10
    },
    teamName: {
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
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