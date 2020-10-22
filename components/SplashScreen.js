import React from 'react';
import { Text, View, Image } from 'react-native';

const logoSource = '../assets/images/bee.png';
const frenchPink = '#FF5D8F';

const SplashScreen = () => {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: frenchPink
            }}>
            <Image
                source={require(logoSource)}
                style={{ width: 150, height: 150 }}
            />
        </View>
    );
}

export default SplashScreen;