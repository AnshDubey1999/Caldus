import * as React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { Image } from 'react-native-elements';
import { Feather, Ionicons } from '@expo/vector-icons';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const RecipeBlockSmall = (props) => {
    const { title, image } = props.recipe;
    return(
        <View style={styles.container}>
            <Image 
                source={{ uri: image }}
                style={styles.image}
            />
            <Text style={styles.text}>{title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    image: {
        height: 100,
        width: width - 150,
        borderRadius: 10
    },
    text: {
        fontWeight: 'bold',
        fontSize: 15,
        marginBottom: 15
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 10
    }
});

export default RecipeBlockSmall;