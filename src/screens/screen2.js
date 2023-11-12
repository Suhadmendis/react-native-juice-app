import React, { useState } from "react";
import {
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useFonts } from "expo-font";

const bg = require("../assets/images/bg.png");
const menu_icon = require("../assets/images/menu_icon.png");
const subtext = require("../assets/images/subtext.png");
const cup = require("../assets/images/cup.png");

const screen2 = () => {
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

export default screen2;
