import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import { LOGGED_IN, LOADING } from "../contexts/AuthContext";

import { FontAwesome5 } from "@expo/vector-icons";
import { Center, CircleIcon, InfoIcon, Text } from "native-base";

//screens
import { Home, Login } from "../screens/index";
import { StatusBar } from "expo-status-bar";
import useAuthContext from "../hooks/useAuthContext";

import PrivateScreen from "./PrivateScreen";
import PublicScreen from "./PublicScreen";

const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();

const Navigation = () => {
  const { loggedState } = useAuthContext();
  console.log(loggedState, "a ver");
  const isSignedIn = true;

  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <Stack.Navigator>
        {loggedState ? (
          <Stack.Screen name="Home" component={Home} />
        ) : (
          <Stack.Screen name="Login" component={Login} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
