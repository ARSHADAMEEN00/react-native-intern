import React from "react";
import { Platform, StyleSheet, Text } from "react-native";

function AppText({ children }) {
  return <Text style={styles.text}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    color: "yellow",
    fontSize: 18,
    fontFamily: "Roboto",
    ...Platform.select({
      ios: {},
      android: {},
    }),
  },
});

export default AppText;
