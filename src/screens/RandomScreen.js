import * as React from 'react';
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, StyleSheet, View } from 'react-native';

const RandomScreen = () => {
    return ( 
        <View style={styles.container}>
            <Text style={styles.textStyle}>RandomScreen</Text>
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
 
export default RandomScreen;