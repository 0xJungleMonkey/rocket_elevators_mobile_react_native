<script src="http://localhost:8097"></script>;

import { StatusBar } from "expo-status-bar";
// import LoginScreen from "react-native-login-screen";

import { StyleSheet, Text, View } from "react-native";
// import Login from "./login";
import PizzaTranslator from "./playaround";
export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text></Text> */}
      {/* <Login /> */}
      <PizzaTranslator />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
