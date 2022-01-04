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
  Dimensions,
} from "react-native";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import AppText from "./app/components/AppText";
import AppButton from "./app/components/Button/AppButton";
import Card from "./app/components/Card";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";

export default function App() {

  return (
    // <WelcomeScreen />
    <ViewImageScreen />
    // <ListingDetailsScreen />
    // <View style={{
    //   backgroundColor: "#f8f4f4",
    //   padding: 20,
    //   paddingTop: 100

    // }}>
    //   <Card
    //     title="osperb innovetions"
    //     subTitle="App Devolopment"
    //     image={require("./app/assets/chair.jpg")}
    //   />
    //   <Card
    //     title="MEA"
    //     subTitle="Engg"
    //     image={require("./app/assets/bg.jpg")}
    //   />
    //   <Card
    //     title="MEA"
    //     subTitle="Engg"
    //     image={require("./app/assets/background.jpg")}
    //   />
    // </View>

  );
}
