import React, { useEffect } from "react";
import { StyleSheet, FlatList } from "react-native";

import AppText from "../components/AppText";
import AppActivityIndicator from "../components/AppActivityIndicator";
import AppButton from "../components/AppButton";
import Card from "../components/Card";
import colors from "../config/colors";
import Screen from "../components/Screen";
import listingsApi from "../api/listings";
import routes from "../navigation/routes";
import useApi from "../hooks/useApi";

const ListingScreen = ({ navigation }) => {
  const { data: listings, error, loading, request: loadListings } = useApi(
    listingsApi.getListings
  );

  useEffect(() => {
    loadListings();
  }, []);
  return (
    <>
      <AppActivityIndicator visiable={loading} />
      <Screen style={styles.screen}>
        {error && (
          <>
            <AppText>Couldnt retrieve the listings</AppText>
            <AppButton title="retry" onPress={loadListings} />
          </>
        )}

        <FlatList
          showsVerticalScrollIndicator={false}
          data={listings}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <Card
              title={item.title}
              subtitle={"$" + item.price}
              imageUrl={item.images[0].url}
              onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
              thumbnailUrl={item.images[0].thumbnailUrl}
            />
          )}
        />
      </Screen>
    </>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 10,
    backgroundColor: colors.light,
  },
});

export default ListingScreen;
