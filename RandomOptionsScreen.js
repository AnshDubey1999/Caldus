import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { API_KEY, API_HOST } from "./src/general";
import { StyleSheet, Button, View, SafeAreaView, Text } from "react-native";
import { ToggleButton } from "react-native-paper";

function getRandomJoke() {
  const fetchJoke = async () => {
    await fetch(
      "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/jokes/random",
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": API_HOST,
          "x-rapidapi-key": API_KEY,
        },
      }
    )
      .then((response) => response.json().then((res) => res))
      .catch((err) => {
        console.error(err);
      });
  };
}

export function RandomOptionsScreen() {
  const [joke, setJoke] = useState("THIS IS A JOKE");

  const onPressHandler = () => {
    getRandomJoke();
  };

  return (
    <View>
      <Button title="Random Joke" onPress={onPressHandler} />
      <Text>{joke}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 16,
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
