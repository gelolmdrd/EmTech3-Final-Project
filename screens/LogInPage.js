import React from "react";
import { View, Text, TextInput, Pressable, StyleSheet } from "react-native";

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
        <Text style={styles.subtitle} onPress={goToGettingStarted}>
          x
        </Text>
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

          <View style={styles.passwordLinkContainer}>
            <Text style={styles.subtitleLinks}>Forgot your Password?</Text>
          </View>

          <Pressable style={styles.logInButton}>
            <Text style={styles.buttonText}>Log in</Text>
          </Pressable>
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
  },
  frame: {
    flex: 1,
    position: "relative",
    paddingHorizontal: 24,
    paddingBottom: 48,
  },
  fillOut: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    paddingBottom: 64,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "black",
    position: "absolute",
    right: "45%",
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: "100%",
    height: 60,
    borderColor: "#ccc",
    color: "black",
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 14,
    marginBottom: 15,
    fontSize: 16,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
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
    borderRadius: 24,
    backgroundColor: "#93867F",
    padding: 16,
    borderRadius: 30,
    alignItems: "center",
  },
  logInWithContainer: {
    alignItems: "center",
    paddingBottom: 40,
  },
  passwordLinkContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 25,
    padding: 8,
  },
});

export default LogInPage;
