import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
  Pressable,
} from "react-native";

import * as Linking from "expo-linking";
import DownloadPage from "./screen/DownloadPage";
import * as Font from "expo-font";
import UnderConstructionPage from "./screen/UnderConstructionPage";
import OurStoryPage from "./screen/OurStoryPage";
import PrivacyPage from "./screen/PrivacyPage";

const { width, height } = new Dimensions.get("window");
const web = width > 900;
let customFonts = {
  "Clash-Medium": require("./assets/fonts/ClashDisplay-Medium.otf"),
  "Clash-Regular": require("./assets/fonts/ClashDisplay-Regular.otf"),
  "Clash-Bold": require("./assets/fonts/ClashDisplay-Bold.otf"),
};
function renderAppIcon() {
  return (
    <Pressable onPress={handleRefresh}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
      <Image
        style={{ width: 40, height: 40 }}
        source={require("./assets/icon.png")}
      />
    </View>
    </Pressable>
  );
}

const handleRefresh = () => {
  // Reload the current page
  window.location.reload();
};





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
  const [currentScreen, setCurrentScreen] = useState("Home")
  React.useEffect(() => {
    const url = "stageapp://s"; // Replace with the actual deep link URL
    // handleDeepLink(url);
  }, []);

  React.useEffect(() => {
    _loadFontsAsync();
  }, []);

  const renderNavigation = () => {
    return (
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Pressable onPress={()=> setCurrentScreen("Home")}><Text style={styles.navigationText}>Home</Text></Pressable>
        <Pressable onPress={()=> setCurrentScreen("Story")}><Text style={styles.navigationText}>Our Story</Text></Pressable>
        <Pressable onPress={()=> setCurrentScreen("Story")}><Text style={styles.navigationText}>Contact us</Text></Pressable>
      </View>
    );
  }
  
  const renderToolBar = () => {
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

  const renderContent = (currentScreen) => {
    if(currentScreen === "Home"){
      return <DownloadPage setCurrentScreen={setCurrentScreen}/>
    }else if(currentScreen === "Story"){
      return <OurStoryPage />
    }else if(currentScreen === "Privacy"){
      return <PrivacyPage />
    }
    else{
      return <UnderConstructionPage />
    }
  }

  return (
    <View style={styles.container}>
      {renderContent(currentScreen)}
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
    color: web?"#fff":"#161924",
    fontFamily:"Clash-Medium"
  },
  bottomButton: {
    fontSize: 16,
    color: "#131313",
    fontFamily:"Clash-Medium"
  },
});
