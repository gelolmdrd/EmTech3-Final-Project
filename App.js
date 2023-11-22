import React, { useEffect } from "react";
import { View, Image, StyleSheet, StatusBar, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import StartupPage from "./screens/StartupPage";
import GettingStartedPage from "./screens/GettingStartedPage";
import LogInPage from "./screens/LogInPage";
import SignUpPage from "./screens/SignUpPage";
import EmptyPage from "./screens/Empty";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Startup">
        <Stack.Screen
          name="Startup"
          component={StartupPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="GettingStarted"
          component={GettingStartedPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="LogIn"
          component={LogInPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUpPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={EmptyPage}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
