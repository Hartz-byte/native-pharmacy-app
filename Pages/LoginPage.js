import React from "react";
import { View, StyleSheet, Text } from "react-native";

const LoginPage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.loginText}>LOGIN</Text>
      <Text style={styles.healthcareText}>Healthcare</Text>
    </View>
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
    marginTop: 128,
    fontFamily: "Baloo",
    fontWeight: "500",
    fontSize: 50,
    lineHeight: 78.2,
  },
});

export default LoginPage;
