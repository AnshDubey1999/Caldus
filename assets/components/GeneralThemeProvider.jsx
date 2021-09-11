import { StyleSheet } from "react-native";
import React from "react";
import { Roboto_400Regular, Roboto_300Light, Roboto_500Medium, useFonts } from "@expo-google-fonts/roboto";
import { Ubuntu_300Light } from "@expo-google-fonts/ubuntu";

const primary_400 = "#ffb60d";
const secondary_400 = "#2b2b2b";

const ThemeContext = React.createContext({ fontLoaded: false });

export const GeneralThemeProvider = ({ children }) => {
    const fontLoaded = useFonts({
        Roboto_400Regular,
        Roboto_300Light,
        Roboto_500Medium,
        Ubuntu_300Light
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
        fontFamily: "Ubuntu_300Light",
        color: primary_400,
        fontSize: 40,
    },
});
