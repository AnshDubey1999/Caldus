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

const Tab = createBottomTabNavigator();

function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
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
        </Tab.Navigator>
      </NavigationContainer>
      // <RecipeScreen id="156992" />
    </SafeAreaProvider>
  );
}

const swap = {
  "butter":["margarine","olive oil","apple sauce"],
  "cream":["fat free half-and-half","evaporated skim milk"],
  "bread crumbs":["rolled oats","crushed bran cereal"],
  "cream cheese":["fat-free cream cheese","cottage cheese"],
  "egg":["egg white"],
  "flour":["whole wheat flour","coconut flour","nut flour","oats"],
  "ground beef":["lean ground beef","ground chicken breast","ground turkey breast"],
  "mayonnaise":["reduced-fat mayonnaise","low-fat yogurt","hummus","avacado"],
  "evaporated milk":["evaporated skim milk"],
  "milk":["fat free milk","low fat milk"],
  "pasta":["whole wheat pasta"],
  "rice":["brown rice"],
  "sour cream":["low fat sour cream","low fat yogurt"],
  "sugar":["cinnamon","nutmeg","vanilla","apple sauce","honey","mashed bananas","maple syrup"],
  "salt":["garlic powder", "onion powder", "paprika", "herbs"],
  "potato":["sweet potato"],
  "bacon":["prosciutto"]
  }

const styles = StyleSheet.create({
  tabStyle: {
    borderTopWidth: 0
  }
});

export default App;


