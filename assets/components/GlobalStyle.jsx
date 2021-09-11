import { StyleSheet } from "react-native"

const primary_400 = "#ffb60d"
const secondary_400 = "#2b2b2b"

export const styles = StyleSheet.create({
    center: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: secondary_400
    },
    text: {
        color: 'white',
    },
    h2: {
        color: primary_400
    }
})