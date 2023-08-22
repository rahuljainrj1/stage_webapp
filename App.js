import { StatusBar } from "expo-status-bar";
import { ImageBackground, StyleSheet, Text, View,Image } from "react-native";
import LinearGradient from "expo-linear-gradient";

function renderAppIcon(){
  return(
    <View style={{flexDirection:"row",alignItems:"center"}}>
      <Image style={{width: 40,height:40}} source={require("./assets/icon.png")}/>
      <View style={{flexDirection:"column",marginHorizontal:16}}>
        <Text style={{fontSize: 20}}>Stage</Text>
        <Text>Learn, Challenge and Grow</Text>
      </View>
    </View>
  )
}

function renderNavigation(){
  return(
    <View style={{flexDirection:"row",alignItems:"center"}}>
      <Text style={styles.navigationText}>Home</Text>
      <Text style={styles.navigationText}>Our Story</Text>
      <Text style={styles.navigationText}>Contact us</Text>
    </View>
  )
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
      }}
    >
      {renderAppIcon()}
      {renderNavigation()}
    </View>
  );
}

function renderContent(){
  return(
    <View style={{flex:1,backgroundColor: "#444",width:"100%"}}>

    </View>
  )
}

function renderBottomBar(){
  return(
    <View style={{backgroundColor: "#145628"}}>

    </View>
  )
}


export default function App() {
  return (
    <View style={styles.container}>
      {renderToolBar()}
      {renderContent()}
      {renderBottomBar()}
    </View>
  );
}

{
  /* <View>
<View>
  <Text>Welcome to Stage!</Text>
  <Text>Social learning paltform</Text>
</View>
<View>
  <Text>Mockup</Text>
  <Text>Download from Playstore</Text>
  <Text>get it from app Store</Text>
</View>
</View> */
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  navigationText:{
    fontSize: 16,
    padding:12
  }
});
