import * as React from 'react';
import { useState } from 'react';
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, StyleSheet, View, FlatList, Dimensions } from 'react-native';
import { Input, Chip, Button, Overlay } from 'react-native-elements';
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';
import { PRIMARY_400, SECONDARY_400 } from '../GeneralStyle';
import OverlayWithin2 from '../components/OverlayWithin2';
import { API_HOST, API_KEY, recipesMainList } from '../general';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const IngredientToRecipeScreen = ({ navigation }) => {

    const [ingredientToRecipeTest, setList1] = useState([]);
    const fetchRecipesFromIngredients = async () => {
        const temp = ingredientList.map(item => item.name);
        const stringToPass = temp.join('%2c');
        await fetch("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients?ranking=1&ignorePantry=true&number=3&ingredients="+ stringToPass, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": API_HOST,
                "x-rapidapi-key": API_KEY
            }
        }).then(response => response.json().then(res => res)).then(final => {
            console.log("Final", final);
            setList1(final);
        })
        .catch(err => {
            console.log("Something went wrong")
        });

    }

    const [input, setInput] = useState('');
    const [ingredientList, setList] = useState([]);
    const [counter, setCounter] = useState(0);
    const [error, setError] = useState('');

    const [visible, setVisible] = useState(false);

    const toggleOverlay = () => {
        setVisible(!visible);
    };

    const renderItem = ({ item }) => {
        return (
            <View style={{ marginBottom: 15, marginHorizontal: 20 }}>
                <Chip
                    title={item.name}
                    titleStyle={{ color: 'white', fontWeight: 'bold', fontSize: 16 }}
                    icon={() => <AntDesign name="close" size={20} color="white" style={{ alignSelf: 'flex-end' }} />}
                    iconRight
                    buttonStyle={{ borderRadius: 12, backgroundColor: PRIMARY_400 }}
                    onPress={() => {
                        const newIngredientList = ingredientList.filter(row => row.id != item.id)
                        setList(newIngredientList)
                        setError('');
                    }}
                />
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold', marginLeft: 20 }}>Ingredient: </Text>
            <Input
                placeholder="e.g. Apple"
                leftIcon={() => <MaterialCommunityIcons name="food-apple" color="white" size={25} />}
                inputStyle={{ color: 'white' }}
                inputContainerStyle={{ marginHorizontal: 10 }}
                value={input}
                onChangeText={text => setInput(text)}
                onSubmitEditing={() => {
                    if (input != '' && ingredientList.length < 5) {
                        setList([...ingredientList, { id: counter, name: input }])
                        setInput('');
                        setError('');
                        setCounter(counter + 1);
                    } else if (ingredientList.length >= 5) {
                        setError("Only a maximum of 5 items can be added.")
                    }
                }}

            />
            <View style={{ height: 300 }}>
                <FlatList
                    keyExtractor={item => item.id.toString()}
                    data={ingredientList}
                    renderItem={renderItem}
                    extraData={counter}
                />
            </View>
            {error ? <Text style={{ color: 'cyan', alignSelf: 'center' }}>{error}</Text> : null}
            <Overlay
                isVisible={visible}
                onBackdropPress={toggleOverlay}
                overlayStyle={{ height: height / 2, width: width - 100 }} >
                <OverlayWithin2 items={ingredientToRecipeTest} navigation={navigation} toggle={toggleOverlay} />

            </Overlay>
            <View>
                <Button
                    title="Find Recipes!"
                    buttonStyle={{ backgroundColor: PRIMARY_400, marginTop: 250, marginHorizontal: 15, borderRadius: 6 }}
                    onPress={ async () => {
                        await fetchRecipesFromIngredients();
                        toggleOverlay();
                    }}
                />
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: SECONDARY_400,
        flex: 1
    },
    textStyle: {
        color: 'white'
    },
});

export default IngredientToRecipeScreen;