import * as React from 'react';
import { useState } from 'react';
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, StyleSheet, View, FlatList } from 'react-native';
import { Input, Chip } from 'react-native-elements';
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';

const IngredientToRecipeScreen = () => {

    const [input, setInput] = useState('');
    const [ingredientList, setList] = useState([]);
    const [counter, setCounter] = useState(0);
    const [error, setError] = useState('');

    const renderItem = ({ item }) => {
        return (
            <View style={{ marginBottom: 15, marginHorizontal: 20 }}>
                <Chip 
                    title={item.name}
                    titleStyle={{ color: 'white', fontWeight: 'bold', fontSize: 16 }}
                    icon={() => <AntDesign name="close" size={20} color="white" style={{ alignSelf: 'flex-end' }} />}
                    iconRight
                    buttonStyle={{ borderRadius: 12, backgroundColor: 'tomato' }}
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
                leftIcon={() => <MaterialCommunityIcons name="food-apple" color="white" size={25}/>}
                inputStyle={{ color: 'white' }}
                inputContainerStyle={{ marginHorizontal: 10 }}
                value={input}
                onChangeText={text => setInput(text)}
                onSubmitEditing={() => {
                    if(input != '' && ingredientList.length < 5) {
                        setList([...ingredientList, {id: counter, name: input }])
                        setInput('');
                        setError('');
                        setCounter(counter + 1);
                    } else if(ingredientList.length >= 5) {
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

        </View>
     );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    textStyle: {
        color: 'white'
    },
});
 
export default IngredientToRecipeScreen;