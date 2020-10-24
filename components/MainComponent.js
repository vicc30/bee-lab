import 'react-native-gesture-handler';
import React from 'react';
import { Image, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Icon } from 'react-native-elements';

import { useFonts, Pacifico_400Regular } from '@expo-google-fonts/pacifico';
import { Merriweather_400Regular, Merriweather_900Black } from '@expo-google-fonts/merriweather';

import * as Styles from '../styles/styles';

import SplashScreen from './SplashScreen';
import Cart from './CartComponent';
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
const CustomDrawerContentComponent = (props) => (
    <DrawerContentScrollView>
        <SafeAreaView
            style={Styles.drawer.container}
            forceInset={{ top: 'always', horizontal: 'never' }}
        >
            <View style={Styles.drawer.drawerHeader}>
                <View style={{ flex: 1 }}>
                    <Image source={require('../assets/images/bee.png')} style={Styles.drawer.drawerImage} />
                </View>
                <View style={{ flex: 2, marginLeft: 30 }}>
                    <Text style={Styles.drawer.drawerHeaderText}>Bee Lab</Text>
                </View>
            </View>
            <DrawerItemList {...props} />
        </SafeAreaView>
    </DrawerContentScrollView>
);

function LoginScreen({ navigation }) {
    return (
        <Stack.Navigator
            initialRouteName="Login"
            screenOptions={Styles.screenHeader}
        >
            <Stack.Screen
                name="Login"
                component={Login}
                options={{
                    title: 'Inicia Sesión',
                    headerLeft: () => (
                        <Icon
                            name="menu"
                            size={Styles.values.font_title_size}
                            color={Styles.colors.light}
                            containerStyle={Styles.drawer.margin}
                            onPress={() => navigation.toggleDrawer()}
                        />
                    ),
                    headerRight: () => (
                        <Icon
                            name="shopping-cart"
                            type="font-awesome-5"
                            size={Styles.values.font_title_size}
                            color={Styles.colors.light}
                            containerStyle={{ marginRight: 15 }}
                            onPress={() => navigation.navigate('Cart')}
                        />
                    )
                }}
            />
            <Stack.Screen
                name="Cart"
                component={Cart}
                options={{
                    title: 'Carrito de Compras'
                }}
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
                options={{
                    title: 'Bee Lab',
                    headerLeft: () => (
                        <Icon
                            name="menu"
                            size={Styles.values.font_title_size}
                            color={Styles.colors.light}
                            containerStyle={Styles.drawer.margin}
                            onPress={() => navigation.toggleDrawer()}
                        />
                    ),
                    headerRight: () => (
                        <Icon
                            name="shopping-cart"
                            type="font-awesome-5"
                            size={Styles.values.font_title_size}
                            color={Styles.colors.light}
                            containerStyle={{ marginRight: 15 }}
                            onPress={() => navigation.navigate('Cart')}
                        />
                    )
                }}
            />
            <Stack.Screen
                name="Cart"
                component={Cart}
                options={{
                    title: 'Carrito de Compras'
                }}
            />
        </Stack.Navigator>
    );
}

function SkinCareScreen({ navigation }) {
    return (
        <Stack.Navigator
            initialRouteName="SkinCare"
            screenOptions={Styles.screenHeader}
        >
            <Stack.Screen
                name="SkinCare"
                component={SkinCare}
                options={{
                    title: 'Cuidado de la Piel',
                    headerLeft: () => (
                        <Icon
                            name="menu"
                            size={Styles.values.font_title_size}
                            color={Styles.colors.light}
                            containerStyle={Styles.drawer.margin}
                            onPress={() => navigation.toggleDrawer()}
                        />
                    ),
                    headerRight: () => (
                        <Icon
                            name="shopping-cart"
                            type="font-awesome-5"
                            size={Styles.values.font_title_size}
                            color={Styles.colors.light}
                            containerStyle={{ marginRight: 15 }}
                            onPress={() => navigation.navigate('Cart')}
                        />
                    )
                }}
            />
            <Stack.Screen
                name="Cart"
                component={Cart}
                options={{
                    title: 'Carrito de Compras'
                }}
            />
        </Stack.Navigator>
    );
}

function HairCareScreen({ navigation }) {
    return (
        <Stack.Navigator
            initialRouteName="HairCare"
            screenOptions={Styles.screenHeader}
        >
            <Stack.Screen
                name="HairCare"
                component={HairCare}
                options={{
                    title: 'Cuidado del Cabello',
                    headerLeft: () => (
                        <Icon
                            name="menu"
                            size={Styles.values.font_title_size}
                            color={Styles.colors.light}
                            containerStyle={Styles.drawer.margin}
                            onPress={() => navigation.toggleDrawer()}
                        />
                    ),
                    headerRight: () => (
                        <Icon
                            name="shopping-cart"
                            type="font-awesome-5"
                            size={Styles.values.font_title_size}
                            color={Styles.colors.light}
                            containerStyle={{ marginRight: 15 }}
                            onPress={() => navigation.navigate('Cart')}
                        />
                    )
                }}
            />
            <Stack.Screen
                name="Cart"
                component={Cart}
                options={{
                    title: 'Carrito de Compras'
                }}
            />
        </Stack.Navigator>
    );
}

function OtherProductScreen({ navigation }) {
    return (
        <Stack.Navigator
            initialRouteName="OtherProduct"
            screenOptions={Styles.screenHeader}
        >
            <Stack.Screen
                name="OtherProduct"
                component={OtherProduct}
                options={{
                    title: 'Otros productos',
                    headerLeft: () => (
                        <Icon
                            name="menu"
                            size={Styles.values.font_title_size}
                            color={Styles.colors.light}
                            containerStyle={Styles.drawer.margin}
                            onPress={() => navigation.toggleDrawer()}
                        />
                    ),
                    headerRight: () => (
                        <Icon
                            name="shopping-cart"
                            type="font-awesome-5"
                            size={Styles.values.font_title_size}
                            color={Styles.colors.light}
                            containerStyle={{ marginRight: 15 }}
                            onPress={() => navigation.navigate('Cart')}
                        />
                    )
                }}
            />
            <Stack.Screen
                name="Cart"
                component={Cart}
                options={{
                    title: 'Carrito de Compras'
                }}
            />
        </Stack.Navigator>
    );
}

function OfferScreen({ navigation }) {
    return (
        <Stack.Navigator
            initialRouteName="Offer"
            screenOptions={Styles.screenHeader}
        >
            <Stack.Screen
                name="Offer"
                component={Offer}
                options={{
                    title: 'Ofertas!',
                    headerLeft: () => (
                        <Icon
                            name="menu"
                            size={Styles.values.font_title_size}
                            color={Styles.colors.light}
                            containerStyle={Styles.drawer.margin}
                            onPress={() => navigation.toggleDrawer()}
                        />
                    ),
                    headerRight: () => (
                        <Icon
                            name="shopping-cart"
                            type="font-awesome-5"
                            size={Styles.values.font_title_size}
                            color={Styles.colors.light}
                            containerStyle={{ marginRight: 15 }}
                            onPress={() => navigation.navigate('Cart')}
                        />
                    )
                }}
            />
            <Stack.Screen
                name="Cart"
                component={Cart}
                options={{
                    title: 'Carrito de Compras'
                }}
            />
        </Stack.Navigator>
    );
}

function NotificationsScreen({ navigation }) {
    return (
        <Stack.Navigator
            initialRouteName="Notifications"
            screenOptions={Styles.screenHeader}
        >
            <Stack.Screen
                name="Notifications"
                component={Notifications}
                options={{
                    title: 'Notificaciones',
                    headerLeft: () => (
                        <Icon
                            name="menu"
                            size={Styles.values.font_title_size}
                            color={Styles.colors.light}
                            containerStyle={Styles.drawer.margin}
                            onPress={() => navigation.toggleDrawer()}
                        />
                    ),
                    headerRight: () => (
                        <Icon
                            name="shopping-cart"
                            type="font-awesome-5"
                            size={Styles.values.font_title_size}
                            color={Styles.colors.light}
                            containerStyle={{ marginRight: 15 }}
                            onPress={() => navigation.navigate('Cart')}
                        />
                    )
                }}
            />
            <Stack.Screen
                name="Cart"
                component={Cart}
                options={{
                    title: 'Carrito de Compras'
                }}
            />
        </Stack.Navigator>
    );
}

function HelpScreen({ navigation }) {
    return (
        <Stack.Navigator
            initialRouteName="Help"
            screenOptions={Styles.screenHeader}
        >
            <Stack.Screen
                name="Help"
                component={Help}
                options={{
                    title: 'Centro de Ayuda',
                    headerLeft: () => (
                        <Icon
                            name="menu"
                            size={Styles.values.font_title_size}
                            color={Styles.colors.light}
                            containerStyle={Styles.drawer.margin}
                            onPress={() => navigation.toggleDrawer()}
                        />
                    ),
                    headerRight: () => (
                        <Icon
                            name="shopping-cart"
                            type="font-awesome-5"
                            size={Styles.values.font_title_size}
                            color={Styles.colors.light}
                            containerStyle={{ marginRight: 15 }}
                            onPress={() => navigation.navigate('Cart')}
                        />
                    )
                }}
            />
            <Stack.Screen
                name="Cart"
                component={Cart}
                options={{
                    title: 'Carrito de Compras'
                }}
            />
        </Stack.Navigator>
    );
}

function MainNavigator() {
    return (
        <Drawer.Navigator
            initialRouteName="Home"
            drawerStyle={Styles.drawer.style}
            drawerContent={props => <CustomDrawerContentComponent {...props} />}
            drawerContentOptions={Styles.drawer.contentOptions}
        >
            <Drawer.Screen
                name="Login"
                component={LoginScreen}
                options={{
                    title: 'Inicia sesión',
                    drawerIcon: ({ color, focused }) => (
                        <Icon
                            name='sign-in'
                            type='font-awesome'
                            size={Styles.values.font_title_size}
                            color={color}
                        />
                    )
                }}
            />
            <Drawer.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    title: 'Inicio',
                    drawerIcon: ({ color, focused }) => (
                        <Icon
                            name='home'
                            type='font-awesome'
                            size={Styles.values.font_title_size}
                            color={color}
                        />
                    )
                }}
            />
            <Drawer.Screen
                name="SkinCare"
                component={SkinCareScreen}
                options={{
                    title: 'Cuidado de la piel',
                    drawerIcon: ({ color, focused }) => (
                        <Icon
                            name='praying-hands'
                            type='font-awesome-5'
                            size={Styles.values.font_title_size}
                            color={color}
                        />
                    )
                }}
            />
            <Drawer.Screen
                name="HairCare"
                component={HairCareScreen}
                options={{
                    title: 'Cuidado del Cabello',
                    drawerIcon: ({ color, focused }) => (
                        <Icon
                            name='pagelines'
                            type='font-awesome-5'
                            size={Styles.values.font_title_size}
                            color={color}
                        />
                    )
                }}
            />
            <Drawer.Screen
                name="OtherProduct"
                component={OtherProductScreen}
                options={{
                    title: 'Otros Productos',
                    drawerIcon: ({ color, focused }) => (
                        <Icon
                            name='mortar-pestle'
                            type='font-awesome-5'
                            size={Styles.values.font_title_size}
                            color={color}
                        />
                    )
                }}
            />
            <Drawer.Screen
                name="Offer"
                component={OfferScreen}
                options={{
                    title: 'Ofertas',
                    drawerIcon: ({ color, focused }) => (
                        <Icon
                            name='tag'
                            type='font-awesome-5'
                            size={Styles.values.font_title_size}
                            color={color}
                        />
                    )
                }}
            />
            <Drawer.Screen
                name="Notifications"
                component={NotificationsScreen}
                options={{
                    title: 'Notificaciones',
                    drawerIcon: ({ color, focused }) => (
                        <Icon
                            name='bell'
                            type='font-awesome-5'
                            size={Styles.values.font_title_size}
                            color={color}
                        />
                    )
                }}
            />
            <Drawer.Screen
                name="Help"
                component={HelpScreen}
                options={{
                    title: 'Ayuda',
                    drawerIcon: ({ color, focused }) => (
                        <Icon
                            name='question-circle'
                            type='font-awesome-5'
                            size={Styles.values.font_title_size}
                            color={color}
                        />
                    )
                }}
            />

        </Drawer.Navigator>
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
                <MainNavigator />
            </NavigationContainer>
        );
    }
}

export default Main;
