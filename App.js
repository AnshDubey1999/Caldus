import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import RecipeScreen from './RecipeScreen';

export default function App() {
  return (
    <View>
      <RecipeScreen />
    </View>
  );
}