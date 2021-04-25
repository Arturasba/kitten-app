import React from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";

const KittenList = (props) => {
  const name = props.navigation.getParam("name");
  const image = props.navigation.getParam("image");
  return (
    <View>
      <Image
        style={{ width: 400, height: 400 }}
        source={{ uri: image }}
      ></Image>
      <Text style={{ fontWeight: "bold" }}>{name}</Text>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </Text>
    </View>
  );
};

export default KittenList;
