import * as React from 'react';
import { useState } from 'react';
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, StyleSheet ,TextInput, FlatList} from 'react-native';

const TestScreen = () => {
    const [ingredientList,setIngredientList]=useState([]);

    //setIngredients([...ingredients,newIngredient])
    //set ingredient list to all previous ingredients + new one
    const [input, setInput] = useState('');

    return ( 
        <SafeAreaView>
            <Text>TestScreen</Text>
            <TextInput
                value={input}
                onChangeText={text => setInput(text)}
                placeholder="Input Ingredients"
                onSubmitEditing={() => setIngredientList([...ingredientList, input])}
                
            ></TextInput>

            {/* <FlatList
                data={ingredientList}
            /> */}

        </SafeAreaView>
     );

    
}

const styles = StyleSheet.create({

});
 
export default TestScreen;