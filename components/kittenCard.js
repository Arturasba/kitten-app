import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const KittenCard = (props) => {
  if (props.name && props.image) {
    return (
      <View style={styles.containerShadow}>
        <View style={styles.kittenContainer}>
          <TouchableOpacity
            onPress={() =>
              props.navigation.navigate("KittenView", {
                name: props.name,
                image: props.image,
              })
            }
          >
            <Image style={styles.image} source={{ uri: props.image }}></Image>
            <Text style={styles.name}>{props.name}</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  } else {
    return null;
  }
};

const styles = StyleSheet.create({
  kittenContainer: {
    marginTop: 20,
    marginBottom: 20,
    paddingLeft: 40,
    paddingRight: 40,
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
  },
  image: {
    width: "100%",
    height: 300,
  },
  name: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 18,
    marginTop: 5,
  },
  containerShadow: {
    backgroundColor: "#CDCDCD",
    margin: 20,
    borderRadius: 40,
  },
});

export default KittenCard;
