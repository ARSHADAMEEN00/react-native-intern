import { StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import Text from "./Text";

const PickerItems = ({ item, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.text}>{item.label}</Text>
    </TouchableOpacity>
  );
};

export default PickerItems;

const styles = StyleSheet.create({
  text: {
    padding: 10,
  },
});
