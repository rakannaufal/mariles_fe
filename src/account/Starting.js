import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native"; // Import the useNavigation hook

export default function App() {
  const navigation = useNavigation(); // Initialize the navigation hook

  const goToSignIn = () => {
    navigation.navigate("SignInPelajar");
  };

  const goToSignUp = () => {
    navigation.navigate("SignUpPelajar");
  };

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
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.buttonMasuk} onPress={goToSignIn}>
          <Text style={styles.buttonTextMasuk}>Masuk</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonDaftar} onPress={goToSignUp}>
          <Text style={styles.buttonTextDaftar}>Daftar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#89CFF0", // Light blue background color
    alignItems: "center",
    justifyContent: "center",
  },
  logoContainer: {
    marginBottom: 40, // Adds some space between the logo and buttons
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    marginTop: 180, // Adds space between logo and buttons

    width: 300,
    height: 300,
  },
  buttonContainer: {
    marginTop: 60, // Adds space between logo and buttons
    alignItems: "center", // Ensures buttons are centered horizontally
  },
  buttonMasuk: {
    backgroundColor: "#0D5782", // Dark blue color
    paddingVertical: 12,
    paddingHorizontal: 80,
    borderRadius: 30,
    marginBottom: 16, // Space between buttons
  },
  buttonTextMasuk: {
    width: 100,
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "medium",
    textAlign: "center", // Centers the text inside the button
  },
  buttonDaftar: {
    backgroundColor: "#FFFFFF", // White background
    paddingVertical: 12,
    paddingHorizontal: 80,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: "#D1D5DB", // Light gray border color
  },
  buttonTextDaftar: {
    width: 100,

    color: "#000000", // Black text
    fontSize: 20,
    fontWeight: "medium",
    textAlign: "center", // Centers the text inside the button
  },
});
