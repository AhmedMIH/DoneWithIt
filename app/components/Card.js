import React from "react";
import { View, StyleSheet, Image } from "react-native";
import colors from "../config/colors";
import AppText from "./AppText";
function Card({ title, subtitle, image }) {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={image} />
      <View style={styles.detailsContianer}></View>
      <AppText style={styles.title}>{title}</AppText>
      <AppText>{subtitle}</AppText>
    </View>
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
    fontSize: 25,
  },
});
export default Card;
