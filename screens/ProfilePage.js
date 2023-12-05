import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
  ImageBackground,
  Pressable,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import * as Font from "expo-font";

const loadFonts = async () => {
  await Font.loadAsync({
    Inter: require("../assets/fonts/Inter-Regular.ttf"),
  });
};

const ProfilePage = ({ navigation }) => {
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
            </View>
          </ImageBackground>
        </View>
        <View style={styles.appContent}>
          <View style={styles.profileSection}>
            <Text style={styles.profileHeader}>Profile</Text>
            <View style={styles.profileContent}>
              <View style={styles.profileInfo}>
                <Text>Name:</Text>
                <Text>Your Name</Text>
              </View>
              <View style={styles.profileInfo}>
                <Text>Gender:</Text>
                <Text>Your Gender</Text>
              </View>
              <View style={styles.profileInfo}>
                <Text>Age:</Text>
                <Text>Your Age</Text>
              </View>
              <View style={styles.profileInfo}>
                <Text>Email:</Text>
                <Text>Your Email</Text>
              </View>
            </View>
          </View>
          <Pressable style={styles.logOutButton}>
            <Text style={styles.buttonText} onPress={goToHome}>
              Log out
            </Text>
          </Pressable>
        </View>
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
  appContent: {
    padding: 50,
    paddingBottom: 100,
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
  },
  profileSection: {
    gap: 10,
    height: 400,
  },
  profileHeader: {
    fontSize: 24,
    fontWeight: "bold",
  },
  profileContent: {
    flex: 1,
    gap: 10,
    padding: 15,
  },
  profileInfo: {
    flexDirection: "row",
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 8,
    backgroundColor: "#F2F2F2",
    gap: 12,
    overflow: "hidden",
  },
  logOutButton: {
    backgroundColor: "#93867F",
    paddingVertical: 12,
    borderRadius: 40,
    alignItems: "center",
    zIndex: 9,
    top: "20%", // Adjust this value to control the vertical position
    alignSelf: "center", // Center the button horizontally
    width: 250,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
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

export default ProfilePage;
