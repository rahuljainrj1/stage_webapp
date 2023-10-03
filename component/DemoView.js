import React, { useRef, useState } from "react";
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
import ImageUpdater from "./ImageUpdater";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const fontSizeScaler = (size) => {
  const standardWidth = 1229; // Width where font size is designed
  const scaleFactor = screenWidth / standardWidth;
  const scaledSize = size * scaleFactor;
  return scaledSize;
};

const DemoView = () => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* <Image
        style={{ width: screenWidth / 3, height: screenHeight - 240 }}
        resizeMode="contain"
        source={require("../assets/screenshots/apple_screen_empty.png")}
      /> */}
      <ImageUpdater width={screenWidth/2} height={screenHeight-240} elevation={1} startIndex={0} />
      <View style={{position:'absolute',top:screenHeight/4,start:80}}>
        <ImageUpdater width={screenWidth/5} height={(screenHeight/2)} elevation={0} startIndex={4}/>
      </View>
      <View style={{position:'absolute',top:screenHeight/4,end:80}}>
        <ImageUpdater width={screenWidth/5} height={(screenHeight/2)} elevation={0} startIndex={1}/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  pagerView: {
    alignItems: "center",
    justifyContent: "center",
  },
});

export default DemoView;
