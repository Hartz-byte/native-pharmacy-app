import React, { useState, useEffect } from "react";
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
import {
  faArrowLeftLong,
  faLocationDot,
  faStar,
  faArrowUpFromBracket,
  faLink,
} from "@fortawesome/free-solid-svg-icons";
import * as ImagePicker from "expo-image-picker";
import Pic1 from "../../assets/Icons/Pic1.png";
import Pic2 from "../../assets/Icons/Pic2.png";

const NearbyPharmacy = () => {
  const [image, setImage] = useState(null);

  const handleUpload = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: false,
        quality: 1,
      });

      if (!result.cancelled) {
        setImage(result.uri);
        const data = new FormData();
        data.append("file", {
          uri: result.uri,
          type: "image/jpeg",
          name: "image.jpg",
        });
        data.append("upload_preset", "pharmacyApp");
        data.append("cloud_name", "dg7ecqj6l");

        const response = await fetch(
          "https://api.cloudinary.com/v1_1/dg7ecqj6l/image/upload",
          {
            method: "POST",
            body: data,
          }
        );

        if (!response.ok) {
          throw new Error("Failed to upload image");
        }

        const responseData = await response.json();
        console.log(responseData);
      }
    } catch (error) {
      console.error("Error uploading image:", error.message);
    }
  };

  return (
    <SafeAreaView style={{ backgroundColor: "white" }}>
      <ScrollView style={styles.mainContainer}>
        {/* top icons and city name */}
        <View style={styles.flexRow}>
          {/* arrow icon */}
          <TouchableOpacity>
            <FontAwesomeIcon icon={faArrowLeftLong} size={50} />
          </TouchableOpacity>

          {/* location icon */}
          <FontAwesomeIcon icon={faLocationDot} size={32} />

          {/* mohali text */}
          <Text style={styles.cityText}>Mohali</Text>
        </View>

        {/* pharmacy nearby text */}
        <Text style={styles.pharmacyText}>Pharmacy Nearby</Text>

        {/* horizontal scroll view */}
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{ marginTop: 20 }}
        >
          <View style={{ flexDirection: "row" }}>
            {/* box 1 */}
            <View style={styles.box}>
              {/* image */}
              <Image source={Pic1} />

              <View style={{ padding: 10 }}>
                <Text style={styles.line1}>Path lab pharmacy</Text>
                <Text style={styles.line2}>5km Away</Text>

                <View style={[styles.flexRow, { width: "60%" }]}>
                  <FontAwesomeIcon icon={faStar} size={11} color="#FFD600" />
                  <Text style={styles.review}>4.5</Text>
                  <Text style={styles.review}>(120 review)</Text>
                </View>
              </View>
            </View>

            {/* box 2 */}
            <View style={styles.box}>
              {/* image */}
              <Image source={Pic2} />

              <View style={{ padding: 10 }}>
                <Text style={styles.line1}>24 pharmacy</Text>
                <Text style={styles.line2}>5km Away</Text>

                <View style={[styles.flexRow, { width: "60%" }]}>
                  <FontAwesomeIcon icon={faStar} size={11} color="#FFD600" />
                  <Text style={styles.review}>4.5</Text>
                  <Text style={styles.review}>(120 review)</Text>
                </View>
              </View>
            </View>

            {/* box 3 */}
            <View style={styles.box}>
              {/* image */}
              <Image source={Pic1} />

              <View style={{ padding: 10 }}>
                <Text style={styles.line1}>Path lab pharmacy</Text>
                <Text style={styles.line2}>5km Away</Text>

                <View style={[styles.flexRow, { width: "60%" }]}>
                  <FontAwesomeIcon icon={faStar} size={11} color="#FFD600" />
                  <Text style={styles.review}>4.5</Text>
                  <Text style={styles.review}>(120 review)</Text>
                </View>
              </View>
            </View>

            {/* box 4 */}
            <View style={styles.box}>
              {/* image */}
              <Image source={Pic2} />

              <View style={{ padding: 10 }}>
                <Text style={styles.line1}>24 pharmacy</Text>
                <Text style={styles.line2}>5km Away</Text>

                <View style={[styles.flexRow, { width: "60%" }]}>
                  <FontAwesomeIcon icon={faStar} size={11} color="#FFD600" />
                  <Text style={styles.review}>4.5</Text>
                  <Text style={styles.review}>(120 review)</Text>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>

        {/* text */}
        <View>
          {/* upload prescription text */}
          <View style={{ alignItems: "center" }}>
            <Text style={styles.prescriptionText}>Upload Prescription</Text>
          </View>

          {/* description text */}
          <Text style={styles.description}>
            We will show the pharmacy that fits as per your prescription.
          </Text>
        </View>

        {/* upload box */}
        <View style={styles.uploadBox}>
          {/* upload link */}
          <TouchableOpacity
            style={{ justifyContent: "center", alignItems: "center" }}
          >
            <FontAwesomeIcon icon={faLink} size={50} />
            <Text style={styles.uploadText}>Upload Link</Text>
          </TouchableOpacity>

          {/* upload file */}
          <TouchableOpacity
            style={{ justifyContent: "center", alignItems: "center" }}
            // onPress={handleUpload}
            onPress={() => handleUpload(false)}
          >
            <FontAwesomeIcon icon={faArrowUpFromBracket} size={50} />
            <Text style={styles.uploadText}>Upload File</Text>
          </TouchableOpacity>
        </View>

        {/* continue button */}
        <TouchableOpacity style={styles.continueButton}>
          <Text style={styles.continueText}>Continue</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "white",
    paddingTop: 10,
    marginLeft: 20,
  },
  flexRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "50%",
  },
  cityText: {
    fontFamily: "Baloo",
    fontWeight: "500",
    fontSize: 20,
    lineHeight: 31.28,
  },
  pharmacyText: {
    fontFamily: "Baloo",
    fontWeight: "600",
    fontSize: 24,
    lineHeight: 37.54,
    marginTop: 40,
  },
  box: {
    width: 190,
    height: 190,
    borderRadius: 20,
    marginRight: 20,
    borderWidth: 0.5,
    borderColor: "#000000",
  },
  line1: {
    fontFamily: "Baloo",
    fontWeight: "500",
    fontSize: 16,
    lineHeight: 25.02,
  },
  line2: {
    fontFamily: "Baloo",
    fontWeight: "500",
    fontSize: 13,
    lineHeight: 20.33,
    color: "#453E3E",
  },
  review: {
    fontFamily: "Baloo",
    fontWeight: "500",
    fontSize: 12,
    lineHeight: 18.77,
  },
  prescriptionText: {
    fontFamily: "Baloo",
    fontWeight: "500",
    fontSize: 32,
    lineHeight: 50.05,
    marginTop: 30,
  },
  description: {
    fontFamily: "Baloo",
    fontWeight: "400",
    fontSize: 20,
    lineHeight: 31.28,
    textAlign: "center",
    marginRight: 20,
  },
  uploadBox: {
    width: 370,
    height: 190,
    borderRadius: 20,
    borderWidth: 0.5,
    borderColor: "#000000",
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 40,
  },
  uploadText: {
    fontFamily: "Baloo",
    fontWeight: "500",
    fontSize: 20,
    lineHeight: 31.28,
    textAlign: "center",
    marginTop: 20,
  },
  continueButton: {
    width: 370,
    height: 62,
    borderRadius: 15,
    backgroundColor: "#41B592",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 50,
  },
  continueText: {
    fontFamily: "Baloo",
    fontWeight: "500",
    fontSize: 32,
    color: "#FFFFFF",
  },
});

export default NearbyPharmacy;
