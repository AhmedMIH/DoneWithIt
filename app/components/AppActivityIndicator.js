import React from "react";
import LottieView from "lottie-react-native";
import { View, StyleSheet } from "react-native";

const AppActivityIndicator = ({ visiable = false }) => {
  if (!visiable) return null;

  return (
    <View style={styles.overlay}>
      <LottieView
        source={require("../assets/animation/loader.json")}
        autoPlay
        loop
      />
    </View>
  );
};

const styles = StyleSheet.create({
  overlay: {
    position: "absolute",
    backgroundColor: "white",
    height: "100%",
    opacity: 0.8,
    width: "100%",
    zIndex: 1,
  },
});

export default AppActivityIndicator;
