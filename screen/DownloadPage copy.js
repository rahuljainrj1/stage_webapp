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
  console.log("Clicked on beta sign up")
  window.alert(
    'Sign Up for Beta Program',
    'Would you like to sign up for our beta program?',
    [
      {
        text: 'Sign Up',
        onPress: handleSignUp,
      },
      {
        text: 'Cancel',
        onPress: handleCancel,
        style: 'cancel',
      },
    ]
  );
};

const handleSignUp = () =>{
  Linking.openURL(
    "https://play.google.com/store/apps/details?id=com.stage.android"
  );
}

const handleCancel = () =>{

}

const DownloadPage = () => {
    console.log(screenWidth)
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={{ flex: 1, flexDirection: "row" }}>
        <View
          style={{
            flex: 0.4,
            backgroundColor: "#fff",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
            {/* <Text
            style={{
              fontFamily: "Clash-Medium",
              fontSize: fontSizeScaler(10),
            }}
          >
            Enhanced Learning{" "}
          </Text>
          <Image
            style={{ width: screenWidth / 3, height: screenHeight - 240 }}
            resizeMode="contain"
            source={require("../assets/screenshots/apple_screen_empty.png")}
          /> */}
          <DemoView/>
        </View>
        <ImageBackground
          style={{
            flex: 0.6,
            width: "100%",
            height: "100%",
            alignItems: "center",
            alignContent: "center",
            paddingTop: 80,
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
              style={{ flexDirection: "row", columnGap: 30, marginTop: 20 }}
            >
              <TouchableOpacity style={styles.downloadButton} onPress={()=>{
                 Linking.openURL(
                    "https://play.google.com/store/apps/details?id=com.stage.android"
                  );
              }}>
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
            start: screenWidth * 0.4,
            width: screenWidth * 0.6,
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
            <TouchableOpacity>
              <Text style={styles.bottomButton}>Privacy policy</Text>
            </TouchableOpacity>
            <Text style={styles.bottomButton}>Terms of use</Text>
            <Text style={styles.bottomButton}>What's new</Text>
            <Text style={styles.bottomButton}>Career</Text>
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
