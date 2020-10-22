import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import SplashScreen from './SplashScreen';
import Home from './HomeComponent';

const Stack = createStackNavigator();

export default class Main extends React.Component {

    render() {

        return (
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Bee Lab" component={Home} />
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
}
