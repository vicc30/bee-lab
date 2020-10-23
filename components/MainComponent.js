import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { useFonts, Pacifico_400Regular } from '@expo-google-fonts/pacifico';
import { Merriweather_400Regular, Merriweather_900Black } from '@expo-google-fonts/merriweather';

import * as Styles from '../styles/styles';

import SplashScreen from './SplashScreen';
import Login from './LoginComponent';
import Home from './HomeComponent';
import SkinCare from './SkinCareComponent';
import HairCare from './HairCareComponent';
import OtherProduct from './OtherProductComponent';
import Offer from './OfferComponent';
import Notifications from './NotificationsComponent';
import Help from './HelpComponent';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function LoginScreen({ navigation }) {
    return (
        <Stack.Navigator
            initialRouteName="Login"
            screenOptions={Styles.screenHeader}
        >
            <Stack.Screen
                name="Login"
                component={Login}
                options={{ title: 'Inicia Sesión' }}
            />
        </Stack.Navigator>
    );
}

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

function SkinCareScreen({navigation}) {
    return(
        <Stack.Navigator
            initialRouteName="SkinCare"
            screenOptions={Styles.screenHeader}
        >
            <Stack.Screen 
                name="SkinCare"
                component={SkinCare}
                options={{ title: 'Cuidado de la Piel' }}
            />
        </Stack.Navigator>
    );
}

function HairCareScreen({navigation}) {
    return(
        <Stack.Navigator
            initialRouteName="HairCare"
            screenOptions={Styles.screenHeader}
        >
            <Stack.Screen 
                name="HairCare"
                component={HairCare}
                options={{ title: 'Cuidado del Cabello' }}
            />
        </Stack.Navigator>
    );
}

function OtherProductScreen({navigation}) {
    return(
        <Stack.Navigator
            initialRouteName="OtherProduct"
            screenOptions={Styles.screenHeader}
        >
            <Stack.Screen 
                name="OtherProduct"
                component={OtherProduct}
                options={{ title: 'Otros productos' }}
            />
        </Stack.Navigator>
    );
}

function OfferScreen({navigation}) {
    return(
        <Stack.Navigator
            initialRouteName="Offer"
            screenOptions={Styles.screenHeader}
        >
            <Stack.Screen 
                name="Offer"
                component={Offer}
                options={{ title: 'Ofertas!' }}
            />
        </Stack.Navigator>
    );
}

function NotificationsScreen({navigation}) {
    return(
        <Stack.Navigator
            initialRouteName="Notifications"
            screenOptions={Styles.screenHeader}
        >
            <Stack.Screen 
                name="Notifications"
                component={Offer}
                options={{ title: 'Notificaciones' }}
            />
        </Stack.Navigator>
    );
}

function HelpScreen({navigation}) {
    return(
        <Stack.Navigator
            initialRouteName="Help"
            screenOptions={Styles.screenHeader}
        >
            <Stack.Screen 
                name="Help"
                component={Help}
                options={{ title: 'Centro de Ayuda' }}
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
                    drawerStyle={Styles.drawer.style}
                    drawerContentOptions={Styles.drawer.contentOptions}
                >
                    <Drawer.Screen
                        name="Login"
                        component={LoginScreen}
                        options={{
                            title: 'Inicia sesión'
                        }}
                    />
                    <Drawer.Screen
                        name="Home"
                        component={HomeScreen}
                        options={{
                            title: 'Inicio'
                        }}
                    />
                    <Drawer.Screen
                        name="SkinCare"
                        component={SkinCareScreen}
                        options={{
                            title: 'Cuidado de la piel'
                        }}
                    />
                    <Drawer.Screen
                        name="HairCare"
                        component={HairCareScreen}
                        options={{
                            title: 'Cuidado del Cabello'
                        }}
                    />
                    <Drawer.Screen
                        name="OtherProduct"
                        component={OtherProductScreen}
                        options={{
                            title: 'Otros Productos'
                        }}
                    />
                    <Drawer.Screen
                        name="Offer"
                        component={OfferScreen}
                        options={{
                            title: 'Ofertas'
                        }}
                    />
                    <Drawer.Screen
                        name="Notifications"
                        component={NotificationsScreen}
                        options={{
                            title: 'Notificaciones'
                        }}
                    />
                    <Drawer.Screen
                        name="Help"
                        component={HelpScreen}
                        options={{
                            title: 'Ayuda'
                        }}
                    />
                </Drawer.Navigator>
            </NavigationContainer>
        );
    }
}

export default Main;
