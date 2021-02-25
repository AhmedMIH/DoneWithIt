import React from "react";
import { View, StyleSheet, Keyboard, Alert } from "react-native";
import * as Yup from "yup";
import * as Notifications from "expo-notifications";

import messagesApi from "../api/massages";
import {
  AppForm as Form,
  AppFormField as Field,
  SubmitButton as Submit,
} from "./forms";

const validationSchema = Yup.object().shape({
  message: Yup.string().required("You can't send an empty message"),
});

export default function ContactSellerForm({ listing }) {
  const handleSubmit = async ({ message }, { resetForm }) => {
    Keyboard.dismiss();

    const result = await messagesApi.send(message, listing.id);

    if (!result.ok) {
      console.log("Error", result);
      return Alert.alert("Error", "Could not send the message to the seller");
    }

    resetForm();

    console.log("done");
    Notifications.scheduleNotificationAsync({
      content: {
        title: "You've got mail! 📬",
        body: "Here is the notification body",
        data: { data: "goes here" },
      },
      trigger: { seconds: 2 },
    });
  };

  return (
    <Form
      initialValues={{ message: "" }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <View style={styles.container}>
        <Field name="message" placeholder="Message..." />
        <Submit title="Contact Seller" />
      </View>
    </Form>
  );
}

const styles = StyleSheet.create({
  container: {},
});
