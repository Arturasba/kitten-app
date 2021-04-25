import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import KittenListScreen from "./screens/KittenList";
import KittenDetailScreen from "./screens/KittenDetail";
import NoConnectionScreen from "./screens/NoInternet";
import { createAppContainer } from "react-navigation";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./store/reducer";
import { Alert } from "react-native";
import NetInfo from "@react-native-community/netinfo";

export default function App() {
  const StackNavigation = createStackNavigator({
    Kittens: { screen: KittenListScreen },
    KittenView: { screen: KittenDetailScreen },
  });
  let isConnected = true;

  NetInfo.addEventListener((networkState) => {
    if (networkState.isConnected == false) {
      Alert.alert("Please connect to internet to use this application");
      isConnected = false;
    } else {
      isConnected = true;
    }
  });

  const Navigator = createAppContainer(StackNavigation);

  return (
    <Provider store={createStore(reducer)}>
      {isConnected ? <Navigator /> : <NoConnectionScreen />}
    </Provider>
  );
}
