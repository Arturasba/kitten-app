import React from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const KittenCard = (props) => {
  return (
    <View>
      <TouchableOpacity onPress={() => props.navigation.navigate("KittenView")}>
        <Text>Kitten Image</Text>
        <Text>Kitten name</Text>
      </TouchableOpacity>
    </View>
  );
};

export default KittenCard;
