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
    font_title_size: 26
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
        fontFamily: values.font_title,
        fontSize: values.font_title_size
    }
};

export const drawer = {
    container: {
        flex: 1,
    },
    style: {
        backgroundColor: colors.pink_light
    },
    contentOptions: {
        activeBackgroundColor: colors.light,
        activeTintColor: colors.purple,
        inactiveTintColor: colors.pink_dark,
        labelStyle: {
            fontFamily: values.font_body_bold,
            fontSize: values.font_body_size,
            marginLeft: 10
        }
    },
    drawerImage: {
        margin: 20,
        width: 90,
        height: 90
    },
    drawerHeaderText: {
        color: colors.purple,
        fontSize: values.font_title_size,
        fontWeight: 'bold',
        margin: 20
    },
    margin: {
        marginLeft: 15
    },
    drawerHeader: {
        backgroundColor: colors.pink_light,
        height: 90,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'row'
    },
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
