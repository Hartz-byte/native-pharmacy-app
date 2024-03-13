import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { TextInput, Provider } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialIcons";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);

  // Email validation logic
  const handleEmailChange = (text) => {
    setEmail(text);
    setIsValidEmail(validateEmail(text));
  };

  // Email validation
  const validateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  return (
    <Provider>
      <View style={styles.container}>
        <Text style={styles.loginText}>LOGIN</Text>
        <Text style={styles.healthcareText}>Healthcare</Text>

        {/* email input field */}
        <TextInput
          label="Email Id"
          mode="outlined"
          style={styles.emailInput}
          keyboardType="email-address"
          value={email}
          onChangeText={handleEmailChange}
          theme={{
            colors: {
              primary: "#000000",
              placeholder: "#000000",
            },
            roundness: 10,
          }}
          // left={<TextInput.Icon name="email" />}
        />
        {!isValidEmail && (
          <Text style={styles.errorText}>
            Please enter a valid email address
          </Text>
        )}

        {/* password input field */}
        <TextInput
          label="Password"
          mode="outlined"
          style={styles.passInput}
          secureTextEntry={true}
          theme={{
            colors: {
              primary: "#000000",
              placeholder: "#000000",
            },
            roundness: 10,
          }}
          // left={<TextInput.Icon name="lock" />}
        />

        {/* Forgot password text */}
        <TouchableOpacity
          style={styles.forgotPasswordContainer}
          onPress={() => console.log("Forgot password clicked")}
        >
          <Text style={styles.forgotPasswordText}>Forgot Password !</Text>
        </TouchableOpacity>

        {/* Register text */}
        <View style={styles.registerContainer}>
          <Text style={styles.accountText}>Don't Have an Account : </Text>
          <TouchableOpacity onPress={() => console.log("Register clicked")}>
            <Text style={styles.registerLinkText}>Click here to register</Text>
          </TouchableOpacity>
        </View>

        {/* Login button */}
        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 45,
  },
  loginText: {
    fontFamily: "Baloo",
    fontWeight: "500",
    fontSize: 24,
    lineHeight: 37.54,
  },
  healthcareText: {
    marginTop: 100,
    fontFamily: "Baloo",
    fontWeight: "500",
    fontSize: 50,
    lineHeight: 78.2,
  },
  emailInput: {
    width: 394,
    height: 68,
    marginTop: 70,
  },
  errorText: {
    color: "red",
    marginTop: 5,
  },
  passInput: {
    width: 394,
    height: 68,
    marginTop: 40,
  },
  forgotPasswordContainer: {
    alignSelf: "flex-end",
    marginTop: 20,
  },
  forgotPasswordText: {
    color: "#04238E",
    fontFamily: "Baloo",
    fontWeight: "500",
    fontSize: 16,
    lineHeight: 25.02,
  },
  registerContainer: {
    marginTop: 30,
    flexDirection: "row",
  },
  accountText: {
    fontFamily: "Baloo",
    fontWeight: "500",
    fontSize: 16,
    lineHeight: 25.02,
  },
  registerLinkText: {
    color: "#04238E",
    fontFamily: "Baloo",
    fontWeight: "500",
    fontSize: 16,
    lineHeight: 25.02,
  },
  loginButton: {
    width: 394,
    height: 66,
    backgroundColor: "#5391B4",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 100,
  },
  loginButtonText: {
    fontFamily: "Baloo",
    fontWeight: "500",
    fontSize: 28,
    lineHeight: 43.79,
    color: "white",
  },
});

export default LoginPage;
