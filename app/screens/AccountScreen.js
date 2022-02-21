import React from "react";
import { FlatList, StyleSheet, View } from "react-native";

import Icon from "../components/icon";
import ListItem from "../components/ListItem";
import Screen from "../components/Screen";
import colors from "../config/colors";

const MenuItems = [
  {
    title: "title",
    icon: {
      name: "formate-list-bulleted",
      backgroundColor: colors.primary,
    },
  },
  {
    title: "title2",
    icon: {
      name: "email",
      backgroundColor: colors.secondary,
    },
  },
];

function AccountScreen(props) {
  return (
    <Screen>
      <View style={styles.container}>
        <ListItem
          title="title"
          subTitle="sub"
          image={require("../assets/chair.jpg")}
        />
      </View>
      <FlatList
        data={MenuItems}
        keyExtractor={(MenuItems) => MenuItems.title}
        renderItem={(item) => (
          <ListItem
            title={item.title}
            ImageComponent={
              <Icon
                size={30}
                name={item.icon.name}
                backgroundColor={item.icon.backgroundColor}
              />
            }
          />
        )}
      />
    </Screen>
  );
}

export default AccountScreen;

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
});
