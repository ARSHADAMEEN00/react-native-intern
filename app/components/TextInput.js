import { StyleSheet, TextInput, View } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import defaultStyle from "../config/styles";

export default function AppTextInput({ icon, width = "100%", ...otherProps }) {
  return (
    <View style={[styles.container, { width: width }]}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={20}
          color={defaultStyle.colors.mediumGrey}
          style={styles.icon}
        />
      )}
      <TextInput
        placeholderTextColor={defaultStyle.colors.mediumGrey}
        style={defaultStyle.text}
        {...otherProps}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyle.colors.light,
    borderRadius: 25,
    flexDirection: "row",
    width: "100%",
    padding: 15,
    marginVertical: 10,
  },
  icon: {
    paddingHorizontal: 10,
  },
});
