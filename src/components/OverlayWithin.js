import * as React from 'react';
import { Text, StyleSheet, View, Dimensions, ScrollView } from 'react-native';
import { Image } from 'react-native-elements';

const OverlayWithin = props => {
    return(
        <ScrollView>
            <View style={styles.imageContainer}>
                <Image 
                    source={require('../images/cloudSmall.png')}
                    style={styles.image}/>
            </View>
            <View style={styles.imageContainer}>
                <Text style={styles.titleStyle}>{props.title}</Text>
            </View>
            <View style={styles.jokeContainer}>
                <Text style={styles.joke}>{props.text}</Text>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    image: {
        height: 100, 
        width: 150,
    },
    imageContainer: {
        justifyContent: 'center',
        flexDirection: 'row',
        marginBottom: 10
    },
    titleStyle: {
        fontWeight: 'bold',
        fontSize: 16
    },
    joke: {
        
    },
    jokeContainer: {
        marginHorizontal: 10
    }
});

export default OverlayWithin;