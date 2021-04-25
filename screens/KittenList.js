import React from "react";
import { StyleSheet, View, Button, FlatList } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import KittenCard from "../components/kittenCard";
import * as actions from "../store/actions";

const KittenList = (props) => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const changeCount = (newCount) => {
    dispatch(actions.changeCount(newCount));
  };

  return (
    <View>
      <View style={styles.container}>
        <Button onPress={() => changeCount(30)} title="30" />
        <Button onPress={() => changeCount(50)} title="50" />
        <Button onPress={() => changeCount(100)} title="100" />
      </View>

      <View>
        <FlatList
          data={state.kittens}
          keyExtractor={(item) => item.key}
          renderItem={(itemData) => (
            <KittenCard
              navigation={props.navigation}
              data={itemData}
              name={itemData.item.name}
              image={itemData.item.image}
            />
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
