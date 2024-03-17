import React, { useState, useEffect } from "react";
import { StyleSheet, StatusBar } from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";
import SplashScreen from "./src/Screens/SplashScreen";
import LoginScreen from "./src/Screens/LoginScreen";
import HomeScreen from "./src/Screens/HomeScreen";
import LoadingScreen from "./src/Screens/LoadingScreen";

import { useContext } from "react";
import { AuthContext, AuthContextProvider } from "./src/Firebase/AuthContext";

const Stack = createNativeStackNavigator();

export default function App() {
  // Baloo Thambi 2 font load
  const [loaded] = useFonts({
    Baloo: require("./assets/fonts/BalooThambi2.ttf"),
  });

  const [showSplash, setShowSplash] = useState(true);

  // const { currentUser } = useContext(AuthContext);

  // const ProtectedRoute = ({ children }) => {
  //   const navigation = useNavigation();

  //   if (!currentUser) {
  //     navigation.navigate("Login");
  //     return null;
  //   }

  //   return children;
  // };

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
    <AuthContextProvider>
      <NavigationContainer>
        <StatusBar
          translucent
          backgroundColor="transparent"
          barStyle="dark-content"
        />
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {/* {showSplash ? (
            <Stack.Screen name="Splash" component={SplashScreen} />
          ) : (
            <Stack.Screen name="Login" component={LoginScreen} />
          )} */}
          {/* <Stack.Screen
            name="HomePage"
            component={<ProtectedRoute>HomePage</ProtectedRoute>}
          /> */}
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </AuthContextProvider>
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
