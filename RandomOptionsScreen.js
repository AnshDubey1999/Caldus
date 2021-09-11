import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { API_KEY, API_HOST } from "./src/general";
import { StyleSheet, Button, View, SafeAreaView, Text } from "react-native";
import { ToggleButton } from "react-native-paper";
import { GetRandomAsync } from "./src/helpers/ApiHelper";

export function RandomOptionsScreen() {
  const [joke, setJoke] = useState("");
  const [trivia, setTrivia] = useState("");

  const onPressHandler = async (type) => {
    if (type === "jokes") {
      setJoke(await GetRandomAsync(type));
    }
    if (type === "trivia") {
      setTrivia(await GetRandomAsync(type));
    }
  };

  return (
    <View style={styles.container}>
      <Button title="Random Joke" onPress={() => onPressHandler("jokes")} />
      <Text>{JSON.stringify(joke.text)}</Text>
      <Button
        style={[styles.button, styles.buttonOpen]}
        title="Random Trivia"
        onPress={() => onPressHandler("trivia")}
      />
      <Text>{JSON.stringify(trivia.text)}</Text>
      <Button title="Random Recipe" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 16,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  title: {
    textAlign: "center",
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
