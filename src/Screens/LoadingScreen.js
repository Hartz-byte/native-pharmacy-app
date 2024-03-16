import React, { useRef, useEffect } from "react";
import { View, Animated, StyleSheet } from "react-native";
import Loader from "../../assets/Icons/Loader.png";

const LoadingScreen = () => {
  const rotateAnim = useRef(new Animated.Value(0)).current;

  // useEffect for the animation
  useEffect(() => {
    Animated.loop(
      Animated.timing(rotateAnim, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true,
      })
    ).start();
  }, [rotateAnim]);

  // animation variable
  const spin = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  return (
    <View style={styles.container}>
      <Animated.Image
        source={Loader}
        style={[styles.loader, { transform: [{ rotateX: spin }] }]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loader: {
    width: 80,
    height: 80,
  },
});

export default LoadingScreen;
