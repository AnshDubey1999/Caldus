import React from 'react'
import { Image, View, FlatList, ScrollView, SafeAreaView, Text, Platform, Pressable, Button, TouchableHighlightBase, TouchableHighlight } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { useEffect } from 'react';
import { useState } from 'react';
import { GetSearchRecipeAsync } from './src/helpers/ApiHelper';
import { PRIMARY_400, PRIMARY_500, SECONDARY_300, styles } from './src/GeneralStyle';

export default function RecipeScreen(props) {

    const [recipeTitle, setRecipeTitle] = useState([])
    const [imageURL, setImageURL] = useState([])
    const [instruction, setInstruction] = useState([])
    const [ingredient, setIngredient] = useState([])
    const [ingredientAmount, setIngredientAmount] = useState([])
    const [unitAmount, setUnitAmount] = useState([])

    useEffect(() => {
        let data = ""
        async function fetchInit() {
            data = await GetSearchRecipeAsync(props.id)

            setImageURL((data['image']))
            setRecipeTitle(JSON.stringify(data['title']).replace('"', "").replace('"', ""))
            setInstruction(JSON.stringify(data['instructions']).replace(/\s+/g, ' ').replace('"', '').replace('Preparation', '').split('. '))

            let ingredients = []
            let ingredientUnit = []
            let amountOfIngredient = []
            data['extendedIngredients'].map(ingredient => {
                ingredients.push(ingredient['name']);
                amountOfIngredient.push(ingredient['amount']); ingredientUnit.push(ingredient['unit'])
            })

            setIngredient(ingredients)
            setIngredientAmount(amountOfIngredient)
            setUnitAmount(ingredientUnit)
        }
        fetchInit()
    }, [])

    return (
        <SafeAreaView style={[styles.view]}>
            <ScrollView contentContainerStyle={{ padding: 20, paddingVertical: 50 }}>
                <View style={{ alignItems: "center" }}>
                    <Image source={{ width: '100%', height: 200, uri: imageURL }}
                        style={{ borderRadius: 15 }}
                    />
                </View>
                <Text style={{
                    fontWeight: "bold",
                    marginTop: 10,
                    fontSize: 30,
                    color: 'white'
                }}>
                    {recipeTitle}</Text>
                <View style={{ alignContent: 'center' }}>
                    <Text style={{
                        backgroundColor: PRIMARY_400,
                        textAlign: 'center',
                        padding: 3,
                        fontSize: 20,
                        borderRadius: 10,
                        marginTop: 10,
                        color: 'white',
                        fontWeight: "bold"
                    }}>Ready in: 45 mins</Text>
                </View>

                <View style={{ alignItems: 'flex-start' }}>
                    <Text style={{
                        textAlign: "left",
                        color: 'white',
                        fontSize: 25,
                        padding: 3,
                        paddingHorizontal: 10,
                        marginTop: 30,
                        fontWeight: "bold",
                        backgroundColor: SECONDARY_300,
                        borderRadius: 15
                    }}>Ingredients</Text>
                </View>
                {ingredient.map((item, index) =>
                    <View key={index} style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', marginTop: 5, width: '100%' }}>
                        <Text style={{ color: 'white', fontSize: 15 }}>{index + 1}. {item[0].toUpperCase()}{item.substring(1)}  </Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'flex-start', padding: 3, paddingHorizontal: 10, backgroundColor: PRIMARY_400, borderRadius: 10 }}>
                            <Text style={{ fontWeight: 'bold', textAlign: 'center', color: 'white', fontSize: 12 }}>{ingredientAmount[index]} </Text>
                            <Text style={{ fontWeight: 'bold', textAlign: 'center', color: 'white', fontSize: 12, }}>{unitAmount[index]}  </Text>
                        </View>
                    </View>
                )}
                <View style={{ alignItems: 'flex-start' }}>
                    <Text style={{
                        textAlign: "left",
                        color: 'white',
                        fontSize: 25,
                        padding: 3,
                        paddingHorizontal: 10,
                        marginTop: 30,
                        fontWeight: "bold",
                        backgroundColor: SECONDARY_300,
                        borderRadius: 15
                    }}>Instructions</Text>
                </View>
                {
                    instruction.map((item, index) => <Text key={index} style={{ marginTop: 5, fontSize: 15, color: 'white' }}>{index + 1}. {item}.</Text>)
                }
            </ScrollView>
            <TouchableHighlight
                style={{
                    position: 'absolute', bottom: 15, right: 15, borderRadius: 50, backgroundColor: PRIMARY_400,
                    paddingHorizontal: 10, paddingVertical: 5,
                    display: "flex", alignItems: 'center', justifyContent: 'center'
                }}
                underlayColor={PRIMARY_500}
                onPress={() => console.log('hi')}
            >
                <Text style={{ fontSize: 25, color: 'white' }}>Optimize</Text>
            </TouchableHighlight>
        </SafeAreaView>
    )

}