import React from "react";
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useFonts } from "expo-font";
import { TextInput } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const menu_icon = require("../assets/images/menu_icon.png");
const headtext = require("../assets/images/headtext.png");
const juice = require("../assets/images/juice.png");
const image_1 = require("../assets/images/image_1.png");
const image_2 = require("../assets/images/image_2.png");
const image_3 = require("../assets/images/image_3.png");

const screen1 = () => {
  const [fontsLoaded] = useFonts({
    "Inika-Bold": require("../assets/fonts/Inika-Bold.ttf"),
    "Inika-Regular": require("../assets/fonts/Inika-Regular.ttf"),
    RobotoSlab: require("../assets/fonts/RobotoSlab.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return <SafeAreaView style={styles.safeArea}></SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
});

export default screen1;
