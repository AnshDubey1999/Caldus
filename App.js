import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer , DefaultTheme} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather, FontAwesome, Ionicons } from '@expo/vector-icons';

import HomeScreen from './src/screens/HomeScreen';
import RandomScreen from './src/screens/RandomScreen';
import IngredientToRecipeScreen from './src/screens/IngredientToRecipeScreen';
import RecipeScreen from './src/components/RecipeScreen';

const Stack1 = createNativeStackNavigator();

const RootStack1 = () => {
  return(
    <Stack1.Navigator>
      <Stack1.Screen name="Caldus" component={HomeScreen} 
      options={{headerTitle:() => (
        <Image style={{width: 120, height: 50, marginTop: -10, aspectRatio: 3.5}} source={require("./src/images/caldus.png")} />
        )}}/>
      <Stack1.Screen name="RecipeScreen" component={RecipeScreen} />
    </Stack1.Navigator>
  );
};

const Tab = createBottomTabNavigator();
const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    card: '#23272a',
    border: '#23272a',
    text:'#ffaa54'
  },
};

function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer theme={MyTheme}>
        <Tab.Navigator screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'HomeScreen') {
              return <Feather name="home" size={size} color={color} />;

            } else if (route.name === 'Random') {
              return <FontAwesome name="random" size={size} color={color} />;
            }

            return <Ionicons name="fast-food-outline" size={size} color={color} />;

          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
          tabBarBackground: () => <View style={{ backgroundColor: '#23272a', flex: 1 }}></View>,
          tabBarShowLabel: false,
          tabBarStyle: styles.tabStyle
        })}>
          <Tab.Screen name="HomeScreen" component={RootStack1} options={{ headerShown: false }} />
          <Tab.Screen name="Random" component={RandomScreen} />
          <Tab.Screen name="IngredientToRecipe" component={IngredientToRecipeScreen} />
        </Tab.Navigator>
      </NavigationContainer>
      {/* <RecipeScreen id="156992" /> */}
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  tabStyle: {
    borderTopWidth: 0
  }
});

export default App;


