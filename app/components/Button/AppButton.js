import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import colors from '../../config/colors';

function AppButton({ title, onPress, color = "primary" }) {
    return (
        <TouchableOpacity style={[styles.button, { backgroundColor: colors[color] }]} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.primary,
        borderRadius: 25,
        justifyContent: "center",
        paddingTop: 15,
        width: "100%",
        marginVertical: 5
    },
    text: {
        color: colors.white,
        fontSize: 18,
        textTransform: "uppercase",
        textAlign: "center",
        paddingBottom: 10
    }
})

export default AppButton;