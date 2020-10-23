import React from 'react';
import { StyleSheet } from 'react-native';

export const colors = {
    pink_dark: '#FF5D8F',
    pink_light: '#FFC4D6',
    half_pink: '#FF5D8F70',
    purple: '#A572D5',
    blue: '#99FFFA',
    yellow: '#FFF185',
    green: '#D4FE9A',
    light: '#fff',
    dark: '#111318'
}

export const values = {
    font_title: "Pacifico_400Regular",
    font_body: "Merriweather_400Regular",
    font_body_bold: "Merriweather_900Black",
    font_body_size: 16,
    font_title_size: 24
};

export const global = StyleSheet.create({

});

export const screenHeader = {
    headerStyle: {
        backgroundColor: colors.pink_dark
    },
    headerTintColor: colors.light,
    headerTitleStyle: {
        color: colors.light,
        fontFamily: values.font_title
    }
};

export const drawer = {
    style: {
        backgroundColor: colors.pink_light
    },
    contentOptions: {
        activeBackgroundColor: colors.light,
        activeTintColor: colors.purple,
        inactiveTintColor: colors.light,
        labelStyle: {
            fontFamily: values.font_body_bold,
            fontSize: 16,
            marginLeft: 10
        }
    }
}

export const splash = {
    component: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.pink_dark
    },
    icon: {
        width: 150,
        height: 150
    }
}
