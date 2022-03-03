import { StyleSheet, View } from "react-native";
import React from "react";
import { useFormikContext } from "formik";

import TextInput from "../TextInput";
import ErrorMessage from "./ErrorMessage";

const AppFormField = ({ name, width, ...otherProps }) => {
  const { setFieldTouched, handleChange, errors, touched } = useFormikContext();

  return (
    <View>
      <TextInput
        onChangeText={handleChange(name)}
        onBlur={() => setFieldTouched(name)}
        {...otherProps}
        width={width}
      />
      <ErrorMessage visible={touched[name]} error={errors[name]} />
    </View>
  );
};

export default AppFormField;

const styles = StyleSheet.create({});
