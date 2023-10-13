import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  ScrollView,
  Image,
  Alert,
  ImageBackground,
} from "react-native";
import DemoView from "../component/DemoView";
import * as Linking from "expo-linking";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const fontSizeScaler = (size) => {
  const standardWidth = 1229; // Width where font size is designed
  const scaleFactor = screenWidth / standardWidth;
  const scaledSize = size * scaleFactor;
  return scaledSize;
};

const showBetaSignUpAlert = () => {
  console.log("Clicked on beta sign up");
  window.alert(
    "Sign Up for Beta Program",
    "Would you like to sign up for our beta program?",
    [
      {
        text: "Sign Up",
        onPress: handleSignUp,
      },
      {
        text: "Cancel",
        onPress: handleCancel,
        style: "cancel",
      },
    ]
  );
};

const handleSignUp = () => {
  Linking.openURL(
    "https://play.google.com/store/apps/details?id=com.stage.android"
  );
};

const handleCancel = () => {};

const OurStoryPage = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={{ flex: 1, flexDirection: "column", marginTop: 80,marginHorizontal:16 }}>
        <Text style={styles.title}>Our Story</Text>

        <Text style={styles.description}>
          Stage is a social learning company. Our platform promotes
          contest/hackathon to enable problem solving capabilities.
        </Text>
        <Text style={styles.title}>Our Goal</Text>
        <Text style={styles.description}>
          Our Goal is to build a community of Problem solvers that can apply
          technical learnings to solve complex real world problems.
        </Text>
        <Text style={styles.title}>Vision</Text>
        <Text style={styles.description}>
          Our Vision is to help Business/Brands to find unique and Innovative
          solutions to Complex Problems or to help Recruiters find the ideal
          Candidate for a job or to help Candidate find the ideal job.
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: fontSizeScaler(42),
    marginBottom: 20,
    fontFamily: "Clash-Medium",
    color: "#000",
    elevation: 1,
  },
  description: {
    fontSize: fontSizeScaler(30),
    marginBottom: 20,
    fontFamily: "Clash-Regular",
    color: "#000",
    paddingHorizontal: 20,
  },
  downloadButton: {
    // width: screenWidth / 3,
    // height: screenHeight / 10,
  },
  buttonText: {
    color: "white",
    fontSize: fontSizeScaler(18),
    fontWeight: "bold",
    textAlign: "center",
  },
  bottomButton: {
    fontSize: 16,
    color: "#fff",
    fontFamily: "Clash-Medium",
  },
});

export default OurStoryPage;
