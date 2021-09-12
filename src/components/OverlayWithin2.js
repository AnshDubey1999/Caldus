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
                navigation.navigate('RecipeScreenAgain', { id: item.id });
            }}>
                <RecipeBlockSmall recipe={item}/>
            </TouchableOpacity>
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