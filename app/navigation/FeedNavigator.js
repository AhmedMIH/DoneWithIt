import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import ListingScreen from "../screens/ListingScreen";
import ListDetailsScreen from "../screens/ListDetailsScreen";

const Stack = createStackNavigator();

const FeedNavigator = () => (
  <Stack.Navigator mode="modal" screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Listing" component={ListingScreen} />
    <Stack.Screen name="ListDetails" component={ListDetailsScreen} />
  </Stack.Navigator>
);

export default FeedNavigator;
