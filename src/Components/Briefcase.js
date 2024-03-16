import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Briefcase = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Briefcase</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 30,
    color: "#47C2C4",
  },
});

export default Briefcase;
