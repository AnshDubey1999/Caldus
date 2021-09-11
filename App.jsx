import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { GeneralThemeProvider, styles } from './assets/components/GeneralThemeProvider';

export default function App() {
  return (
    <GeneralThemeProvider>
      <View style={styles.center}>
        <Text style={styles.h2}>Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" />
      </View>
    </GeneralThemeProvider>
  );
}