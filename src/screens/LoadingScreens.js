import React, { useEffect } from "react";
import { View, Image, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function LoadingScreen() {
  const navigation = useNavigation();

  useEffect(() => {
    // Simulate loading process and then navigate to the onboarding screen
    const timer = setTimeout(() => {
      navigation.replace("Onboarding"); // Replace the current screen with the Onboarding screen
    }, 3000); // 3 seconds delay for loading

    // Cleanup the timer in case the component is unmounted
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require("../../assets/logo.png")}
          style={styles.logo}
          resizeMode="contain"
          alt="Logo with a hand holding a graduation cap"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#87CFE3",
    alignItems: "center",
    justifyContent: "center",
  },
  logoContainer: {
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 300,
    height: 300,
  },
});
