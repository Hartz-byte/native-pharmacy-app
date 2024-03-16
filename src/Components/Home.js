import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faBars, faMicrophone } from "@fortawesome/free-solid-svg-icons";
import Logo from "../../assets/Icons/Logo.png";
import Questions from "../../assets/Icons/Questions.png";
import Messages from "../../assets/Icons/Messages.png";
import Calendar from "../../assets/Icons/Calendar.png";
import Reminders from "../../assets/Icons/Reminders.png";

const Home = () => {
  return (
    <View style={styles.mainContainer}>
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
            <FontAwesomeIcon icon={faMicrophone} size={23} />
          </View>
        </TouchableOpacity>
      </View>

      {/* block buttons */}
      <View style={styles.btnContainer}>
        {/* questions and reminders */}
        <View style={styles.rowStyle}>
          {/* questions btn */}
          <TouchableOpacity>
            <View style={styles.outline}>
              <Text style={styles.btnText}>Questions</Text>
              <Image source={Questions} />
            </View>
          </TouchableOpacity>

          {/* reminders btn */}
          <TouchableOpacity>
            <View style={styles.outline}>
              <Text style={styles.btnText}>Reminders</Text>
              <Image source={Reminders} />
            </View>
          </TouchableOpacity>
        </View>

        {/* messages and calendar */}
        <View style={[styles.rowStyle, { marginTop: 20 }]}>
          {/* messages btn */}
          <TouchableOpacity>
            <View style={styles.outline}>
              <Text style={styles.btnText}>Messages</Text>
              <Image source={Messages} />
            </View>
          </TouchableOpacity>

          {/* calendar btn */}
          <TouchableOpacity>
            <View style={styles.outline}>
              <Text style={styles.btnText}>Calendar</Text>
              <Image source={Calendar} />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "white",
    height: "100%",
    paddingTop: 70,
    paddingLeft: 20,
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
    padding: 8,
  },
  mainFlex: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingRight: 20,
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
    paddingRight: 20,
  },
  btnContainer: {
    marginTop: 40,
  },
});

export default Home;
