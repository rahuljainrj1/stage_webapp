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

const UnderConstructionPage = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={{ flex: 1, flexDirection: "row" }}>
      
        <ImageBackground
          style={{
            flex: 1,
            width: "100%",
            height: "100%",
            alignItems: "center",
            alignContent: "center",
            paddingTop: 80,
          }}
        //   source={require("../assets/background.png")}
        >
          <View
            style={{
              alignItems: "center",
              height: "auto",
              alignSelf: "center",
            }}
          >
                <Text style={styles.title}>Page under construction 🚧</Text>
            <Text style={styles.description}>
            Our team is hard at work to make it even better for you.{"\n"}Please accept our apologies for any inconvenience. We appreciate your patience and understanding.
            </Text>
           
          </View>
        </ImageBackground>
       
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
    color: "#000",
    elevation: 1,
    marginTop: screenWidth / 10,
  },
  description: {
    fontSize: fontSizeScaler(30),
    marginBottom: 20,
    textAlign: "center",
    fontFamily: "Clash-Medium",
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

export default UnderConstructionPage;
