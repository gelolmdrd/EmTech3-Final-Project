import React, { useState } from "react";
import {
  View,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { CheckBox } from "react-native-elements";
import Icon from "react-native-vector-icons/MaterialIcons";
import { Picker } from "@react-native-picker/picker";

const SignUpPage = ({ navigation }) => {
  const [isChecked1, setChecked1] = useState(false);
  const [isChecked2, setChecked2] = useState(false);
  const [selectedSkinType, setSelectedSkinType] = useState("Select Skin Type");
  const [selectedSkinConcern, setSelectedSkinConcern] = useState(
    "Select Skin Concern"
  );

  const goToHome = () => navigation.navigate("Home");
  const goToGettingStarted = () => navigation.navigate("GettingStarted");
  const goToLogin = () => navigation.navigate("LogIn");

  return (
    <View style={styles.container}>
      <View style={styles.navigationBar}>
        <TouchableOpacity style={styles.subtitle} onPress={goToGettingStarted}>
          <Icon name="close" size={20} color="#BDBDBD" />
        </TouchableOpacity>
        <Text style={styles.title}>Sign Up</Text>
        <Text style={styles.subtitleLinks} onPress={goToLogin}>
          Log In
        </Text>
      </View>
      <ScrollView
        style={styles.formContainer}
        showsVerticalScrollIndicator={false}
      >
        <FormSection label="Personal Information">
          <FormField label="Full Name" placeholder="Full Name" />
          <FormField
            label="Age"
            placeholder="Enter your age"
            keyboardType="numeric"
          />
          <FormField
            label="Email Address"
            placeholder="username@email.com"
            keyboardType="email-address"
          />
          <FormField
            label="Password"
            placeholder="Enter your password"
            secureTextEntry
          />
          <FormField
            label="Confirm Password"
            placeholder="Confirm your password"
            secureTextEntry
          />
        </FormSection>

        <FormSection label="Skin Information">
          <PickerField
            label="Skin Type"
            selectedValue={selectedSkinType}
            onValueChange={(value) => setSelectedSkinType(value)}
            items={[
              { label: "Select Skin Type", color: "#BDBDBD", value: "" },
              { label: "Normal", value: "Normal" },
              { label: "Dry", value: "Dry" },
              { label: "Sensitive", value: "Sensitive" },
              { label: "Oily", value: "Oily" },
              { label: "Combination", value: "Combination" },
            ]}
          />
          <PickerField
            label="Skin Concern"
            selectedValue={selectedSkinConcern}
            onValueChange={(value) => setSelectedSkinConcern(value)}
            items={[
              { label: "Select Skin Concern", color: "#BDBDBD", value: "" },
              { label: "Acne-Care", value: "Acne-Care" },
              { label: "Anti-ageing", value: "Anti-ageing" },
              { label: "Brightening", value: "Brightening" },
              { label: "Pore-Care", value: "Pore-Care" },
              { label: "Soothing", value: "Soothing" },
              { label: "Hyperpigmentation", value: "Hyperpigmentation" },
            ]}
          />
        </FormSection>

        <View style={styles.pressableContainer}>
          <CheckBoxField
            title="By signing up you accept the Terms of service and Privacy Policy"
            checked={isChecked1}
            onPress={() => setChecked1(!isChecked1)}
          />
          <CheckBoxField
            title="I would like to receive your newsletter and other promotional information."
            checked={isChecked2}
            onPress={() => setChecked2(!isChecked2)}
          />
          <TouchableOpacity style={styles.signUpButton} onPress={goToHome}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.bumpContainer}></View>
      </ScrollView>
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
    maxHeight: "10%", // Set to 10% of the screen height
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 24,
    backgroundColor: "#fff",
    zIndex: 1,
  },

  formContainer: {
    flex: 1,
    paddingHorizontal: 40,
    paddingTop: 20,
    paddingBottom: 100, // Adjust the paddingBottom to provide space for the button
  },
  pressableContainer: {
    flexGrow: 1,
    justifyContent: "flex-end", // Align the content to the bottom
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
  headingLabel: {
    fontSize: 16,
    color: "#666666",
    marginBottom: 15,
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
    backgroundColor: "#F6F6F6",
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: "#BDBDBD",
    borderRadius: 16,
    padding: 15,
    marginBottom: 20,
  },

  picker: {
    height: 50,
    width: "100%",
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
  },
  checkbox: {
    margin: 0,
    padding: 0,
  },
  checkboxText: {
    fontSize: 12,
    fontWeight: "normal",
  },
  bumpContainer: {
    height: 50,
  },
});

const FormSection = ({ label, children }) => (
  <View style={styles.inputContainer}>
    <Text style={styles.headingLabel}>{label}</Text>
    {children}
  </View>
);

const FormField = ({ label, placeholder, keyboardType, secureTextEntry }) => (
  <>
    <Text style={styles.label}>{label}</Text>
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      keyboardType={keyboardType}
      secureTextEntry={secureTextEntry}
    />
  </>
);

const PickerField = ({ label, selectedValue, onValueChange, items }) => (
  <>
    <Text style={styles.label}>{label}</Text>
    <Picker
      selectedValue={selectedValue}
      onValueChange={onValueChange}
      style={styles.picker}
    >
      {items.map((item) => (
        <Picker.Item
          key={item.value}
          label={item.label}
          color={item.color}
          value={item.value}
        />
      ))}
    </Picker>
  </>
);

const CheckBoxField = ({ title, checked, onPress }) => (
  <CheckBox
    title={title}
    checked={checked}
    onPress={onPress}
    containerStyle={styles.checkbox}
    textStyle={styles.checkboxText}
  />
);

export default SignUpPage;
