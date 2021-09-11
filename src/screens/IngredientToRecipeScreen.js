import * as React from 'react';
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, StyleSheet, View } from 'react-native';

const IngredientToRecipeScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.textStyle}>Ingredient to Recipe Page</Text>
        </View>
     );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#23272a',
        flex: 1
    },
    textStyle: {
        color: 'white'
    },
});
 
export default IngredientToRecipeScreen;