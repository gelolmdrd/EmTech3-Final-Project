import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
  ImageBackground,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import * as Font from "expo-font";

const loadFonts = async () => {
  await Font.loadAsync({
    Inter: require("../assets/fonts/Inter-Regular.ttf"),
  });
};

const HomePage = ({ navigation }) => {
  const goToHome = () => {
    navigation.navigate("Home");
  };
  const goToProfile = () => {
    navigation.navigate("Profile");
  };

  const goToCamera = () => {
    // Add navigation logic to open the camera for skin analysis
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        {/* Section for Greetings and User Info */}
        <View style={styles.headerSection}>
          <ImageBackground
            source={require("../assets/info-bg.png")}
            style={styles.infoImage}
          >
            <View style={styles.greetingsSection}>
              <Image
                source={require("../assets/logo_flat.png")}
                style={styles.logo}
              />
              <View style={styles.userInfo}>
                <View>
                  <Text style={styles.greetingText}>Good Day!</Text>
                </View>
              </View>
            </View>
          </ImageBackground>
        </View>

        <View style={styles.skinProblemSection}>
          <TouchableOpacity style={styles.skinProblemButtons}>
            <Image
              source={require("../assets/Blackheads-button.png")}
              style={styles.skinButton}
            />
            <Text style={styles.recommenderText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.skinProblemButtons}>
            <Image
              source={require("../assets/DarkSpots-button.png")}
              style={styles.skinButton}
            />
            <Text style={styles.recommenderText}>Lorem Ipsum </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.skinProblemButtons}>
            <Image
              source={require("../assets/Nodules-button.png")}
              style={styles.skinButton}
            />
            <Text style={styles.recommenderText}>Lorem Ipsum </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.skinProblemButtons}>
            <Image
              source={require("../assets/Papules-button.png")}
              style={styles.skinButton}
            />
            <Text style={styles.recommenderText}>Lorem Ipsum </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.skinProblemButtons}>
            <Image
              source={require("../assets/Pustules-button.png")}
              style={styles.skinButton}
            />
            <Text style={styles.recommenderText}>Lorem Ipsum </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.skinProblemButtons}>
            <Image
              source={require("../assets/Whiteheads-button.png")}
              style={styles.skinButton}
            />
            <Text style={styles.recommenderText}>Lorem Ipsum </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.Gap}></View>
      </ScrollView>

      {/* Bottom Toolbar */}
      <View style={styles.bottomToolbar}>
        <TouchableOpacity onPress={goToHome}>
          <Image
            source={require("../assets/icons/home-icon.png")}
            style={styles.toolbarIcons}
          />
        </TouchableOpacity>
        <View>
          <TouchableOpacity onPress={goToCamera}>
            <Icon name="camera" size={24} color="white" />
          </TouchableOpacity>
        </View>
        <View style={styles.cameraIconContainer}>
          <TouchableOpacity onPress={goToCamera}>
            <Image
              source={require("../assets/icons/camera-icon.png")}
              style={styles.toolbarIcons}
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={goToProfile}>
          <Image
            source={require("../assets/icons/user-icon.png")}
            style={styles.toolbarIcons}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  headerSection: {
    borderBottomLeftRadius: 20,
  },
  infoImage: {
    flex: 1,
    resizeMode: "contain",
    alignItems: "center",
    justifyContent: "center",
  },
  greetingsSection: {
    flex: 1,
    paddingTop: 20,
    paddingBottom: 20,
    paddingHorizontal: 16,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 201,
    resizeMode: "contain",
  },
  icons: {
    height: 18,
    width: 18,
  },
  userInfo: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  greetingText: {
    color: "white",
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
    paddingVertical: 10,
  },
  skinProblemSection: {
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 50,
    marginBottom: 100,
    gap: 15,
  },
  skinProblemButtons: {
    flexDirection: "row",
    alignItems: "center",
    zindex: 1,
    elevation: 4,
    borderRadius: 14,
  },
  recommenderText: {
    position: "absolute",
    left: "32%",
    width: 250,
    maxWidth: "50%",
    textAlign: "center",
  },
  toolbarIcons: {
    height: 22,
    width: 22,
  },
  bottomToolbar: {
    flexDirection: "row",
    justifyContent: "center",
    borderTopColor: "#ccc",
    paddingVertical: 24,
    position: "absolute",
    shadowOffset: { width: 0, height: 45 },
    elevation: 4,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "white",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    gap: 100,
  },
  cameraIconContainer: {
    backgroundColor: "#7D70BA",
    borderRadius: 30,
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 12, // Adjust this value to control the overlap
    left: "50%", // Center the icon horizontally
    marginLeft: -20, // Adjust this value to center the icon properly
  },
});

export default HomePage;
