import React from "react";
import {
  View,
  StyleSheet,
  KeyboardAvoidingView,
  TouchableOpacity,
} from "react-native";
import { Image } from "react-native-expo-image-cache";
import AppText from "../components/AppText";
import ListItem from "../components/lists/ListItem";
import colors from "../config/colors";
import ContactSellerForm from "../components/ContactSellerForm";

function ListDetailsScreen({ route }) {
  const listing = route.params;

  return (
    <KeyboardAvoidingView
      behavior="position"
      keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 100}
    >
      <View>
        <Image
          tint="light"
          style={styles.image}
          uri={listing.images[0].url}
          preview={{ uri: listing.images[0].thumbnailUrl }}
        />
        <View style={styles.detailsContainer}>
          <AppText style={styles.title}>{listing.title}</AppText>
          <AppText style={styles.subtitle}>{listing.price} </AppText>
          <View style={styles.userContainer}>
            <ListItem
              image={require("../assets/mosh.jpg")}
              title="Mosh"
              subtitle="5 Listings"
            />
          </View>
          <ContactSellerForm listing={listing} />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
  detailsContainer: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  subtitle: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  userContainer: {
    marginVertical: 40,
  },
});
export default ListDetailsScreen;
