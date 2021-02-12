import React, { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import {
  ListItem,
  ListItemDeleteAction,
  ListItemSeparators,
} from "../components/lists";
import Screen from "../components/Screen";

const initialMessages = [
  {
    id: 1,
    title: "T1",
    description: "D1",
    image: require("../assets/mosh.jpg"),
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: require("../assets/mosh.jpg"),
  },
];

function MessageScreen() {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message) => {
    const newMessages = messages.filter((m) => m.id !== message.id);
    setMessages(newMessages);
  };

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subtitle={item.description}
            image={item.images}
            onPress={() => {}}
            renderRightActions={() => (
              <ListItemDeleteAction
                onPress={() => {
                  handleDelete(item);
                }}
              />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparators}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([]);
        }}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({});

export default MessageScreen;
