import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
} from "react-native";

import * as Linking from "expo-linking";
import DownloadPage from "./screen/DownloadPage";
import * as Font from "expo-font";

const { width, height } = new Dimensions.get("window");
let customFonts = {
  "Clash-Medium": require("./assets/fonts/ClashDisplay-Medium.otf"),
  "Clash-Regular": require("./assets/fonts/ClashDisplay-Regular.otf"),
  "Clash-Bold": require("./assets/fonts/ClashDisplay-Bold.otf"),
};
function renderAppIcon() {
  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <Image
        style={{ width: 40, height: 40 }}
        source={require("./assets/icon.png")}
      />
      {/* <View style={{flexDirection:"column",marginHorizontal:16}}>
        <Text style={{fontSize: 18,color:"#fff"}}>Stage</Text>
        <Text>where learning meets reality</Text>
      </View> */}
    </View>
  );
}

function renderNavigation() {
  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <Text style={styles.navigationText}>Home</Text>
      <Text style={styles.navigationText}>Our Story</Text>
      <Text style={styles.navigationText}>Contact us</Text>
    </View>
  );
}

function renderToolBar() {
  return (
    <View
      style={{
        height: 56,
        alignItems: "center",
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 24,
        position: "absolute",
        top: 0,
        start: 0,
      }}
    >
      {renderAppIcon()}
      {renderNavigation()}
    </View>
  );
}

renderFeatureItem = (title, description) => {
  return (
    <View
      style={{
        backgroundColor: "#fff",
        paddingVertical: 10,
        paddingHorizontal: 8,
        borderRadius: 8,
        maxWidth: "25%",
      }}
    >
      <Text style={{ fontSize: 20, fontWeight: "bold" }}>{title}</Text>
      <Text style={{ fontSize: 16, lineHeight: 32 }} numberOfLines={2}>
        {description}
      </Text>
    </View>
  );
};

function renderContent() {
  return (
    <ScrollView contentContainerStyle={{ flex: 1, height: height }}>
      <View style={{ width: "100%", height: "100%" }}>
        <View
          style={{
            width: "100%",
            height: "auto",
            flexDirection: "row",
            // backgroundColor: "red",
          }}
        >
          <ImageBackground
            style={{ width: "100%", height: "100%", flex: 0.6 }}
            source={require("./assets/background.png")}
          >
            <View
              style={{
                flex: 1,
                flexWrap: "wrap",
                alignItems: "center",
                paddingVertical: 24,
                paddingHorizontal: 20,
              }}
            >
              <View>
                <Text
                  style={{
                    fontSize: 40,
                    color: "#131313",
                    marginBottom: 8,
                    fontWeight: "bold",
                  }}
                >
                  A Revolutionary platform where learning meets reality{" "}
                </Text>
                <Text
                  style={{ fontSize: 18, lineHeight: 32, color: "#12141D" }}
                >
                  Discover new sets of challenges and innovators all at one
                  place.{" "}
                </Text>
              </View>
              <View style={{ flexDirection: "row", marginTop: 8 }}>
                <Image
                  style={{ width: 119.66407 * 2 + 20, height: 40 * 2 + 20 }}
                  source={require("./assets/google-play-badge.png")}
                />
                <Image
                  style={{ width: 119.66407 * 2, height: 40 * 2 }}
                  source={require("./assets/apple-store-badge.svg")}
                />
              </View>
            </View>
          </ImageBackground>
          <View style={{ flex: 0.4, flexWrap: "wrap", alignItems: "center" }}>
            <Image
              style={{ width: 300, height: 300 }}
              source={require("./assets/demo_main.gif")}
            />
          </View>
        </View>
        {/* <View
          style={{
            backgroundColor: "#f5f5f5",
            paddingVertical: 12,
            width: "100%",
            alignItems: "center",
            flexDirection: "column",
            justifyContent: "center",
            alignSelf: "center",
          }}
        >
          <Text
            style={{
              fontWeight: "500",
              color: "#131313",
              fontSize: 30,
              textAlignVertical: "center",
            }}
          >
            Features for better learning experience
          </Text>
          <View style={{flexDirection:"row",justifyContent:"space-between",columnGap:30,marginTop:16}}>
            {renderFeatureItem("Enhanced Learning","Tackle more intricate and challenging problems")}
            {renderFeatureItem("Exposure ","")}
            {renderFeatureItem("Connect with ","")}
          </View>
        </View> */}
      </View>
    </ScrollView>
  );
}

function renderBottomBar() {
  return <View style={{ backgroundColor: "#145628" }}></View>;
}

const handleDeepLink = (url) => {
  if (url) {
    // Check if the app is installed
    Linking.canOpenURL(url)
      .then((supported) => {
        if (supported) {
          // Open the app
          Linking.openURL(url);
        } else {
          // App is not installed, open the Play Store
          Linking.openURL(
            "https://play.google.com/store/apps/details?id=com.stage.android"
          );
        }
      })
      .catch((error) => {
        console.error("Error checking deep link support:", error);
      });
  }
};

const _loadFontsAsync = async () => {
  try {
    await Font.loadAsync(customFonts);
  } catch (error) {
    console.error("Error: _loadFontsAsync: ", error);
  }
};

export default function App() {
  React.useEffect(() => {
    const url = "stageapp://s"; // Replace with the actual deep link URL
    // handleDeepLink(url);
  }, []);

  React.useEffect(() => {
    _loadFontsAsync();
  }, []);

  return (
    <View style={styles.container}>
      {/* {renderToolBar()}
      {renderContent()}
      {renderBotto mBar()} */}
      
      <DownloadPage />
      
      <View style={{position:"absolute",top:0,start:0,width:width}}>
        {renderToolBar()}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    // backgroundColor:"#212121"
  },
  navigationText: {
    fontSize: 16,
    padding: 12,
    color: "#fff",
    fontFamily:"Clash-Medium"
  },
  bottomButton: {
    fontSize: 16,
    color: "#131313",
    fontFamily:"Clash-Medium"
  },
});
