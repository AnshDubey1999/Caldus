import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import { GeneralThemeProvider, styles } from './assets/components/GeneralThemeProvider';

export default function App() {
  return (
    <GeneralThemeProvider>
      <View style={styles.center}>
        <Text style={styles.h2}>Title</Text>
        <StatusBar style="auto" />
      </View>
    </GeneralThemeProvider>
  );
}