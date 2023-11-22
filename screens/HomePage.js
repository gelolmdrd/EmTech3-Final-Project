import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

const HomePage = ({ navigation }) => {
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
        <View style={styles.greetingsSection}>
          <Image
            source={require("../assets/logo_flat.png")}
            style={styles.logo}
          />
          <View style={styles.userInfo}>
            <View>
              <Text style={styles.greetingText}>Good Day, Jane Doe!</Text>
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

        {/* Section for Daily Skin Log */}
        <View style={styles.dailySkinLogSection}>
          <Text style={styles.questionText}>
            Tell us how is your skin feeling today?
          </Text>
          <View style={styles.emoticonButtons}>
            {/* Add emoticon buttons here */}
            <TouchableOpacity>
              <Icon name="mood" size={40} color="#7D70BA" />
              <Text>Amazing</Text>
            </TouchableOpacity>
            {/* Add more buttons as needed */}
          </View>
        </View>

        {/* Section for Skin Health */}
        <View style={styles.skinHealthSection}>
          <Text style={styles.skinHealthText}>Skin Health</Text>
          {/* Skin Analysis Box */}
          {/* Include visual representation, progress bar, score, time, and analyze button */}
          <TouchableOpacity style={styles.analyzeButton} onPress={goToCamera}>
            <Icon name="camera-alt" size={24} color="white" />
            <Text>Analyze Skin</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Bottom Toolbar */}
      <View style={styles.bottomToolbar}>
        <TouchableOpacity>
          <Icon name="home" size={24} color="#7D70BA" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="favorite" size={24} color="#7D70BA" />
        </TouchableOpacity>
        <View>
          <TouchableOpacity onPress={goToCamera}>
            <Icon name="camera" size={24} color="white" />
          </TouchableOpacity>
        </View>
        <View style={styles.cameraIconContainer}>
          <TouchableOpacity onPress={goToCamera}>
            <Icon name="camera" size={24} color="white" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity>
          <Icon name="notifications" size={24} color="#7D70BA" />
        </TouchableOpacity>
        <TouchableOpacity onPress={goToProfile}>
          <Icon name="person" size={24} color="#7D70BA" />
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
  greetingsSection: {
    backgroundColor: "#7D70BA",
    paddingTop: 20,
    paddingBottom: 20,
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  logo: {
    width: 100,
    height: 40,
    resizeMode: "contain",
  },
  userInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  greetingText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  profileButton: {
    color: "#7D70BA",
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 4,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginLeft: 16,
  },
  dailySkinLogSection: {
    paddingHorizontal: 16,
    marginTop: 20,
  },
  questionText: {
    fontSize: 18,
    color: "#7D70BA",
    marginBottom: 10,
  },
  emoticonButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  skinHealthSection: {
    paddingHorizontal: 16,
    marginTop: 20,
  },
  skinHealthText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#7D70BA",
    marginBottom: 10,
  },
  analyzeButton: {
    backgroundColor: "#7D70BA",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  bottomToolbar: {
    flexDirection: "row",
    justifyContent: "space-around",
    borderTopWidth: 1,
    borderTopColor: "#ccc",
    paddingVertical: 24,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "white",
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
