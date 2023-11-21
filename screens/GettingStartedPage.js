import React, { useEffect } from "react";
import {
  View,
  Image,
  StyleSheet,
  StatusBar,
  Text,
  Pressable,
} from "react-native";
import StartupLogo from "../assets/StartupLogo.png";
import GettingStartedInfo from "../components/GettingStartedInfo";

const GettingStartedPage = ({ navigation }) => {
  const goToSignUp = () => {
    navigation.navigate("SignUp");
  };
  const goToLogIn = () => {
    navigation.navigate("LogIn");
  };

  // Define your image data for the carousel
  const carouselData = [
    { image: require("./../assets/gettingStarted1.png") },
    { image: require("./../assets/gettingStarted2.png") },
    { image: require("./../assets/gettingStarted3.png") },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.appLogo}>
        <Image source={StartupLogo} style={styles.logo} resizeMode="contain" />
      </View>
      <View style={styles.gettingStartedContainer}>
        <Image
          source={require("./../assets/gettingStarted1.png")}
          style={styles.img}
          resizeMode="contain"
        />
      </View>
      <View style={styles.navigationsContainer}>
        <Pressable style={styles.button} onPress={goToSignUp}>
          <Text style={styles.buttonText}>Get Started!</Text>
        </Pressable>
        <View style={styles.alreadyHaveAccountText}>
          <Text style={styles.text}> Already have an account? </Text>
          <Text style={styles.loginText} onPress={goToLogIn}>
            Log in
          </Text>
        </View>
      </View>

      <StatusBar backgroundColor="#CCC" barStyle="light-content" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },
  appLogo: {
    flex: 1,
    maxHeight: "10%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },
  logo: {
    width: 90, // Adjust the width and height to fit your logo size
    maxHeight: 90,
  },
  gettingStartedContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    paddingVertical: 36,
  },
  img: {},
  gettingStartedInfo: {
    justifyContent: "center",
    alignItems: "center",
    maxHeight: "100%",
  },
  button: {
    borderRadius: 24,
    backgroundColor: "#93867F",
    alignItems: "center",
    padding: 16,
    width: "80%",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFF",
  },
  alreadyHaveAccountText: {
    flex: 1,
    flexDirection: "row",
  },
  text: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#DEC1FF",
  },
  loginText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#7D70BA",
  },
  navigationsContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    maxHeight: "20%",
    width: "100%",
  },
});

export default GettingStartedPage;
