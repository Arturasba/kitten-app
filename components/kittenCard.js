import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const KittenCard = (props) => {
  return (
    <View style={styles.kittenContainer}>
      <TouchableOpacity
        onPress={() =>
          props.navigation.navigate("KittenView", {
            name: props.name,
            image: props.image,
          })
        }
      >
        <Image
          style={{ width: 400, height: 400 }}
          source={{ uri: props.image }}
        ></Image>
        <Text>{props.name}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  kittenContainer: {
    marginTop: 20,
    marginBottom: 20,
    flexDirection: "row",
    justifyContent: "space-around",
  },
});

export default KittenCard;
