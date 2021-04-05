import React, { FC } from "react";
import { Text, View } from "react-native";

const App: FC = () => {
  const name = "hey";

  return (
    <View>
      <Text>{name}</Text>
    </View>
  );
};

export default App;
