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
  Pressable,
  Platform,
} from "react-native";
import DemoView from "../component/DemoView";
import * as Linking from "expo-linking";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;
const web = screenWidth > 900;
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

const DownloadPage = ({ setCurrentScreen }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={{ flex: 1, flexDirection: web?"row":"column" }}>
        <View
          style={{
            flex:web? 0.4:1,
            backgroundColor: "#fff",
            alignItems: "center",
            justifyContent: "center",
            paddingTop: web?0:80
          }}
        >
          <DemoView />
        </View>
        <ImageBackground
          style={{
            flex: web? 0.6:1,
            width: "100%",
            height: "100%",
            alignItems: "center",
            alignContent: "center",
            paddingTop: web?80:0,
            marginTop:web?0: 20
          }}
          source={require("../assets/background.png")}
        >
          <View
            style={{
              alignItems: "center",
              height: "auto",
              alignSelf: "center",
            }}
          >
            <Text style={styles.title}>Welcome to Stage</Text>
            <Text style={styles.description}>
              A Revolutionary platform where learning meets reality, Discover
              new sets of challenges and innovators all at one place.{" "}
            </Text>
            <View
              style={{ flexDirection:"row", columnGap: fontSizeScaler(30), marginTop: fontSizeScaler(20), }}
            >
              <TouchableOpacity
                style={styles.downloadButton}
                onPress={() => {
                  Linking.openURL(
                    "https://play.google.com/store/apps/details?id=com.stage.android"
                  );
                }}
              >
                <Image
                  style={{ alignSelf: "center", width: 224, height: 56 }}
                  source={require("../assets/google-play-badge.png")}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.downloadButton}
                onPress={() => showBetaSignUpAlert()}
              >
                <Image
                  style={{ alignSelf: "center", width: 167, height: 56 }}
                  resizeMode="contain"
                  source={require("../assets/app-store-badge_v2.png")}
                />
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
        <View
          style={{
            position: "absolute",
            bottom: 0,
            paddingHorizontal: 20,
            paddingVertical: 24,
            alignItems: "center",
            justifyContent: "center",
            start: web?screenWidth * 0.4: 0,
            width: web?screenWidth * 0.6: screenWidth,
          }}
        >
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "row",
              columnGap: 30,
              marginBottom: 20,
            }}
          >
            <Pressable onPress={() => setCurrentScreen("Privacy")}>
              <Text style={styles.bottomButton}>Privacy policy</Text>
            </Pressable>
            {/* <Pressable onPress={() => setCurrentScreen("Terms")}>
              <Text style={styles.bottomButton}>Terms of use</Text>
            </Pressable> */}
            <Pressable onPress={() => setCurrentScreen("New")}>
              <Text style={styles.bottomButton}>What's new</Text>
            </Pressable>
            <Pressable onPress={() => setCurrentScreen("Career")}>
              <Text style={styles.bottomButton}>Career</Text>
            </Pressable>
          </View>
          <Text style={styles.bottomButton}>2023 Stage App</Text>
        </View>
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
    fontSize: fontSizeScaler(56),
    marginBottom: 20,
    fontFamily: "Clash-Bold",
    color: "#fff",
    elevation: 1,
    marginTop: screenWidth / 10,
  },
  description: {
    fontSize: fontSizeScaler(30),
    marginBottom: 20,
    textAlign: "center",
    fontFamily: "Clash-Medium",
    color: "#fff",
    paddingHorizontal: 20,
  },
  downloadButton: {
    // width: screenWidth / 3,
    // height: screenHeight / 10,
    marginVertical: 16
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

export default DownloadPage;
