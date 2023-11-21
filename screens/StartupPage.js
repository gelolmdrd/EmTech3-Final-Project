import React, { useEffect } from "react";
import { View, Image, StyleSheet, StatusBar } from "react-native";
import StartupLogo from "../assets/StartupLogo.png";

const StartupPage = ({ navigation }) => {
  useEffect(() => {
    const startupTimer = setTimeout(() => {
      navigation.navigate("GettingStarted");
    }, 3000);
    7;
    return () => clearTimeout(startupTimer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="white" barStyle="light-content" />
      <Image source={StartupLogo} style={styles.logo1} resizeMode="contain" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  logo1: {
    width: 150, // Adjust the width and height to fit your logo size
    height: 150,
  },
});

export default StartupPage;
