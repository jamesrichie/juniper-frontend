import React from "react";
import { StyleSheet, Text } from "react-native";

import { useFonts } from "expo-font";

function CardText({ children, style, weight = "regular" }) {
  const [fontsLoaded] = useFonts({
    light: require("../../assets/fonts/NunitoSans-Light.ttf"),
    regular: require("../../assets/fonts/NunitoSans-Regular.ttf"),
    semiBold: require("../../assets/fonts/Nunito-SemiBold.ttf"),
    bold: require("../../assets/fonts/Nunito-Bold.ttf"),
  });

  if (!fontsLoaded) return null;

  const styles = StyleSheet.create({
    text: {
      fontFamily: weight,
    },
  });

  return <Text style={[styles.text, style]}>{children}</Text>;
}

export default CardText;
