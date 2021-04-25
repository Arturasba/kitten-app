import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import KittenListScreen from "./screens/KittenList";
import KittenDetailScreen from "./screens/KittenDetail";
import { createAppContainer } from "react-navigation";

export default function App() {
  const StackNavigation = createStackNavigator({
    Kittens: { screen: KittenListScreen },
    KittenView: { screen: KittenDetailScreen },
  });

  const Navigator = createAppContainer(StackNavigation);

  return <Navigator />;
}
