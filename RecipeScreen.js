import React from 'react'
import {Image, View, FlatList, ScrollView, SafeAreaView, Text} from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { useEffect } from 'react';
import { useState } from 'react';
import { GetSearchRecipeAsync } from './src/helpers/ApiHelper';

export default function RecipeScreen(props) {

    const [instruction, setInstruction] = useState([])

    useEffect(() => {
        let data = ""
        async function fetchInit() {
                    data = await GetSearchRecipeAsync(props.id)
                    setInstruction(JSON.stringify(data['instructions']).replace(/\s+/g, ' ').replace('"', '').split('. '))
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
                <Text style={{
                    textAlign:"left",
                    paddingBottom:30,
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