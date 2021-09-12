import React from 'react'
import { Image, View, FlatList, ScrollView, SafeAreaView, Text, Platform, Pressable, Button, TouchableHighlightBase, TouchableHighlight, Dimensions } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { useEffect } from 'react';
import { useState } from 'react';
import { GetSearchRecipeAsync } from '../helpers/ApiHelper';
import { PRIMARY_400, PRIMARY_500, SECONDARY_300, styles } from '../GeneralStyle';
import { swap } from '../general';
import { ProgressChart } from 'react-native-chart-kit';

export default function RecipeScreen({ route }) {

    const { id } = route.params;

    const data = {
        labels: ["Protein", "Carbs", "Fat"], // optional
        data: [0.4, 0.6, 0.8]
    };

    const [optimize, setOptimize] = useState(false)
    const [recipeTitle, setRecipeTitle] = useState([])
    const [imageURL, setImageURL] = useState("")
    const [instruction, setInstruction] = useState([])
    const [ingredient, setIngredient] = useState([])
    const [ingredientAmount, setIngredientAmount] = useState([])
    const [unitAmount, setUnitAmount] = useState([])

    const screenWidth = Dimensions.get("window").width

    useEffect(() => {
        let data = ""
        async function fetchInit() {
            data = await GetSearchRecipeAsync(id);
            // ?? {
            //     image: 'https://www.aheadofthyme.com/wp-content/uploads/2016/01/indian-butter-chicken-3.jpg',
            //     title: 'Some food',
            //     instructions: 'PreparationFor spice rub: Combine all ingredients in small bowl. Do ahead: Can be made 2 days ahead. Store airtight at room temperature. For chimichurri sauce: Combine first 8 ingredients in blender; blend until almost smooth. Add 1/4 of parsley, 1/4 of cilantro, and 1/4 of mint; blend until incorporated. Add remaining herbs in 3 more additions, pureeing until almost smooth after each addition. Do ahead: Can be made 3 hours ahead. Cover; chill. For beef tenderloin: Let beef stand at room temperature 1 hour. Prepare barbecue (high heat). Pat beef dry with paper towels; brush with oil. Sprinkle all over with spice rub, using all of mixture (coating will be thick). Place beef on grill; sear 2 minutes on each side. Reduce heat to medium-high. Grill uncovered until instant-read thermometer inserted into thickest part of beef registers 130F for medium-rare, moving beef to cooler part of grill as needed to prevent burning, and turning occasionally, about 40 minutes. Transfer to platter; cover loosely with foil and let rest 15 minutes. Thinly slice beef crosswise. Serve with chimichurri sauce. *Available at specialty foods stores and from tienda.com.',
            //     extendedIngredients: [{ name: 'Butter', amount: '2', unit: 'tablespoons' }, { name: 'Egg', amount: '1', unit: 'tablespoons' }, { name: 'Sour cream', amount: '2', unit: 'tablespoons' }]
            // }

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

    const getSubstitute = (item) => {
        let lItem = item.toLowerCase()
        const index = Object.keys(swap).findIndex(x => x === lItem)
        const ingredientList = Object.values(swap)[index]
        const length = ingredientList.length

        if (index !== -1) { //substitute exist
            const itemName = ingredientList[Math.floor(Math.random() * length)]
            return itemName[0].toUpperCase() + itemName.substring(1)
        }
    }

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
                <Text style={{
                    textAlign: 'left',
                    fontWeight: 'bold',
                    fontSize: 20,
                    color: PRIMARY_400,
                }}>Ready in: 45 mins</Text>
                <ProgressChart
                    data={data}
                    width={screenWidth - 20}
                    height={150}
                    strokeWidth={10}
                    radius={25}
                    chartConfig={{
                        backgroundGradientFromOpacity: 0,
                        backgroundGradientToOpacity: 0,
                        color: (opacity = 1) => `rgba(255, 170, 84, ${opacity})`,
                        strokeWidth: 2, // optional, default 3
                        barPercentage: 0.5,
                        useShadowColorFromDataset: false,
                    }}
                    hideLegend={false}
                />
                <View style={{ alignItems: 'flex-start' }}>
                    <Text style={{
                        textAlign: "left",
                        color: 'white',
                        fontSize: 25,
                        marginTop: 0,
                        marginBottom: 5,
                        fontWeight: "bold",
                    }}>Ingredients  </Text>
                </View>
                {ingredient.map((item, index) =>
                    <View key={index} style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', marginTop: 5, width: '100%' }}>
                        <Text style={{ color: 'white', fontSize: 15 }}>
                            {index + 1}. {optimize ? item : getSubstitute(item)}{"  "}
                        </Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'flex-start', padding: 3, paddingHorizontal: 10, backgroundColor: SECONDARY_300, borderRadius: 10 }}>
                            <Text style={{ fontWeight: 'bold', textAlign: 'center', color: PRIMARY_400, fontSize: 12 }}>{ingredientAmount[index]} </Text>
                            <Text style={{ fontWeight: 'bold', textAlign: 'center', color: PRIMARY_400, fontSize: 12, }}>{unitAmount[index]}  </Text>
                        </View>
                    </View>
                )}
                <TouchableHighlight
                    style={{
                        borderRadius: 50, backgroundColor: optimize ? 'transparent' : PRIMARY_400,
                        paddingHorizontal: 10, paddingVertical: 5, marginTop: 20, marginBottom: 20,
                        display: "flex", alignItems: 'center', justifyContent: 'center',
                        borderWidth: 2, borderColor: optimize ? PRIMARY_400 : 'transparent'
                    }}
                    underlayColor={PRIMARY_500}
                    onPress={() => setOptimize(!optimize)}
                >
                    <Text style={{ fontSize: 20, color: 'white' }}>{optimize ? `Use Normal Ingredients` : "Don't use Healthy Ingredients"}</Text>
                </TouchableHighlight>
                <View style={{ alignItems: 'flex-start', backgroundColor: SECONDARY_300, borderRadius: 15, paddingVertical: 10, paddingHorizontal: 15 }}>
                    <Text style={{
                        textAlign: "left",
                        color: 'white',
                        fontSize: 25,
                        fontWeight: "bold",
                    }}>Instructions  </Text>
                    {
                        instruction.map((item, index) => <Text key={index} style={{ marginTop: 5, fontSize: 15, color: 'white' }}>{index + 1}. {item}.</Text>)
                    }
                </View>
            </ScrollView>
            <TouchableHighlight
                style={{
                    position: 'absolute', top: 10, left: 10,
                    borderRadius: 50, backgroundColor: PRIMARY_400,
                    padding: 5, marginTop: 20, marginBottom: 20,
                    display: "flex", alignItems: 'center', justifyContent: 'center'
                }}
                underlayColor={PRIMARY_500}
                onPress={() => null}
            >
                <Ionicons name="arrow-back-sharp" size={40} color='white' />
            </TouchableHighlight>
        </SafeAreaView>
    )

}