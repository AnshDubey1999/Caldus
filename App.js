import { StatusBar } from "expo-status-bar";
import * as React from "react";
import { Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./src/screens/HomeScreen";
import RandomScreen from "./src/screens/RandomScreen";
import IngredientToRecipeScreen from "./src/screens/IngredientToRecipeScreen";
import { RandomOptionsScreen } from "./RandomOptionsScreen";

const Tab = createBottomTabNavigator();

export function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Random" component={RandomScreen} />
          <Tab.Screen
            name="IngredientToRecipe"
            component={IngredientToRecipeScreen}
          />
          <Tab.Screen name="Test" component={RandomOptionsScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
