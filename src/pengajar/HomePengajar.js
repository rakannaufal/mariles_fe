import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // Menambahkan Ionicons
import { FontAwesome } from "@expo/vector-icons";

import { useNavigation } from "@react-navigation/native";

export default function HomePengajar() {
  const navigation = useNavigation();

  const handleAccountPengajar = () => {
    navigation.navigate("Setting");
  };
  const handleAccount = () => {
    navigation.navigate("Account");
  };
  const handleInfo = () => {
    navigation.navigate("InfoLes");
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Hi, Pengajar!</Text>
        <TouchableOpacity onPress={handleAccountPengajar}>
          <FontAwesome name="cog" size={24} style={styles.userIcon} />
        </TouchableOpacity>
      </View>

      {/* Main Content */}
      <View style={styles.main}>
        {/* Button Row - Akun and Forum */}
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.squareButton} onPress={handleAccount}>
            <Ionicons name="person-circle-outline" size={24} color="#fff" />
            <Text style={styles.buttonText}>Akun</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.squareButton}>
            <Ionicons name="chatbubbles-outline" size={24} color="#fff" />
            <Text style={styles.buttonText}>Forum</Text>
          </TouchableOpacity>
        </View>

        {/* Button Persegi Panjang */}
        <TouchableOpacity style={styles.rectangleButton} onPress={handleInfo}>
          <Ionicons name="information-circle-outline" size={32} color="#fff" />
          <Text style={styles.buttonText}>Informasi Les</Text>
        </TouchableOpacity>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <TouchableOpacity>
          <Ionicons name="home" size={28} color="#0056b3" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="chatbubbles-outline" size={28} color="#0056b3" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    paddingTop: 40,
    backgroundColor: "#88D0E4",
  },
  userIcon: {
    marginLeft: 16,
  },
  headerText: {
    flex: 1,
    textAlign: "center",
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 50,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 16,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "75%", // Membatasi lebar container row
  },
  squareButton: {
    backgroundColor: "#0056b3",
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 8,
    height: 150,
    width: 150,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    gap: 12,
  },
  rectangleButton: {
    backgroundColor: "#0056b3",
    paddingVertical: 16,
    paddingHorizontal: 60, // Lebar lebih besar untuk tombol persegi panjang
    borderRadius: 8,
    height: 100,
    width: 150,
    width: "75%", // Tombol persegi panjang
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    gap: 12,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 16,
    backgroundColor: "#bfdbfe",
  },
});
