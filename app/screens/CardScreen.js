import React from 'react';
import { View } from 'react-native-web';
import Card from '../components/Card';

function MyCardScreen(props) {
    return (
        <View style={{
            backgroundColor: "#f8f4f4",
            padding: 20,
            paddingTop: 100

        }}>
            <Card
                title="osperb innovetions"
                subTitle="App Devolopment"
                image={require("../assets/chair.jpg")}
            />
        </View>
    );
}

export default MyCardScreen;