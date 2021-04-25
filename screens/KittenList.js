import React, { useState } from "react";
import { StyleSheet, View, Button, FlatList } from "react-native";
import KittenCard from "../components/kittenCard";

const KittenList = (props) => {
  const [imageCount, setImageCount] = useState(30);

  return (
    <View>
      <View style={styles.container}>
        <Button onPress={() => setImageCount(30)} title="30" />
        <Button onPress={() => setImageCount(50)} title="50" />
        <Button onPress={() => setImageCount(100)} title="100" />
      </View>

      <Button
        onPress={() => props.navigation.navigate("KittenDetailScreen")}
        title="Kitten detail card"
      />
      <View>
        <FlatList
          data={[
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            9,
            10,
            11,
            12,
            13,
            14,
            15,
            16,
            17,
            18,
            19,
            20,
            21,
            22,
          ]}
          renderItem={(itemData) => (
            <KittenCard navigation={props.navigation} data={itemData} />
          )}
        />
        <KittenCard navigation={props.navigation} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
});

export default KittenList;
