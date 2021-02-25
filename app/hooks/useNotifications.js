import { useEffect } from "react";
import * as Notifications from "expo-notifications";
import * as Permission from "expo-permissions";

import expoPushTokenApi from "../api/expoPushToken";

export default useNotifications = (notificationListener) => {
  useEffect(() => {
    registerForPushNotifications();

    if (notificationListener)
      Notifications.addNotificationReceivedListener(notificationListener);
  }, []);

  const registerForPushNotifications = async () => {
    try {
      const permissoon = await Permission.askAsync(Permission.NOTIFICATIONS);
      if (!permissoon.granted) return;
      const token = await Notifications.getExpoPushTokenAsync();
      console.log(token);
      expoPushTokenApi.register(token);
    } catch (error) {
      console.log(error);
    }
  };
};
