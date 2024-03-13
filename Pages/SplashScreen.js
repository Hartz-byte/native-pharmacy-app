import React, { useRef, useEffect } from "react";
import { View, Text, StyleSheet, Animated, Easing } from "react-native";

const SplashScreen = () => {
  // animation large scale value
  const scaleValue = useRef(new Animated.Value(1.5)).current;

  // useEffect for animation
  useEffect(() => {
    Animated.timing(scaleValue, {
      toValue: 1,
      duration: 2000,
      easing: Easing.out(Easing.ease),
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View
        style={[styles.circle, { transform: [{ scale: scaleValue }] }]}
      >
        <Text style={styles.text}>Healthcare</Text>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  circle: {
    width: 271,
    height: 272,
    borderRadius: 200,
    backgroundColor: "#5391B4",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 50,
    fontWeight: "500",
    color: "#fff",
    fontFamily: "Baloo",
  },
});

export default SplashScreen;
