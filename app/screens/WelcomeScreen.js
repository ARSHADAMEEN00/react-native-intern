import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import AppButton from '../components/Button/AppButton';
import colors from '../config/colors';

function WelcomeScreen(props) {
    return (
        <ImageBackground
            style={styles.background}
            source={{
                width: 200,
                height: 300,
                uri: "https://picsum.photos/id/160/3200/2119",
            }}
        >

            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require("../assets/logo-red.png")} />
                <Text style={styles.tagline}>login to continue</Text>
            </View>
            <View style={styles.buttonContainer}>

                <AppButton title="Login" />
                <AppButton title="Register" color="secondary" />
            </View>


        </ImageBackground>
    );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
    },

    logoContainer: {
        position: "absolute",
        top: 70,
        alignItems: "center"
    },
    logo: {
        width: 100,
        height: 50,
        color: 'skyblue',
    },
    tagline: {
        fontSize: 20,
        color: colors.black,
        paddingVertical: 20
    },
    buttonContainer: {
        padding: 20,
        width: "100%"
    },


})