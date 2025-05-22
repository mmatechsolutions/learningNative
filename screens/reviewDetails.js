
import React from "react";
import { View, Text } from "react-native";
import { globalStyles } from "../styles/global";

export default function ReviewDetails({ route }) {
  const { title, rating, body, key } = route.params;

  return (
    <View style={globalStyles.container}>
      <Text>{title}</Text>
      <Text>{rating}</Text>
      <Text>{body}</Text>
      <Text>{key}</Text>
    </View>
  );
}
