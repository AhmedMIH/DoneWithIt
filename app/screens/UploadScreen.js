import React from "react";
import { Modal, StyleSheet, View } from "react-native";
import * as Progress from "react-native-progress";
import LottieView from "lottie-react-native";
import colors from "../config/colors";
const UploadScreen = ({ onDone, progress = 0, visible = false }) => {
  return (
    <Modal visible={visible}>
      <View style={styles.container}>
        <LottieView
          style={styles.animations}
          source={require("../assets/animation/done.json")}
          autoPlay
          loop={false}
          onAnimationFinish={onDone}
        />
      </View>
    </Modal>
  );
};

export default UploadScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  animations: {
    width: 150,
  },
});
