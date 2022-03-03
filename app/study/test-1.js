import {
  Button,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Alert,
  Platform,
  StatusBar,
} from "react-native";

export default function App() {
  const handlePress = () => {
    console.log("text clicked");
  };
  const [first, setfirst] = useState(false);
  const [category, setCategory] = useState();

  return (
    <SafeAreaView style={styles.container}>
      <Text onPress={handlePress} style={styles.text}>
        I am Arshad
      </Text>
      {/* <Image source={require("./assets/bg.jpg")} /> */}
      <TouchableOpacity onPress={() => console.log("clicked")}>
        <Image
          blurRadius={3}
          borderBottomLeftRadius={30}
          borderRadius={20}
          fadeDuration={400}
          resizeMode="cover"
          source={{
            width: 200,
            height: 300,
            uri: "https://picsum.photos/id/160/3200/2119",
          }}
        />
      </TouchableOpacity>
      <Text style={{ paddingTop: 20 }}>
        I am a developer, i can code and solve Problems and also I am a Engineer{" "}
      </Text>
      <Button
        title="See More"
        onPress={() =>
          Alert.alert("See More in social media", "Instagram", [
            { text: "ameen_hbz", onPress: () => alert("hi") },
            { text: "Cancel" },
          ])
        }
        // onPress={() =>
        //   Alert.prompt("hi there", "Ask me anything", (text) =>
        //     console.log(text)
        //   )
        // }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#cfcfcfcf",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    padding: 20,
    alignItems: "center",
  },
  text: {
    color: "#9999",
    paddingBottom: 20,
    fontSize: 20,
    paddingTop: 30,
  },
});

<SafeAreaView style={styles.container}>
  <View
    style={{
      backgroundColor: "dodgerblue",
      width: "100%",
      height: landscape == "true" ? "100%" : "30%",
    }}
  ></View>

  <Text onPress={handlePress} style={styles.text}>
    I am Arshad
  </Text>
  {/* <Image source={require("./assets/bg.jpg")} /> */}
  <TouchableOpacity onPress={() => console.log("clicked")}>
    <Image
      blurRadius={3}
      borderBottomLeftRadius={30}
      borderRadius={20}
      fadeDuration={400}
      resizeMode="cover"
      source={{
        width: 200,
        height: 300,
        uri: "https://picsum.photos/id/160/3200/2119",
      }}
    />
  </TouchableOpacity>
  <Text style={{ paddingTop: 20 }}>
    I am a developer, i can code and solve Problems and also I am a Engineer{" "}
  </Text>
  <Button
    title="See More"
    onPress={() =>
      Alert.alert("See More in social media", "Instagram", [
        { text: "ameen_hbz", onPress: () => alert("hi") },
        { text: "Cancel" },
      ])
    }
  />
</SafeAreaView>;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#cfcfcfcf",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    alignItems: "center",
  },
  text: {
    color: "#9999",
    paddingBottom: 20,
    fontSize: 20,
    paddingTop: 20,
  },
});

<View
  style={{
    backgroundColor: "skyblue",
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    flexWrap: "wrap",
  }}
>
  <View
    style={{
      backgroundColor: "#fff",
      width: 300,
      height: 100,
      // flexBasis: 200,
      // flexGrow: 1
      flexShrink: 1,
    }}
  />
  <View
    style={{
      backgroundColor: "gold",
      width: 100,
      height: 100,
      top: 30,
    }}
  />
  <View
    style={{
      backgroundColor: "tomato",
      width: 100,
      height: 100,
    }}
  />

  <View
    style={{
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <View
      style={{
        backgroundColor: "dodgerblue",
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: "royalblue",
        borderRadius: 15,
        borderTopWidth: 20,
        borderTopLeftRadius: 40,
        shadowColor: "#ccc",
        shadowOffset: {
          height: 10,
          width: 10,
        },
        shadowOpacity: 1,
        shadowRadius: 10,
        elevation: 30,
      }}
    ></View>
  </View>

  <Switch value={first} onValueChange={(item) => setfirst(item)} />
  <AppPicker
    selectedItem={category}
    onSelectItem={(item) => setCategory(item)}
    items={categories}
    icon="apps"
    placeholder="hiasdnfa"
  />
  <AppTextInput placeholder={"User Name"} icon={"email"} />
</View>;

const categories = [
  { label: "bags", value: 1 },
  { label: "mac", value: 2 },
  { label: "iphone", value: 3 },
  { label: "sheos", value: 4 },
];
