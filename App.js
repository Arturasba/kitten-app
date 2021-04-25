import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  createStackNavigator,
  NavigationContainer,
} from "react-navigation-stack";
import KittenListScreen from "./screens/KittenList";
import KittenDetailScreen from "./screens/KittenDetail";
import { createAppContainer } from "react-navigation";

export default function App() {
  const StackNavigation = createStackNavigator({
    Home: { screen: KittenListScreen },
    KittenDetailScreen: { screen: KittenDetailScreen },
  });

  const Navigator = createAppContainer(StackNavigation);

  return <Navigator />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
