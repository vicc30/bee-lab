import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';


import SplashScreen from './SplashScreen';
import Home from './HomeComponent';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const frenchPink = '#FF5D8F';

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
                    color: "#fff"
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

export default class Main extends React.Component {

    render() {

        return (
            <NavigationContainer>
                <Drawer.Navigator initialRouteName="Home">
                    <Drawer.Screen name="Home" component={HomeScreen}/>
                </Drawer.Navigator>
            </NavigationContainer>
        );
    }
}
