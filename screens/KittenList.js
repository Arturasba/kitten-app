// Core
import React, { useState } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  TouchableOpacity,
  Text,
  TextInput,
} from "react-native";

// Redux
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../store/actions";

// Components
import KittenCard from "../components/kittenCard";

const KittenList = (props) => {
  const [numberOfItems, setNumberOfItems] = useState(30);
  const [customNumberOfItems, setCustomNumberOfItems] = useState(0);

  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const changeCount = (newCount) => {
    setNumberOfItems(newCount);
    dispatch(actions.changeCount(newCount));
  };

  return (
    <View>
      <View style={styles.container}>
        <TouchableOpacity
          style={
            numberOfItems == 30 ? styles.countButtonActive : styles.countButton
          }
          onPress={() => {
            changeCount(30);
            setCustomNumberOfItems(null);
          }}
        >
          <Text>30</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={
            numberOfItems == 50 ? styles.countButtonActive : styles.countButton
          }
          onPress={() => {
            changeCount(50);
            setCustomNumberOfItems(null);
          }}
        >
          <Text>50</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={
            numberOfItems == 100 ? styles.countButtonActive : styles.countButton
          }
          onPress={() => {
            changeCount(100);
            setCustomNumberOfItems(null);
          }}
        >
          <Text>100</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={
            customNumberOfItems ? styles.countButtonActive : styles.countButton
          }
        >
          <TextInput
            style={styles.textInput}
            placeholder="Custom"
            keyboardType="numeric"
            value={customNumberOfItems}
            onChangeText={setCustomNumberOfItems}
            onEndEditing={() => {
              changeCount(customNumberOfItems);
            }}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.kittensListContainer}>
        <FlatList
          data={state.kittens}
          keyExtractor={(item) => item.key.toString()}
          renderItem={(itemData) => (
            <KittenCard
              navigation={props.navigation}
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
    margin: 15,
  },
  kittensListContainer: {
    marginBottom: 150,
  },
  countButton: {
    alignItems: "center",
    backgroundColor: "#add8e6",
    width: "20%",
    borderRadius: 15,
    padding: 10,
  },
  countButtonActive: {
    alignItems: "center",
    backgroundColor: "#5fdba7",
    width: "20%",
    borderRadius: 15,
    padding: 10,
  },
  custButton: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "#add8e6",
    width: "100%",
    borderRadius: 15,
    padding: 10,
  },
  textInput: {
    textAlign: "center",
  },
});

export default KittenList;
