import { StyleSheet } from "react-native";
import React from "react";
import { Roboto_400Regular, Roboto_300Light, useFonts } from "@expo-google-fonts/roboto";

const primary_400 = "#ffb60d";
const secondary_400 = "#2b2b2b";

const ThemeContext = React.createContext({ fontLoaded: false });

export const GeneralThemeProvider = ({ children }) => {
    const fontLoaded = useFonts({
        Roboto_400Regular,
        Roboto_300Light
    });

    return (<ThemeContext.Provider
        value={{
            fontLoaded: fontLoaded
        }}
    >{children}</ThemeContext.Provider>);
};

export const styles = StyleSheet.create({
    center: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: secondary_400,
    },
    text: {
        color: "white",
    },
    h2: {
        fontFamily: "Roboto_400Regular",
        color: primary_400,
        fontSize: 40,
    },
});
