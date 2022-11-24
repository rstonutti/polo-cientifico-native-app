import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Login } from "../screens/index";

const PublicScreenStackNavigator = createStackNavigator();

export default function PublicScreen() {
  return (
    <PublicScreenStackNavigator.Navigator>
      <PublicScreenStackNavigator.Screen name="Login" component={Login} />
    </PublicScreenStackNavigator.Navigator>
  );
}
