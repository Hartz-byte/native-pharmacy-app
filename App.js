import React, { useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { useFonts } from "expo-font";
import SplashScreen from "./Pages/SplashScreen";
import LoginPage from "./Pages/LoginPage";

export default function App() {
  // Baloo Thambi 2 font load
  const [loaded] = useFonts({
    Baloo: require("./assets/fonts/BalooThambi2.ttf"),
  });

  const [showSplash, setShowSplash] = useState(true);

  // setting timer for the splash screen
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      {showSplash ? <SplashScreen /> : <LoginPage />}
      {/* <SplashScreen /> */}
      {/* <LoginPage /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
