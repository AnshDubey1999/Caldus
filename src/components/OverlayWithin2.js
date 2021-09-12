import * as React from 'react';
import { Text, StyleSheet, View, Dimensions, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import { Image } from 'react-native-elements';

import RecipeBlockSmall from './RecipeBlockSmall';

const OverlayWithin2 = (props) => {

    const { items, navigation, toggle } = props;

    const renderItem = ({ item }) => {
        return(
            <TouchableOpacity onPress={() => {
                toggle()
                navigation.navigate('Recipe', { id: item.id });
            }}>
                <RecipeBlockSmall recipe={item}/>
            </TouchableOpacity>
        )
    }
    if(items.length == 0)
    {
        return(
            <View style={{ alignItems: 'center' }}>
                <Text style={{ fontWeight: 'bold', fontSize: 15 }}>No recipes found!</Text>
            </View>
        )
    }
    return(
        <View>
            <FlatList 
                data={items}
                keyExtractor={item => item.id.toString()}
                renderItem={renderItem}
            />
        </View>
    );
};

const styles = StyleSheet.create({
});

export default OverlayWithin2;