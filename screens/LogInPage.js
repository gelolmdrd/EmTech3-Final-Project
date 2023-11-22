import React from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

const LogInPage = ({ navigation }) => {
  const goToGettingStarted = () => {
    navigation.navigate("GettingStarted");
  };
  const goToSignUp = () => {
    navigation.navigate("SignUp");
  };

  return (
    <View style={styles.container}>
      <View style={styles.navigationBar}>
        <TouchableOpacity style={styles.subtitle} onPress={goToGettingStarted}>
          <Icon name="close" size={20} color="#BDBDBD" />
        </TouchableOpacity>
        <Text style={styles.title}>Log In</Text>
        <Text style={styles.subtitleLinks} onPress={goToSignUp}>
          Sign Up
        </Text>
      </View>
      <View style={styles.frame}>
        <View style={styles.fillOut}>
          <TextInput style={styles.input} placeholder="Email" />
          <TextInput
            style={styles.input}
            secureTextEntry={true}
            placeholder="Password"
          />

          <Pressable style={styles.logInButton}>
            <Text style={styles.buttonText}>Log in</Text>
          </Pressable>
          <View style={styles.passwordLinkContainer}>
            <Text style={styles.subtitleLinks}>Forgot your Password?</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  navigationBar: {
    flex: 1,
    flexDirection: "row",
    maxHeight: "10%",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 24,
    backgroundColor: "#fff",
    zIndex: 1,
  },
  frame: {
    flex: 1,
    position: "relative",
    paddingHorizontal: 40,
    paddingTop: 20,
    paddingBottom: 100, // Adjust the paddingBottom to provide space for the button
  },
  fillOut: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "black",
    position: "absolute",
    left: 0,
    right: 0,
    textAlign: "center",
    zIndex: -1,
  },
  input: {
    width: "100%",
    height: 50,
    borderColor: "#ccc",
    color: "black",
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 14,
    marginBottom: 15,
    fontSize: 14,
    backgroundColor: "#F6F6F6",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 16,
    color: "#BDBDBD",
    fontWeight: "bold",
    padding: 6,
  },
  subtitleLinks: {
    fontSize: 16,
    color: "#7D70BA",
    fontWeight: "bold",
  },
  logInButton: {
    backgroundColor: "#93867F",
    paddingVertical: 12,
    borderRadius: 40,
    marginTop: 20,
    alignItems: "center",
  },
  passwordLinkContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 15,
  },
});

export default LogInPage;
