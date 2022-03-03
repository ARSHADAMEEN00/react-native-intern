import React from "react";
import { Image, StyleSheet } from "react-native";
import * as Yup from "yup";

import { AppForm, FormField, SubmitButton } from "../components/forms";
import Screen from "../components/Screen";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

const LoginScreen = () => {
  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../assets/chair.jpg")} />
      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <FormField
          name="email"
          autoCapitalize="none"
          autoCorrect={false}
          icon={"email"}
          keyboardType="email-address"
          textContentType="emailAddress"
          placeholder={"email"}
        />

        <FormField
          name="password"
          autoCapitalize="none"
          autoCorrect={false}
          icon={"lock"}
          placeholder={"Password"}
          secureTextEntry
          textContentType="password"
        />

        <SubmitButton title="Login" />
      </AppForm>
    </Screen>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    height: 80,
    width: 80,
    alignSelf: "center",
    marginTop: 50,
    borderRadius: 50,
    marginBottom: 20,
  },
});
