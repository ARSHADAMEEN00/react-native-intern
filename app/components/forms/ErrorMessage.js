import { StyleSheet } from "react-native";
import React from "react";
import colors from "../../config/colors";
import Text from "../Text";

const ErrorMessage = ({ error, visible }) => {
  if (!visible || !error) return null;
  return <Text style={styles.error}>{error}</Text>;
};

export default ErrorMessage;

const styles = StyleSheet.create({
  error: {
    color: colors.danger,
    textAlign: "left",
  },
});
