import * as React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { Image } from 'react-native-elements';
import { Feather, Ionicons } from '@expo/vector-icons';

const width = Dimensions.get('window').width - 110;

const RecipeBlock = (props) => {
    const { baseUri } = props;
    const { title, image, readyInMinutes, servings } = props.recipe;
    return (
        <View style={styles.container}>
            <Image 
                source={{ uri: baseUri + image }}
                style={styles.imageStyle}/>
            <Text style={styles.titleStyle}>{title}</Text>
            <View style={styles.bottomContainerStyle}>
                <Feather name="clock" size={16} color="white" style={{ marginRight: 5 }}/>
                <Text style={styles.textStyle}>Preparation time:</Text>
                <Text style={styles.textStyle2}>{readyInMinutes} minutes</Text>
            </View>
            <View style={styles.bottomContainerStyle}>
                <Ionicons name="fast-food" size={16} color="white" style={{ marginRight: 5 }}/>
                <Text style={styles.textStyle}>Servings:</Text>
                <Text style={styles.textStyle2}>{servings}</Text>
            </View>
            <View style={styles.spacer}>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 30,
        alignItems: 'center'
    },
    titleStyle: {
        fontSize: 17,
        color: 'white',
        fontWeight: 'bold',
        marginBottom: 10,
        marginHorizontal: 20
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        marginBottom: 5
    },
    imageStyle: {
        height: 150, 
        width: 350, 
        borderRadius: 10,
        marginBottom: 10
    },
    textStyle2: {
        color: 'white',
        marginHorizontal: 10
    },
    bottomContainerStyle: {
        flexDirection: 'row'
    },
    spacer: {
        marginBottom: 20
    }
});

export default RecipeBlock;