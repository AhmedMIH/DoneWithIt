import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import Screen from "../components/Screen";
import Icon from "../components/Icon";
import { ListItem, ListItemSeparators } from "../components/lists";
import Colors from "../config/colors";

const menuItems = [
  {
    title: "My Listings",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: Colors.primary,
    },
  },
  {
    title: "My Messages",
    icon: {
      name: "email",
      backgroundColor: Colors.secondary,
    },
  },
];

const AccountScreen = () => {
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title="Ahmed Mohamed"
          subtitle="m_rx_22@yahoo.com"
          image={require("../assets/mosh.jpg")}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(item) => {
            item.title;
          }}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              IconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
            />
          )}
          ItemSeparatorComponent={ListItemSeparators}
        />
      </View>
      <ListItem
        title="Log Out"
        IconComponent={<Icon name="logout" backgroundColor="#ffe66d" />}
      />
    </Screen>
  );
};
const styles = StyleSheet.create({
  screen: {
    backgroundColor: Colors.light,
  },

  container: {
    marginVertical: 15,
  },
});

export default AccountScreen;
