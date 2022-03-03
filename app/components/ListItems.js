import React from "react";
import { Image, StyleSheet, View } from "react-native";
import colors from "../config/colors";
import Text from "./Text";

function ListItems({ title, subTitle, image }) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle}> {subTitle}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 10,
  },
  title: {
    fontWeight: "600",
    fontSize: 20,
    paddingBottom: 5,
  },
  subTitle: {
    color: colors.mediumGrey,
  },
  textContainer: {
    justifyContent: "center",
  },
});

export default ListItems;
