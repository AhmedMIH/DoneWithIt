import React from "react";
import { StyleSheet, FlatList } from "react-native";

import Screen from "../components/Screen";
import Card from "../components/Card";
import colors from "../config/colors";

const listings = [
  {
    id: 1,
    title: "Red Jacket",
    price: 100,
    image: require("../assets/jacket.jpg"),
  },
  {
    id: 1,
    title: "Couch",
    price: 1000,
    image: require("../assets/couch.jpg"),
  },
];

const ListingScreen = () => {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(item) => item.id.toString}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subtitle={"$" + item.price}
            image={item.image}
          />
        )}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
});

export default ListingScreen;
