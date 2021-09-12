import * as React from 'react';
import { useState, useEffect } from 'react';
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, StyleSheet, View, StatusBar, FlatList } from 'react-native';
import { API_HOST, API_KEY, recipesMainList } from '../general';

import RecipeBlock from '../components/RecipeBlock';

const HomeScreen = () => {

    const recipes = recipesMainList.results;
    const baseUri = recipesMainList.baseUri;

    // const fetchHealthyRecipes = async () => {
    //     await fetch("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/search?query=healthy&number=1", {
    //         "method": "GET",
    //         "headers": {
    //             "x-rapidapi-host": API_HOST,
    //             "x-rapidapi-key": API_KEY
    //         }
    //     }).then(response => response.json().then(res => res)).then(final => {
    //       setRecipes(final.results);
    //       setBaseUri(final.baseUri);
    //     })
    //     .catch(err => {
    //         console.log("Something went wrong")
    //     });
    //   };

    // useEffect(() => {
    //     fetchHealthyRecipes();
    // }, []);

    const renderItem = ({ item }) => {
        return(
            <RecipeBlock recipe={item} baseUri={baseUri}/>
        )
    }

    return (
        <View style={styles.container}>
            <FlatList 
                data={recipes}
                keyExtractor={ item => item.id.toString() }
                renderItem={renderItem}
            />
        </View>
     );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    textStyle: {
        color: 'white'
    }
});

export default HomeScreen;