import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

//Fonts
import { useFonts, Pacifico_400Regular } from '@expo-google-fonts/pacifico';
import { Merriweather_400Regular, Merriweather_900Black } from '@expo-google-fonts/merriweather';

import SplashScreen from './SplashScreen';
import Home from './HomeComponent';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const frenchPink = '#FF5D8F';
const amethyst = '#A572D5';
const pinkHalf = '#FF5D8F40';
const light = '#EBF0FF';

const titleFont = 'Pacifico_400Regular';
const regularFont = 'Merriweather_400Regular';
const blackFont = 'Merriweather_900Black'

const HeaderOptions = {
    headerStyle: {
        backgroundColor: frenchPink
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
        color: "#fff",
        fontFamily: titleFont
    }
};

function HomeScreen({ navigation }) {
    return (
        <Stack.Navigator
            initialRouteName="Home"
            screenOptions={HeaderOptions}
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
                    drawerStyle={{
                        backgroundColor: '#fff'
                    }}
                    drawerContentOptions={{
                        activeBackgroundColor: pinkHalf,
                        activeTintColor: amethyst
                    }}
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
