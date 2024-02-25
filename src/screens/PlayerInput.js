import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

export default PlayerInputScreen = ({ navigation }) => {
  const [playerName, setPlayerName] = useState("");
  const [playerNames, setPlayerNames] = useState([]);

  const handleNameChange = (text) => setPlayerName(text);

  const addPlayer = () => {
    if (playerName.trim()) {
      // Check for empty or whitespace-only names
      setPlayerNames([...playerNames, playerName]);
      setPlayerName("");
    }
  };

  const handleRemovePlayer = (index) => {
    const updatedNames = [...playerNames];
    updatedNames.splice(index, 1);
    setPlayerNames(updatedNames);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter Players</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={playerName}
          onChangeText={handleNameChange}
          onSubmitEditing={addPlayer}
        />
        <Button title="Enter" onPress={addPlayer} />
      </View>
      <View style={styles.playerList}>
        {playerNames.map((name, index) => (
          <View key={index} style={styles.playerItem}>
            <Text>{name}</Text>
            <Button title="Remove" onPress={() => handleRemovePlayer(index)} />
          </View>
        ))}
      </View>
      <Button
        title="Next"
        onPress={() =>
          navigation.navigate("PlayerConfirmation", { playerNames })
        }
        disabled={playerNames.length < 4}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 20,
  },
  inputContainer: {
    flex: 0.1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  input: {
    width: "70%",
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    marginBottom: 10,
  },
  playerList: {
    flex: 0.9,
  },
  playerItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
