import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const GettingStartedInfo = ({
  instruction,
  subtext,
  image,
  screenWidth,
  textStyle,
  subtextStyle,
}) => {
  return (
    <View style={[styles.container, { width: screenWidth }]}>
      <Image source={image} style={styles.image} resizeMode="contain" />
      <Text style={[styles.text, textStyle]}>{instruction}</Text>
      {subtext && <Text style={[styles.subtext, subtextStyle]}>{subtext}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 30,
  },
  image: {
    height: 200, // Adjust the height as needed
    marginBottom: 16,
  },
  text: {
    paddingHorizontal: 24,
    fontSize: 18,
    textAlign: "center",
  },
  subtext: {
    fontSize: 18,
    textAlign: "center",
    fontFamily: "Inter", // Use the same font family as the main text
    color: "#666", // Adjust the color as needed
    marginTop: 8,
  },
});

export default GettingStartedInfo;
