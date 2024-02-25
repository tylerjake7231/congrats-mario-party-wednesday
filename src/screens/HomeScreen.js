import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

export default HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Congrats Mario Party Wednesday</Text>
      <View style={styles.buttonContainer}>
        <Button
          title="New Game"
          onPress={() => navigation.navigate("PlayerInput")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  buttonContainer: {
    width: "80%",
  },
});
