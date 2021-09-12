import * as React from 'react';
import { useState } from 'react';
import { SafeAreaView } from "react-native-safe-area-context";
import { Input } from 'react-native-elements';
import { Text, StyleSheet, FlatList} from 'react-native';

const TestScreen = () => {
    const [ingredientList,setIngredientList]=useState([]);

    //setIngredients([...ingredients,newIngredient])
    //set ingredient list to all previous ingredients + new one
    const [input, setInput] = useState('');
    const inputElement = React.createRef();
    
    return (
    <SafeAreaView>

      <Input
        ref = {inputElement}
        placeholder="Input Ingredients"
        onChangeText={text=>setInput(text)}
        onSubmitEditing={() => {setIngredientList([...ingredientList, input])
        inputElement.current.clear()}}
      ></Input> 

  </SafeAreaView>
     );

    
}

const styles = StyleSheet.create({

});
 
export default TestScreen;