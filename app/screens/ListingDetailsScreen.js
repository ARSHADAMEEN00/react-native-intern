import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import AppText from '../components/AppText';
import ListItems from '../components/ListItems';
import colors from '../config/colors';

function ListingDetailsScreen(props) {
    return (
        <View>
            <Image style={styles.image} source={require('../assets/chair.jpg')} />
            <View style={styles.detailsContainer}>
                <AppText style={styles.title}>New Chair</AppText>
                <AppText style={styles.price}>$600</AppText>
                <View style={styles.userContainer}>
                    <ListItems
                        image={require("../assets/icon.png")}
                        title="Arshad"
                        subTitle="2 Items"
                    />
                </View>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    userContainer: {
        marginVertical: 50
    },
    image: {
        width: "100%",
        height: 300
    },
    detailsContainer: {
        padding: 20
    },
    title: {
        fontSize: 24,
        fontWeight: "500"
    },
    price: {
        color: colors.secondary,
        fontWeight: "bold",
        fontSize: 20,
        marginVertical: 10
    }
})

export default ListingDetailsScreen;