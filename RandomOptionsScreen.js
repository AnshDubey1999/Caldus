import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { API_KEY, API_HOST } from "./src/general";
import {
  StyleSheet,
  Pressable,
  View,
  SafeAreaView,
  Text,
  TouchableOpacity,
} from "react-native";
import { ToggleButton } from "react-native-paper";
import { GetRandomAsync } from "./src/helpers/ApiHelper";
import {
  MaterialCommunityIcons,
  Fontisto,
  FontAwesome,
} from "@expo/vector-icons";

export function RandomOptionsScreen() {
  const [joke, setJoke] = useState("");
  const [trivia, setTrivia] = useState("");
  const [isJokeVisible, setJokeVisible] = userState(false);
  const [isTriviaVisible, setTriviaVisible] = userState(false);

  const onPressHandler = async (type) => {
    if (type === "jokes") {
      setJoke(await GetRandomAsync(type));
    }
    if (type === "trivia") {
      setTrivia(await GetRandomAsync(type));
    }
  };

  const toggleJokeOverlay = () => {
    setJokeVisible(!isJokeVisible);
  };

  const toggleTriviaOverlay = () => {
    setTriviaVisible(!isTriviaVisible);
  };

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Fontisto name="laughing" size={30} color="black" />
        <Pressable
          style={styles.button}
          onPress={() => {
            onPressHandler("jokes");
            toggleJokeOverlay();
          }}
        >
          <Text style={styles.buttonText}>Random Joke</Text>
        </Pressable>

        <Overlay isVisible={isJokeVisible} onBackdropPress={toggleJokeOverlay}>
          <Text>{JSON.stringify(joke.text)}</Text>
        </Overlay>
      </View>
      <View style={styles.row}>
        <MaterialCommunityIcons
          name="head-question-outline"
          size={30}
          color="black"
        />
        <Pressable
          title="Random Trivia"
          onPress={() => {
            onPressHandler("trivia");
            toggleTriviaOverlay();
          }}
        />
        <Overlay
          isVisible={isTriviaVisible}
          onBackdropPress={toggleTriviaOverlay}
        >
          <Text>{JSON.stringify(trivia.text)}</Text>
        </Overlay>
      </View>
      <View style={styles.row}>
        <FontAwesome name="list" size={30} color="black" />
        <Pressable title="Random Recipe" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 20,
  },
  row: {
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 100,
    paddingBottom: 20,
    marginBottom: 20,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 18,
    width: "70%",
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "green",
  },
  buttonText: {
    fontSize: 16,
    color: "white",
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
