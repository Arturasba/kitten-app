// Core
import React from "react";

// Navigation
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

// Screens
import KittenListScreen from "./screens/KittenList";
import KittenDetailScreen from "./screens/KittenDetail";
import NoConnectionScreen from "./screens/NoInternet";

// Redux
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./store/reducer";

// Other
import { Alert } from "react-native";
import NetInfo from "@react-native-community/netinfo";

export default function App() {
  const StackNavigation = createStackNavigator(
    {
      Kittens: { screen: KittenListScreen },
      KittenView: { screen: KittenDetailScreen },
    },
    {
      defaultNavigationOptions: {
        headerTitleAlign: "center",
      },
    }
  );
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
