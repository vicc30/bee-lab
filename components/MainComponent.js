import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

//Fonts
import { useFonts, Pacifico_400Regular } from '@expo-google-fonts/pacifico';
import { Merriweather_400Regular } from '@expo-google-fonts/merriweather';

import SplashScreen from './SplashScreen';
import Home from './HomeComponent';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const frenchPink = '#FF5D8F';
const titleFont = 'Pacifico_400Regular';
const regularFont = 'Merriweather_400Regular';

function HomeScreen({ navigation }) {
    return (
        <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerStyle: {
                    backgroundColor: frenchPink
                },
                headerTintColor: "#fff",
                headerTitleStyle: {
                    color: "#fff",
                    fontFamily: 'Pacifico_400Regular'
                }
            }}
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
        Merriweather_400Regular
    });

    if (!fontsLoaded) {
        return <SplashScreen />
    } else {
        return (
            <NavigationContainer>
                <Drawer.Navigator initialRouteName="Home">
                    <Drawer.Screen name="Home" component={HomeScreen} />
                </Drawer.Navigator>
            </NavigationContainer>
        );
    }
}

export default Main;
