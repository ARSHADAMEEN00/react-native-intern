import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, useNavigation } from "@react-navigation/native";

import Screen from "./app/components/Screen";
import AppText from "./app/components/Text";
import { Button } from "react-native";

const Tweets = ({ navigation }) => {
  return (
    <Screen>
      <AppText>{"tweet"}</AppText>
      <Button
        title="view"
        onPress={() =>
          navigation.navigate("TweetDeatials", { name: "props pass" })
        }
      />
      <Link />
    </Screen>
  );
};
const TweetDeatials = ({ route }) => {
  return (
    <Screen>
      <AppText>
        {"tweet Detaiils"} {route.params.name}
      </AppText>
    </Screen>
  );
};

const Link = () => {
  const navigation = useNavigation();
  return (
    <Button
      title="click"
      onPress={() => navigation.navigate("TweetDeatials")}
    />
  );
};

const Stack = createStackNavigator();
const StackNavigator = () => (
  <Stack.Navigator initialRouteName="Tweets">
    <Stack.Screen name="TweetDeatials" component={TweetDeatials} />
    <Stack.Screen
      name="Tweets"
      component={Tweets}
      // options={({ route }) => ({ title: route.params.name })}
    />
  </Stack.Navigator>
);

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}
