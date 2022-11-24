import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Home } from "../screens/index";

const PrivateScreenStackNavigator = createStackNavigator();

export default function PrivateScreen() {
  return (
    <PrivateScreenStackNavigator.Navigator>
      <PrivateScreenStackNavigator.Screen name="Home" component={Home} />
    </PrivateScreenStackNavigator.Navigator>
  );
}
