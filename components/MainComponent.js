import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { useFonts, Pacifico_400Regular } from '@expo-google-fonts/pacifico';
import { Merriweather_400Regular, Merriweather_900Black } from '@expo-google-fonts/merriweather';

import * as Styles from '../styles/styles';

import SplashScreen from './SplashScreen';
import Home from './HomeComponent';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function HomeScreen({ navigation }) {
    return (
        <Stack.Navigator
            initialRouteName="Home"
            screenOptions={Styles.screenHeader}
        >
            <Stack.Screen
                name="Home"
                component={Home}
                options={{ title: 'Bee Lab' }}
            />
        </Stack.Navigator>
    );
}

const Main = () => {

    let [fontsLoaded] = useFonts({
        Pacifico_400Regular,
        Merriweather_400Regular,
        Merriweather_900Black
    });

    if (!fontsLoaded) {
        return <SplashScreen />
    } else {
        return (
            <NavigationContainer>
                <Drawer.Navigator
                    initialRouteName="Home"
                    drawerStyle = {Styles.drawer.style}
                    drawerContentOptions = {Styles.drawer.contentOptions}
                    labelStyle = {Styles.drawer.labelStyle}
                >
                    <Drawer.Screen
                        name="Home"
                        component={HomeScreen}
                        options={{
                            title: 'Inicio'
                        }}
                    />
                </Drawer.Navigator>
            </NavigationContainer>
        );
    }
}

export default Main;
