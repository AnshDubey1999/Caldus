import React from 'react'
import {Image, View, FlatList, ScrollView, SafeAreaView, Text} from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { useEffect } from 'react';
import { useState } from 'react';

export default function RecipeScreen() {

    const [instruction, setInstruction] = useState([])

    const DATA = [
        {
            id: '156992',
            title: 'For spice rub: Combine all ingredients in small bowl. Do ahead: Can be made 2 days ahead. Store airtight at room temperature. For chimichurri sauce: Combine first 8 ingredients in blender; blend until almost smooth. Add 1/4 of parsley, 1/4 of cilantro, and 1/4 of mint; blend until incorporated. Add remaining herbs in 3 more additions, pureeing until almost smooth after each addition. Do ahead: Can be made 3 hours ahead. Cover; chill. For beef tenderloin: Let beef stand at room temperature 1 hour. Prepare barbecue (high heat). Pat beef dry with paper towels; brush with oil. Sprinkle all over with spice rub, using all of mixture (coating will be thick). Place beef on grill; sear 2 minutes on each side. Reduce heat to medium-high. Grill uncovered until instant-read thermometer inserted into thickest part of beef registers 130F for medium-rare, moving beef to cooler part of grill as needed to prevent burning, and turning occasionally, about 40 minutes. Transfer to platter; cover loosely with foil and let rest 15 minutes. Thinly slice beef crosswise. Serve with chimichurri sauce. *Available at specialty foods stores and from tienda.com '
        }
    ];

    useEffect(() => {
        setInstruction(DATA[0].title.split('. '))
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
                }}>Instructions:</Text>
                <FlatList 
                data={instruction}
                renderItem={({item, index}) => <Text style={{marginTop: 5}}>{index+1}. {item}.</Text>}
                keyExtractor={item => item.id}
                />
            </ScrollView>
        </SafeAreaView>
    )
    
}