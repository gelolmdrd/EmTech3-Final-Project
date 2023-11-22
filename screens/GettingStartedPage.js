import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Image,
  StyleSheet,
  StatusBar,
  Text,
  ScrollView,
  Pressable,
  Dimensions,
} from "react-native";
import GettingStartedInfo from "../components/GettingStartedInfo";
import SignUpPage from "./SignUpPage";
import * as Font from "expo-font";

const loadFonts = async () => {
  await Font.loadAsync({
    Inter: require("../assets/fonts/Inter-Regular.ttf"),
  });
};

const GettingStartedPage = ({ navigation }) => {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const scrollViewRef = useRef(null);

  useEffect(() => {
    const loadApp = async () => {
      await loadFonts();
      setFontsLoaded(true);
    };

    loadApp();
  }, []);

  if (!fontsLoaded) {
    return null;
  }
  const goToSignUp = () => {
    navigation.navigate("SignUp");
  };

  const instructions = [
    {
      text: "Get tailored skin care routines",
      subtext: "Personalized recommendations just for you",
      image: require("../assets/info1.png"),
    },
    {
      text: "Analyze skin conditions using our built-in AI",
      subtext: "Cutting-edge technology for accurate analysis",
      image: require("../assets/info2.png"),
    },
    {
      text: "Get personalized daily skin care tips",
      subtext: "Receive tips to keep your skin healthy every day",
      image: require("../assets/info3.png"),
    },
  ];

  const screenWidth = Dimensions.get("window").width;

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#CCC" barStyle="light-content" />
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
      >
        {instructions.map((item, index) => (
          <GettingStartedInfo
            key={index}
            instruction={item.text}
            subtext={item.subtext}
            image={item.image}
            screenWidth={screenWidth}
            textStyle={styles.instructionText} // Pass additional style
            subtextStyle={styles.subtext} // Pass subtext style
          />
        ))}
      </ScrollView>

      <Pressable style={styles.getStartedButton} onPress={goToSignUp}>
        <Text style={styles.buttonText}>Get Started</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  scrollContainer: {
    alignItems: "center",
  },
  instructionText: {
    fontFamily: "Inter",
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    color: "#333",
  },
  getStartedButton: {
    width: 250,
    borderRadius: 24,
    backgroundColor: "#93867F",
    padding: 16,
    borderRadius: 30,
    alignItems: "center",
    bottom: 80,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  scrollIndicatorContainer: {
    position: "absolute",
    bottom: 180,
    backgroundColor: "blue",
    zIndex: 1,
  },
});

export default GettingStartedPage;
