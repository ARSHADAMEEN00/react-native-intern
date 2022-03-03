import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

import Screen from "../components/Screen";
import Card from "../components/Card";
import colors from "../config/colors";

export default function ListingScreen() {
  const Listings = [
    {
      id: 1,
      title: "Jacket",
      price: 1087,
      image: require("../assets/chair.jpg"),
    },
    {
      id: 2,
      title: "Jacket new",
      price: 187,
      image: require("../assets/couch.jpg"),
    },
  ];

  return (
    <Screen styles={styles.screen}>
      <FlatList
        data={Listings}
        keyExtractor={(Listings) => Listings.id.toString()}
        renderItem={({ item }) => (
          <Card title={item.title} subTitle={item.price} image={item.image} />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
});
