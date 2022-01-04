import React from 'react';
import { Platform, StyleSheet, Text } from 'react-native';

function AppText({ children }) {



    return (
        <Text style={styles.text}>
            {children}
        </Text>
    );
}

const styles = StyleSheet.create({
    text: {
        color: "yellow",
        fontSize: 20,
        fontFamily: "Avenir"
    }
})

export default AppText;