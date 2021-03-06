import { StyleSheet } from "react-native";
import React from "react";
import Button from "../Button";
import { useFormikContext } from "formik";

const SubmitButton = ({ title }) => {
  const { handleSubmit } = useFormikContext();
  return <Button title={title} onPress={handleSubmit} />;
};

export default SubmitButton;

const styles = StyleSheet.create({});
