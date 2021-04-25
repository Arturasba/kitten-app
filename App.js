import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import KittenListScreen from "./screens/KittenList";
import KittenDetailScreen from "./screens/KittenDetail";
import { createAppContainer } from "react-navigation";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./store/reducer";

export default function App() {
  const StackNavigation = createStackNavigator({
    Kittens: { screen: KittenListScreen },
    KittenView: { screen: KittenDetailScreen },
  });

  const Navigator = createAppContainer(StackNavigation);

  return (
    <Provider store={createStore(reducer)}>
      <Navigator />
    </Provider>
  );
}
