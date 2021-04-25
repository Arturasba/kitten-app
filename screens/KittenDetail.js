//Core
import React from "react";
import { StyleSheet, Image, Text, View } from "react-native";

const KittenList = (props) => {
  const name = props.navigation.getParam("name");
  const image = props.navigation.getParam("image");
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: image }}></Image>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.description}>
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

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginBottom: 20,
    paddingLeft: 10,
    paddingRight: 10,
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
  },
  image: {
    width: "100%",
    height: 350,
  },
  name: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 35,
    marginTop: 5,
  },
  description: {
    paddingLeft: 10,
    paddingRight: 10,
  },
});

export default KittenList;
