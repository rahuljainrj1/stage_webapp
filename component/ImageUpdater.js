import React, { useState, useEffect } from 'react';
import { View, Image, StyleSheet, Animated,Text } from 'react-native';

const imageUrls = [
  require('../assets/screenshots/apple_screen_shot_1.png'),
  require('../assets/screenshots/apple_screen_shot_5.png'),
  require('../assets/screenshots/apple_screen_shot_2.png'),
  require('../assets/screenshots/apple_screen_shot_3.png'),
  require('../assets/screenshots/apple_screen_shot_4.png'),
];



const ImageUpdater = ({width,height,elevation,startIndex}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(startIndex);
  const fadeAnim = new Animated.Value(1);

  const changeImage = () => {
    const nextIndex = (currentImageIndex + 1) % imageUrls.length;
    setCurrentImageIndex(nextIndex);

    // Create a fade-in effect when the image changes
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 100, // 0.5 seconds
      useNativeDriver: false,
    }).start(() => {
      // After the animation, fade out the image
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 100, // 0.5 seconds
        useNativeDriver: false,
      }).start();
    });
  };

  useEffect(() => {
    const interval = setInterval(changeImage, 3000); // Change image every 3 seconds

    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, [currentImageIndex]);

  useEffect(() => {
    imageUrls.forEach((imageUri) => {
      Image.prefetch(imageUri);
    });
  }, []);

  return (
    <View style={[styles.container,{zIndex: elevation}]}>
      {/* <Animated.Image
        source={require('../assets/screenshots/apple_screen_shot_1.png')}
        style={[styles.image, { opacity: fadeAnim }]}
      /> */}
      <Animated.Image
        style={{ width: width, height: height,opacity:fadeAnim }}
        resizeMode="contain"
        source={imageUrls[currentImageIndex]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ImageUpdater;
