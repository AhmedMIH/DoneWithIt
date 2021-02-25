import React from "react";
import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { Image } from "react-native-expo-image-cache";

import colors from "../config/colors";
import AppText from "./AppText";

function Card({ title, subtitle, imageUrl, onPress, thumbnailUrl }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.card}>
        <Image
          tint="light"
          style={styles.image}
          preview={{ uri: thumbnailUrl }}
          uri={imageUrl}
        />
        <View style={styles.detailsContianer}></View>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subtitle}>{subtitle}</AppText>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 10,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 200,
  },
  detailsContianer: {
    padding: 10,
  },
  title: {
    marginBottom: 7,
    marginLeft: 7,
    fontSize: 25,
  },
  subtitle: {
    marginBottom: 7,
    marginLeft: 7,
    color: colors.secondary,
  },
});
export default Card;
