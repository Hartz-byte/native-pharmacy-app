import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faBars, faMicrophone } from "@fortawesome/free-solid-svg-icons";
import Logo from "../../assets/Icons/Logo.png";
import Questions from "../../assets/Icons/Questions.png";
import Messages from "../../assets/Icons/Messages.png";
import Calendar from "../../assets/Icons/Calendar.png";
import Reminders from "../../assets/Icons/Reminders.png";
import Character from "../../assets/Icons/Character.png";
import Vitamins from "../../assets/Icons/Vitamins.png";

const Home = () => {
  return (
    <SafeAreaView style={{ backgroundColor: "white" }}>
      <ScrollView style={styles.mainContainer}>
        {/* top icons and logo */}
        <View style={styles.mainFlex}>
          <View style={styles.subFlex}>
            {/* bar icon */}
            <TouchableOpacity>
              <FontAwesomeIcon icon={faBars} size={33} />
            </TouchableOpacity>

            {/* logo */}
            <Image source={Logo} />
          </View>

          {/* microphone icon */}
          <TouchableOpacity>
            <View style={styles.microphoneContainer}>
              <FontAwesomeIcon icon={faMicrophone} size={20} />
            </View>
          </TouchableOpacity>
        </View>

        {/* grid buttons */}
        <View style={styles.btnContainer}>
          {/* questions and reminders */}
          <View style={styles.rowStyle}>
            {/* questions btn */}
            <TouchableOpacity style={styles.outline}>
              <Text style={styles.btnText}>Questions</Text>
              <Image source={Questions} />
            </TouchableOpacity>

            {/* reminders btn */}
            <TouchableOpacity style={styles.outline}>
              <Text style={styles.btnText}>Reminders</Text>
              <Image source={Reminders} />
            </TouchableOpacity>
          </View>

          {/* messages and calendar */}
          <View style={[styles.rowStyle, { marginTop: 20 }]}>
            {/* messages btn */}
            <TouchableOpacity style={styles.outline}>
              <Text style={styles.btnText}>Messages</Text>
              <Image source={Messages} />
            </TouchableOpacity>

            {/* calendar btn */}
            <TouchableOpacity style={styles.outline}>
              <Text style={styles.btnText}>Calendar</Text>
              <Image source={Calendar} />
            </TouchableOpacity>
          </View>
        </View>

        {/* text */}
        <View style={styles.btnContainer}>
          <Text style={[styles.btnText, { fontWeight: "700" }]}>
            UPLOAD PRESCRIPTION
          </Text>
          <Text style={styles.lineText}>
            Upload a Prescription and Tell Us What you Need. We do the Rest. !
          </Text>
        </View>

        {/* offer text and order now btn */}
        <View
          style={[
            styles.subFlex,
            { width: "100%", marginTop: 20, paddingLeft: 20 },
          ]}
        >
          {/* offer text */}
          <Text
            style={[
              styles.btnText,
              { fontWeight: "700", fontSize: 14, lineHeight: 21.9 },
            ]}
          >
            Flat 25% OFF ON{"\n"}MEDICINES
          </Text>

          {/* order now btn */}
          <TouchableOpacity style={styles.orderBtn}>
            <Text
              style={[styles.btnText, { color: "white", fontWeight: "700" }]}
            >
              ORDER NOW
            </Text>
          </TouchableOpacity>
        </View>

        {/* back design box */}
        <View style={styles.designBox} />

        {/* green box */}
        <View style={styles.greenBox}>
          {/* text view */}
          <View>
            <View style={{ width: 150 }}>
              <Text style={[styles.btnText, { fontWeight: "700" }]}>
                Get the Best Medical Service
              </Text>
            </View>
            <View style={{ width: 255, marginTop: 5 }}>
              <Text style={styles.greenText}>
                Rem illum facere quo corporis Quis in saepe itaque ut quos
                pariatur. Qui numquam rerum hic repudiandae rerum id amet
                tempore nam molestias omnis qui earum voluptatem!
              </Text>
            </View>
          </View>

          {/* character image */}
          <View style={styles.image}>
            <Image source={Character} />
          </View>
        </View>

        {/* purple box */}
        <View style={styles.purpleBox}>
          {/* text and button */}
          <View>
            {/* upto text */}
            <Text style={styles.uptoText}>UPTO</Text>

            <View style={{ marginLeft: 25, marginTop: -49 }}>
              <Text style={styles.perText}>80 %</Text>
              <Text style={styles.offerText}>offer</Text>
            </View>

            <Text style={styles.healthText}>On Health Products</Text>

            {/* shop now button */}
            <TouchableOpacity style={styles.showButton}>
              <Text
                style={[styles.btnText, { color: "white", fontWeight: "700" }]}
              >
                SHOP NOW
              </Text>
            </TouchableOpacity>
          </View>

          {/* vitamins image */}
          <View style={styles.image}>
            <Image source={Vitamins} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "white",
    paddingTop: 10,
    paddingRight: 20,
  },
  subFlex: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "27%",
  },
  microphoneContainer: {
    width: 44,
    height: 44,
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 22,
    padding: 10,
  },
  mainFlex: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingLeft: 20,
  },
  outline: {
    borderWidth: 1,
    borderColor: "#6C6060",
    width: 177,
    height: 52,
    borderRadius: 10,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    paddingLeft: 10,
    paddingRight: 10,
  },
  btnText: {
    fontFamily: "Baloo",
    fontSize: 20,
    fontWeight: "500",
    lineHeight: 31.28,
  },
  rowStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  btnContainer: {
    marginTop: 40,
    paddingLeft: 20,
  },
  lineText: {
    fontFamily: "Baloo",
    fontSize: 14,
    fontWeight: "600",
    marginTop: 5,
    paddingRight: 50,
  },
  orderBtn: {
    width: 159,
    height: 44,
    borderRadius: 10,
    backgroundColor: "#1C82DF",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 8,
    marginRight: 40,
  },
  designBox: {
    width: 385,
    height: 178,
    backgroundColor: "#F5E1E9",
    borderRadius: 15,
    position: "absolute",
    zIndex: -10,
    left: -197,
    top: 500,
  },
  greenBox: {
    width: 372,
    height: 178,
    borderRadius: 15,
    backgroundColor: "#C8F5C4",
    marginLeft: 20,
    marginTop: 40,
    padding: 15,
    flexDirection: "row",
  },
  purpleBox: {
    width: 372,
    height: 178,
    borderRadius: 15,
    backgroundColor: "#D7D0FF",
    marginLeft: 20,
    marginTop: 20,
    marginBottom: 100,
    padding: 15,
    flexDirection: "row",
  },
  greenText: {
    fontFamily: "Baloo",
    fontSize: 12,
    fontWeight: "700",
    lineHeight: 18.77,
    textAlign: "justify",
  },
  uptoText: {
    transform: [{ rotate: "-90deg" }],
    left: -64,
    top: -30,
    fontFamily: "Baloo",
    fontWeight: "700",
    fontSize: 20,
    lineHeight: 31.28,
    textAlign: "justify",
  },
  perText: {
    fontFamily: "Baloo",
    fontWeight: "700",
    fontSize: 40,
    lineHeight: 62.56,
    textAlign: "justify",
  },
  offerText: {
    fontFamily: "Baloo",
    fontWeight: "700",
    fontSize: 20,
    lineHeight: 31.23,
    textAlign: "justify",
    top: -10,
  },
  healthText: {
    fontFamily: "Baloo",
    fontWeight: "700",
    fontSize: 16,
    lineHeight: 25.02,
    textAlign: "justify",
    top: -8,
    left: 10,
  },
  showButton: {
    width: 137,
    height: 38,
    borderRadius: 10,
    backgroundColor: "#1C82DF",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 8,
    left: 10,
  },
  image: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-end",
  },
});

export default Home;
