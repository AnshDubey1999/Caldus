import * as React from 'react';
import { useState, useEffect } from 'react';
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, StyleSheet, View, Dimensions, ScrollView } from 'react-native';
import { Button, Overlay } from 'react-native-elements';
import { Ionicons, FontAwesome5, FontAwesome } from '@expo/vector-icons';
import { API_HOST, API_KEY, recipesMainList } from '../general';
import OverlayWithin from '../components/OverlayWithin';
import { SECONDARY_400 } from '../GeneralStyle';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RecipeScreen from '../components/RecipeScreen';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const RandomStackNav = createNativeStackNavigator()

export const RandomStack = () => {
    return (<RandomStackNav.Navigator initialRouteName="RandomScreen" screenOptions={{ header: () => null }}>
        <RandomStackNav.Screen name="RandomScreen" options={{ header: () => null }} component={RandomScreen} />
        <RandomStackNav.Screen name="RecipeScreen" options={{ header: () => null }} component={RecipeScreen} />
    </RandomStackNav.Navigator>)
}

export const RandomScreen = ({ navigation }) => {

    const fetchJoke = async () => {
        await fetch("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/jokes/random", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": API_HOST,
                "x-rapidapi-key": API_KEY
            }
        }).then(response => response.json().then(res => res)).then(final => {
            setTrivia('');
            setJoke(final.text);
        })
            .catch(err => {
                console.log("Something went wrong")
            });
    };

    const fetchTrivia = async () => {
        await fetch("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/trivia/random", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": API_HOST,
                "x-rapidapi-key": API_KEY
            }
        }).then(response => response.json().then(res => res)).then(final => {
            setJoke('');
            setTrivia(final.text);
        })
            .catch(err => {
                console.log("Something went wrong")
            });
    };



    const [joke, setJoke] = useState('');
    const [trivia, setTrivia] = useState('');
    const [visible, setVisible] = useState(false);

    const recipesResults = recipesMainList['results']

    const toggleOverlay = () => {
        setVisible(!visible);
    };

    return (
        <View style={styles.container}>
            <Button
                title="Random Joke, need a laugh?"
                buttonStyle={styles.jokeButton}
                titleStyle={{ color: 'black' }}
                icon={() => <FontAwesome5 name="laugh" size={25} style={{ marginRight: 8 }} />}
                onPress={async () => {
                    setTrivia('');
                    await fetchJoke();
                    toggleOverlay();
                }}
            />
            <Button
                title="Random Trivia, did you know?"
                buttonStyle={styles.triviaButton}
                titleStyle={{ color: 'black' }}
                icon={() => <FontAwesome name="question" size={25} style={{ marginRight: 8 }} />}
                onPress={async () => {
                    setJoke('');
                    await fetchTrivia();
                    toggleOverlay();
                }}
            />
            <Button
                title="Random Meal, can't decide?"
                buttonStyle={styles.mealButton}
                titleStyle={{ color: 'black' }}
                icon={() => <Ionicons name="fast-food-sharp" size={25} style={{ marginRight: 4 }} />}
                onPress={() => {
                    navigation.navigate('RecipeScreen', { id: recipesResults[Math.floor(Math.random() * recipesResults.length)]['id'] })
                }}
            />

            <Overlay
                isVisible={visible}
                onBackdropPress={toggleOverlay}
                overlayStyle={{ height: height / 2, width: width - 100 }}
            >
                {joke ? <OverlayWithin title="Here's the joke!" text={joke} /> : <OverlayWithin title="Here's the trivia" text={trivia} />}
            </Overlay>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: SECONDARY_400,
        flex: 1,
        justifyContent: 'center'
    },
    textStyle: {
        color: 'white'
    },
    triviaButton: {
        borderRadius: 5,
        marginHorizontal: 15,
        marginBottom: 30,
        backgroundColor: '#2DDFFF'
    },
    jokeButton: {
        borderRadius: 5,
        marginHorizontal: 15,
        marginBottom: 30,
        backgroundColor: '#F5F474'
    },
    mealButton: {
        borderRadius: 5,
        marginHorizontal: 15,
        marginBottom: 30,
        backgroundColor: '#E33CC7'
    }
});

export default RandomScreen;