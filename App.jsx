import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { styles } from './assets/components/GlobalStyle';

export default function App() {
  return (
    <View style={styles.center}>
      <Text style={{color: 'white'}}>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}