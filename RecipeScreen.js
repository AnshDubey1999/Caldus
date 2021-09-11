import React from 'react'
import {Image, View, FlatList, ScrollView, SafeAreaView, Text} from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { useEffect } from 'react';
import { useState } from 'react';
import { GetSearchRecipeAsync } from './src/helpers/ApiHelper';

export default function RecipeScreen(props) {

    const [instruction, setInstruction] = useState([])
    const [ingredient, setIngredient] = useState([])
    const [ingredientAmount, setIngredientAmount] = useState([])
    const [unitAmount, setUnitAmount] = useState([])

    useEffect(() => {
        let data = ""
        async function fetchInit() {
                    data = await GetSearchRecipeAsync(props.id)
                    setInstruction(JSON.stringify(data['instructions']).replace(/\s+/g, ' ').replace('"', '').replace('Preparation', '').split('. '))

                    let ingredients = []
                    let ingredientUnit = []
                    let amountOfIngredient = []
                    data['extendedIngredients'].map(ingredient => {ingredients.push(ingredient['name']); 
                    amountOfIngredient.push(ingredient['amount']); ingredientUnit.push(ingredient['unit'])})
                    
                    setIngredient(ingredients)
                    setIngredientAmount(amountOfIngredient)
                    setUnitAmount(ingredientUnit)
                }
        fetchInit()
    }, [])

    return (
        <SafeAreaView>
            <ScrollView style={{paddingTop:50, padding:30}} contentContainerStyle={{display: 'flex'}}>
                <View style={{alignItems:"center"}}>
                    <Image source={{ 
                        width: 300, 
                        height: 200,
                        uri: "https://spoonacular.com/recipeImages/char-grilled-beef-tenderloin-with-three-herb-chimichurri-156992.jpg"}} />
                </View>
                <Text style={{
                    fontWeight:"bold",
                    paddingTop: 30,
                    paddingBottom: 30,
                    fontSize:25,
                    textAlign:"center"}}>
                        Char-Grilled Beef Tenderloin with Three-Herb Chimichurri </Text>
                <Text style={{
                    textAlign:"center",
                    paddingBottom:30,
                    fontSize:20
                }}>Ready in: 45 mins</Text>
                <Text style={{
                    textAlign:"left",
                    paddingBottom:30,
                    fontSize:20,
                    fontWeight:"bold"
                }}>Ingredients:</Text>
                <FlatList 
                data={ingredient}
                renderItem={({item, index}) => 
                <View key={index} style={{display: 'flex', flexDirection: 'row', alignItems:'center'}}>
                    <Text style={{marginTop: 5}}>{index+1}. {item}: {ingredientAmount[index]}</Text>
                    <Text style={{marginTop: 5}}>{unitAmount[index]}</Text>
                    </View>
                    }
                />
                <Text style={{
                    textAlign:"left",
                    paddingBottom:30,
                    paddingTop:30,
                    fontSize:20,
                    fontWeight:"bold"
                }}>Instructions</Text>
                <FlatList 
                data={instruction}
                renderItem={({item, index}) => <Text style={{marginTop: 5}}>{index+1}. {item}.</Text>}
                keyExtractor={item => item}
                />
            </ScrollView>
        </SafeAreaView>
    )
    
}