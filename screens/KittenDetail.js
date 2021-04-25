import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const KittenList = (props) => {
  return (
    <View>
      <Text>Kitten Detail Page</Text>
      <Button onPress={() => props.navigation.goBack()} title="go back" />
    </View>
  );
};

export default KittenList;
