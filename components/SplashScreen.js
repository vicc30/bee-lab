import React from 'react';
import { Text, View, Image } from 'react-native';
import * as Styles from '../styles/styles';

const logoSource = '../assets/images/bee.png';

const SplashScreen = () => {
    return (
        <View
            style={Styles.splash.component}>
            <Image
                source={require(logoSource)}
                style={Styles.splash.icon}
            />
        </View>
    );
}

export default SplashScreen;