import {
  Button,
  FlatList,
  Modal,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React, { useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
import Text from "./Text";
import Screen from "./Screen";
import PickerItems from "./PickerItems";

export default function AppPicker({
  icon,
  items,
  selectedItem,
  onSelectItem,
  numberOfColumns = 1,
  PickerItemComponent = PickerItems,
  placeholder,
  width = "100%",
}) {
  const [modalVissible, setModalVissible] = useState(false);
  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVissible(true)}>
        <View style={[styles.container, { width: width }]}>
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              size={20}
              color={colors.mediumGrey}
              style={styles.icon}
            />
          )}

          {selectedItem ? (
            <Text style={styles.text}>{selectedItem.label} </Text>
          ) : (
            <Text style={styles.placeholder}>{placeholder}</Text>
          )}

          <MaterialCommunityIcons
            name="chevron-down"
            size={20}
            color={colors.mediumGrey}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVissible} animationType="slide">
        <Screen>
          <Button title="Close" onPress={() => setModalVissible(false)} />
          <FlatList
            data={items}
            keyExtractor={(item) => item.value.toString()}
            numColumns={numberOfColumns}
            renderItem={({ item }) => (
              <PickerItemComponent
                item={item}
                label={item.label}
                onPress={() => {
                  setModalVissible(false);
                  onSelectItem(item);
                }}
              />
            )}
          />
        </Screen>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    borderRadius: 25,
    flexDirection: "row",
    width: "100%",
    padding: 15,
    marginVertical: 10,
  },
  icon: {
    paddingHorizontal: 10,
  },
  text: {
    flex: 1,
  },
  placeholder: {
    color: colors.mediumGrey,
    flex: 1,
  },
});
