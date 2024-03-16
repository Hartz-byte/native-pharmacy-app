import React, { useState } from "react";
import { View } from "react-native";
import { BottomNavigation } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import Home from "../Components/Home";
import NearbyPharmacy from "../Components/NearbyPharmacy";
import Briefcase from "../Components/Briefcase";
import File from "../Components/File";

const HomeScreen = () => {
  const [index, setIndex] = useState(0);
  const navigation = useNavigation();

  const routes = [
    { key: "home", icon: "home" },
    { key: "briefcase", icon: "briefcase" },
    { key: "file", icon: "file" },
    { key: "pharmacy", icon: "chat" },
  ];

  const renderScene = BottomNavigation.SceneMap({
    home: HomeRoute,
    briefcase: BriefcaseRoute,
    file: FileRoute,
    pharmacy: NearbyPharmacyRoute,
  });

  const handleTabPress = (newIndex) => {
    setIndex(newIndex);
  };

  return (
    <View style={{ flex: 1 }}>
      <BottomNavigation
        navigationState={{ index, routes }}
        onIndexChange={handleTabPress}
        renderScene={renderScene}
      />
    </View>
  );
};

const HomeRoute = () => <Home />;
const BriefcaseRoute = () => <Briefcase />;
const FileRoute = () => <File />;
const NearbyPharmacyRoute = () => <NearbyPharmacy />;

export default HomeScreen;
