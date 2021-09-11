<<<<<<< HEAD
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
=======
import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather, FontAwesome, Ionicons } from '@expo/vector-icons';

import HomeScreen from './src/screens/HomeScreen';
import RandomScreen from './src/screens/RandomScreen';
import IngredientToRecipeScreen from './src/screens/IngredientToRecipeScreen';
import RecipeScreen from './src/components/RecipeScreen';
>>>>>>> main

const Tab = createBottomTabNavigator();

export function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
<<<<<<< HEAD
        <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Random" component={RandomScreen} />
          <Tab.Screen
            name="IngredientToRecipe"
            component={IngredientToRecipeScreen}
          />
          <Tab.Screen name="Test" component={RandomOptionsScreen} />
=======
        <Tab.Navigator screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              return <Feather name="home" size={size} color={color} />;

            } else if (route.name === 'Random') {
              return <FontAwesome name="random" size={size} color={color} />;
            }
            
            return <Ionicons name="fast-food-outline" size={size} color={color} />;
            
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
          tabBarBackground: () => <View style={{backgroundColor: '#23272a', flex: 1}}></View>,
          tabBarShowLabel: false,
          tabBarStyle: styles.tabStyle
        })}>
          <Tab.Screen name="Home" component={HomeScreen}/>
          <Tab.Screen name="Random" component={RandomScreen}/>
          <Tab.Screen name="IngredientToRecipe" component={IngredientToRecipeScreen}/>
>>>>>>> main
        </Tab.Navigator>
      </NavigationContainer>
      // <RecipeScreen id="156992" />
    </SafeAreaProvider>
  );
}

<<<<<<< HEAD
export default App;
=======
const styles = StyleSheet.create({
  tabStyle: {
    borderTopWidth: 0
  }
});

export default App;
>>>>>>> main
