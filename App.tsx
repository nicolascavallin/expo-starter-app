/* eslint-disable global-require */
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import React, { FC } from "react";
import { Text, View } from "react-native";

const fonts = {
  "SF Pro Rounded Light": require("./assets/fonts/SF-Pro-Rounded-Light.otf"),
  "SF Pro Rounded": require("./assets/fonts/SF-Pro-Rounded-Regular.otf"),
  "SF Pro Rounded Medium": require("./assets/fonts/SF-Pro-Rounded-Medium.otf"),
  "SF Pro Rounded Semibold": require("./assets/fonts/SF-Pro-Rounded-Semibold.otf"),
  "SF Pro Rounded Bold": require("./assets/fonts/SF-Pro-Rounded-Bold.otf"),
  "SF Pro Rounded Black": require("./assets/fonts/SF-Pro-Rounded-Black.otf"),
  "SF Pro Rounded Heavy": require("./assets/fonts/SF-Pro-Rounded-Heavy.otf"),
};

const App: FC = () => {
  const [fontsLoaded] = useFonts(fonts);

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View>
      <Text>Hola</Text>
    </View>
  );
};

export default App;
