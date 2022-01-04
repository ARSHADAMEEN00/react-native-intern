import { Platform, StyleSheet } from "react-native";



const styles = StyleSheet.create({
    text: {
        color: "#000",
        ...Platform.select({
            ios: {
                fontSize: 20,
                fontFamily: "Avenir"
            },
            androd: {
                fontSize: 18,
                fontFamily: "Roboto"
            }

        })
    }
})

export default styles