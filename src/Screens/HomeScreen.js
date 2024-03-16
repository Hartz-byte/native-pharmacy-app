import React from "react";
import { View, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faHouseChimney,
  faBriefcase,
  faFile,
  faMessage,
} from "@fortawesome/free-solid-svg-icons";
import Home from "../Components/Home";
import NearbyPharmacy from "../Components/NearbyPharmacy";
import Briefcase from "../Components/Briefcase";
import File from "../Components/File";

const Tab = createBottomTabNavigator();

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: "#47C2C4",
          tabBarInactiveTintColor: "#3B3B3B",
          tabBarLabelStyle: {
            fontSize: 12,
          },
          tabBarStyle: {
            backgroundColor: "#D9D9D9",
            height: 57,
            borderTopLeftRadius: 15,
            borderTopRightRadius: 15,
            overflow: "hidden",
          },
          headerShown: false,
        }}
      >
        {/* home */}
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ color }) => (
              <FontAwesomeIcon
                icon={faHouseChimney}
                color={color}
                size={26}
                style={styles.tabBarIcon}
              />
            ),
            tabBarLabel: "",
          }}
        />
        {/* briefcase */}
        <Tab.Screen
          name="Briefcase"
          component={Briefcase}
          options={{
            tabBarIcon: ({ color }) => (
              <FontAwesomeIcon
                icon={faBriefcase}
                color={color}
                size={26}
                style={styles.tabBarIcon}
              />
            ),
            tabBarLabel: "",
          }}
        />
        {/* file */}
        <Tab.Screen
          name="File"
          component={File}
          options={{
            tabBarIcon: ({ color }) => (
              <FontAwesomeIcon
                icon={faFile}
                color={color}
                size={26}
                style={styles.tabBarIcon}
              />
            ),
            tabBarLabel: "",
          }}
        />
        {/* near by pharmacy */}
        <Tab.Screen
          name="Pharmacy"
          component={NearbyPharmacy}
          options={{
            tabBarIcon: ({ color }) => (
              <FontAwesomeIcon
                icon={faMessage}
                color={color}
                size={26}
                style={styles.tabBarIcon}
              />
            ),
            tabBarLabel: "",
          }}
        />
      </Tab.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    overflow: "hidden",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  tabBarIcon: {
    marginTop: 15,
  },
});

export default HomeScreen;
