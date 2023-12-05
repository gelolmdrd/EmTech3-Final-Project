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

const Profile = ({ navigation }) => {
  const goToHome = () => {
    navigation.navigate("Home");
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
                  <Text style={styles.greetingText}>Good Day, Jane!</Text>
                  <TouchableOpacity onPress={goToProfile}>
                    <Text style={styles.profileButton}>My Profile</Text>
                  </TouchableOpacity>
                </View>
                <Image
                  source={require("../assets/user.png")}
                  style={styles.avatar}
                />
              </View>
            </View>
          </ImageBackground>
        </View>

        {/* Section for Daily Skin Log */}
        <View style={styles.dailySkinLogSection}>
          <ImageBackground
            source={require("../assets/skin-log.png")}
            style={styles.skinLogBG}
          >
            <View style={styles.ellipseShape} />
            <View style={styles.dailySkinLogContent}>
              <View style={styles.dailySkinLogTitle}>
                <Image
                  source={require("../assets/icons/date-icon.png")}
                  style={styles.icons}
                />
                <Text style={styles.logTitleText}>Daily Skin Log</Text>
              </View>
              <Text style={styles.questionText}>
                Tell us how is your skin feeling today?
              </Text>
              <View style={styles.emoticonButtons}>
                {/* Add emoticon buttons here */}
                <TouchableOpacity style={styles.moodButton}>
                  <Icon name="mood" size={24} color="#7D70BA" />
                  <Text>Amazing</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.moodButton}>
                  <Icon name="mood" size={24} color="#7D70BA" />
                  <Text>Amazing</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.moodButton}>
                  <Icon name="mood" size={24} color="#7D70BA" />
                  <Text>Amazing</Text>
                </TouchableOpacity>

                {/* Add more buttons as needed */}
              </View>
            </View>
          </ImageBackground>
        </View>

        {/* Section for Skin Health */}
        <View style={styles.skinHealthSection}>
          <Text style={styles.skinHealthText}>Skin Health</Text>
          {/* Skin Analysis Box */}
          {/* Include visual representation, progress bar, score, time, and analyze button */}
          <TouchableOpacity style={styles.analyzeButton} onPress={goToCamera}>
            <Icon name="camera-alt" size={24} color="#7D70BA" />
            <Text>Analyze Skin</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Bottom Toolbar */}
      <View style={styles.bottomToolbar}>
        <TouchableOpacity>
          <Image
            source={require("../assets/icons/home-icon.png")}
            style={styles.toolbarIcons}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require("../assets/icons/heart-icon.png")}
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
        <TouchableOpacity>
          <Image
            source={require("../assets/icons/notifs-icon.png")}
            style={styles.toolbarIcons}
          />
        </TouchableOpacity>
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
  profileButton: {
    color: "#7D70BA",
    backgroundColor: "rgba(128,128,128, 0.3)",
    textAlign: "center",
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 4,
    padding: 10,
    borderRadius: 15,
    zIndex: 1,
    width: 150,
  },
  avatar: {
    width: 160,
    height: 160,
    borderRadius: 20,
    marginLeft: 0,
    right: -50,
    bottom: -5,
  },
  dailySkinLogSection: {
    overflow: "hidden",
    height: 283,
    marginVertical: 20,
    marginHorizontal: 25,
    borderRadius: 15,
    elevation: 4,
  },
  skinLogBG: {
    flex: 1,
    resizeMode: "contain",
    alignItems: "center",
    justifyContent: "center",
  },
  ellipseShape: {
    paddingHorizontal: 0,
    backgroundColor: "white",
    width: 250,
    height: 250,
    borderRadius: 125,
    transform: [{ scaleX: 2 }],
    zIndex: 0,
    top: 100,
  },
  dailySkinLogContent: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1,
    bottom: 80,
  },
  dailySkinLogTitle: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginBottom: 12,
  },
  logTitleText: {
    color: "#7D70BA",
    fontSize: 16,
    fontWeight: "bold",
  },
  questionText: {
    fontSize: 18,
    paddingHorizontal: 45,
    fontFamily: "Inter",
    fontWeight: "400",
    textAlign: "center",
    justifyContent: "center",
    zIndex: 1,
    height: 80,
  },
  emoticonButtons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 15,
  },
  moodButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "rgba(128,128,128,0.25)",
    height: 40,
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 15,
    gap: 5,
  },
  skinHealthSection: {
    flex: 1,
    backgroundColor: "white",
    paddingVertical: 14,
    paddingHorizontal: 16,
    marginTop: 20,
    margin: 25,
    borderRadius: 14,
    elevation: 4,
    justifyContent: "center",
  },
  skinHealthText: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  analyzeButton: {
    backgroundColor: "white",
    elevation: 3,
    marginHorizontal: 50,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    flexDirection: "row",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
  },
  toolbarIcons: {
    height: 22,
    width: 22,
  },
  bottomToolbar: {
    flexDirection: "row",
    justifyContent: "space-around",
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

export default Profile;
