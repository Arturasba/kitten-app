import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const KittenList = (props) => {
  return (
    <View>
      <Text>Default Kitten View</Text>

      <Button
        onPress={() => props.navigation.navigate("KittenDetailScreen")}
        title="go to kitten detail"
      />
    </View>
  );
};

export default KittenList;
