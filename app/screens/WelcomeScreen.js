import React from "react";
import { ImageBackground, StyleSheet, View, Image, Text } from "react-native";

import AppButton from "../components/AppButton";
import colors from "../config/colors";

function WelcomeScreen({ navigation }) {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.logoContianer}>
        <Image style={styles.logo} source={require("../assets/logo-red.png")} />
        <Text>sell what you dont need</Text>
      </View>
      <View style={styles.buttonContianer}>
        <AppButton
          color="secondary"
          title="login"
          onPress={() => navigation.navigate("Login")}
        />
        <AppButton
          title="register"
          onPress={() => navigation.navigate("Register")}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  logoContianer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  logo: {
    height: 100,
    width: 100,
  },
  buttonContianer: {
    padding: 20,
    width: "100%",
  },
});
export default WelcomeScreen;
