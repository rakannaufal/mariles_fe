import React from "react";
import { View, StyleSheet } from "react-native";
const FooterNoTab = () => {
  return <View style={styles.footer}></View>;
};

const styles = StyleSheet.create({
  footer: {
    height: 60, // Footer height
    backgroundColor: "#88D0E4", // Footer background color
    width: "100%",
    position: "absolute", // Fixed at the bottom
    bottom: 0,
  },
});
export default FooterNoTab;
