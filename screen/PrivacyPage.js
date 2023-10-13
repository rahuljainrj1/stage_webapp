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

const PrivacyPage = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={{ paddingHorizontal: 20, paddingBottom: 8, marginTop: 80 }}>
        <Text style={styles.subTitle}>Privacy Policy</Text>

        <Text style={styles.caption}>
          Stage India built the Stage app as a Free app. This SERVICE is
          provided by Stage India at no cost and is intended for use as is. This
          page is used to inform visitors regarding our policies with the
          collection, use, and disclosure of Personal Information if anyone
          decided to use our Service. If you choose to use our Service, then you
          agree to the collection and use of information in relation to this
          policy. The Personal Information that we collect is used for providing
          and improving the Service. We will not use or share your information
          with anyone except as described in this Privacy Policy. The terms used
          in this Privacy Policy have the same meanings as in our Terms and
          Conditions, which is accessible at Stage unless otherwise defined in
          this Privacy Policy.{"\n\n"}We understand that your privacy is
          important, and we respect your right to control your personal
          information. This privacy policy explains how we collect, use, and
          protect the personal information that you provide when you submit
          user-generated content (UGC) to our application.
        </Text>
        <Text style={styles.subTitle}>Information Collection and Use</Text>
        <Text style={styles.caption}>
          For a better experience, while using our Service, we may require you
          to provide us with certain personally identifiable information,
          including but not limited to Email, Name, About, Website, Google
          Public Profile and Facebook Public profile. The information that we
          request will be retained by us and used as described in this privacy
          policy. The app does use third party services that may collect
          information used to identify you. Link to privacy policy of third
          party service providers used by the app
          {"\n\n"}
          When you submit UGC to our website, we may collect personal
          information from you, such as your name, email address, and any other
          information that you voluntarily provide in connection with your
          submission. We may also collect non-personal information, such as your
          IP address and the type of device you are using.
        </Text>
        <Text style={styles.subTitle}>How We Use Your Information</Text>
        <Text style={styles.caption}>
          We use your personal information only for the purpose of displaying
          and promoting your UGC on our application. We may also use your
          personal information to contact you regarding your submission or to
          respond to any inquiries or requests that you make. We will not use
          your personal information for any other purpose without your explicit
          consent.
        </Text>
        <Text style={styles.subTitle}>How We Protect Your Information</Text>
        <Text style={styles.caption}>
          We take the security of your personal information seriously and take
          reasonable measures to protect it. We use industry-standard encryption
          and security protocols to prevent unauthorized access, disclosure, or
          alteration of your personal information.
        </Text>
        <Text style={styles.subTitle}>Disclosure of Your Information</Text>
        <Text style={styles.caption}>
          We will not sell, trade, or otherwise transfer your personal
          information to any third party without your explicit consent. However,
          we may disclose your personal information if required by law or if we
          believe in good faith that such disclosure is necessary to protect our
          rights, property, or safety, or the rights, property, or safety of
          others.
        </Text>
        <Text style={styles.subTitle}>Log Data</Text>
        <Text style={styles.caption}>
          We want to inform you that whenever you use our Service, in a case of
          an error in the app we collect data and information (through third
          party products) on your phone called Log Data. This Log Data may
          include information such as your device Internet Protocol (“IP”)
          address, device name, operating system version, the configuration of
          the app when utilizing our Service, the time and date of your use of
          the Service, and other statistics.
        </Text>
        <Text style={styles.subTitle}>Cookies</Text>
        <Text style={styles.caption}>
          Cookies are files with a small amount of data that are commonly used
          as anonymous unique identifiers. These are sent to your browser from
          the websites that you visit and are stored on your device's internal
          memory. This Service does not use these “cookies” explicitly. However,
          the app may use third party code and libraries that use “cookies” to
          collect information and improve their services. You have the option to
          either accept or refuse these cookies and know when a cookie is being
          sent to your device. If you choose to refuse our cookies, you may not
          be able to use some portions of this Service.
        </Text>
        <Text style={styles.subTitle}>Service Providers</Text>
        <Text style={styles.caption}>
          We may employ third-party companies and individuals due to the
          following reasons: {`\n\n\t`} • To facilitate our Service {`\n\n\t`} •
          To provide the Service on our behalf {`\n\n\t`} • To perform
          Service-related services or {`\n\n\t`} • To assist us in analyzing how
          our Service is used. {`\n`}
          {`\n`}We want to inform users of this Service that these third parties
          have access to your Personal Information. The reason is to perform the
          tasks assigned to them on our behalf. However, they are obligated not
          to disclose or use the information for any other purpose.
        </Text>
        <Text style={styles.subTitle}>Security</Text>
        <Text style={styles.caption}>
          We value your trust in providing us your Personal Information, thus we
          are striving to use commercially acceptable means of protecting it.
          But remember that no method of transmission over the internet, or
          method of electronic storage is 100% secure and reliable, and we
          cannot guarantee its absolute security.
        </Text>
        <Text style={styles.subTitle}>Links to Other Sites</Text>
        <Text style={styles.caption}>
          This Service may contain links to other sites. If you click on a
          third-party link, you will be directed to that site. Note that these
          external sites are not operated by us. Therefore, we strongly advise
          you to review the Privacy Policy of these websites. We have no control
          over and assume no responsibility for the content, privacy policies,
          or practices of any third-party sites or services.
        </Text>
        <Text style={styles.subTitle}>Children’s Privacy</Text>
        <Text style={styles.caption}>
          These Services do not address anyone under the age of 13. We do not
          knowingly collect personally identifiable information from children
          under 13 years of age. In the case we discover that a child under 13
          has provided us with personal information, we immediately delete this
          from our servers. If you are a parent or guardian and you are aware
          that your child has provided us with personal information, please
          contact us so that we will be able to do necessary actions.
        </Text>
        <Text style={styles.subTitle}>Changes to This Privacy Policy</Text>
        <Text style={styles.caption}>
          We may update our Privacy Policy from time to time. Thus, you are
          advised to review this page periodically for any changes. We will
          notify you of any changes by posting the new Privacy Policy on this
          page. This policy is effective as of 2023-02-15
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
  caption: {
    fontSize: fontSizeScaler(20),
    marginBottom: 20,
    fontFamily: "Clash-Regular",
    color: "#000",
    elevation: 1,
  },
  subTitle: {
    fontSize: fontSizeScaler(30),
    marginBottom: 20,
    fontFamily: "Clash-Medium",
    color: "#000",
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

export default PrivacyPage;
