// SignUpPage.js
import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  StyleSheet,
} from "react-native";
import { CheckBox } from "react-native-elements";

const SignUpPage = ({ navigation }) => {
  const [isChecked, setChecked] = useState(false);

  const goToSignUp = () => {
    navigation.navigate("SignUp");
  };

  const goToLogin = () => {
    navigation.navigate("Login");
  };

  return (
    <View style={styles.container}>
      <View style={styles.navigationBar}>
        <Text style={styles.subtitle}>x</Text>
        <Text style={styles.title}>Log In</Text>
        <Text style={styles.subtitleLinks} onPress={goToSignUp}>
          Sign Up
        </Text>
      </View>
      <View style={styles.formContainer}>
        <Text style={styles.label}>Full Name</Text>
        <TextInput style={styles.input} placeholder="Full Name" />

        <Text style={styles.label}>Age</Text>
        <TextInput style={styles.input} placeholder="age" />

        <Text style={styles.label}>Email Address</Text>
        <TextInput style={styles.input} placeholder="username@email.com" />

        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          secureTextEntry
        />

        <Text style={styles.label}>Confirm Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Confirm your password"
          secureTextEntry
        />
        <View style={styles.pressableContainer}>
          <CheckBox
            title="By signing up you accept the Terms of service and Privacy Policy"
            checked={isChecked}
            onPress={() => setChecked(!isChecked)}
            containerStyle={styles.checkboxContainer}
            textStyle={styles.checkboxText}
          />

          <TouchableOpacity style={styles.signUpButton}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
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

  formContainer: {
    flex: 1,
    paddingHorizontal: 40,
    paddingTop: 60,
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
  label: {
    fontSize: 14,
    color: "#7D70BA",
    paddingTop: 5,
    fontWeight: "bold",
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
  },
  signUpButton: {
    backgroundColor: "#93867F",
    paddingVertical: 12,
    borderRadius: 40,
    marginTop: 20,
    alignItems: "center",
    bottom: "3%",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  checkboxContainer: {
    backgroundColor: "transparent",
    borderWidth: 0,
    marginLeft: 0,
    paddingHorizontal: 0,
  },
  checkboxText: {
    fontSize: 12,
    fontWeight: "normal",
  },
});

export default SignUpPage;
