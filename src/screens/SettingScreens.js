import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";
import AsyncStorage from "@react-native-async-storage/async-storage";

const SettingScreens = () => {
  const handleAccount = () => navigation.navigate("Account");
  const handleContact = () => navigation.navigate("Contact");
  const handleAbout = () => navigation.navigate("About");
  const handleTerms = () => navigation.navigate("Terms");

  const [userData, setUserData] = useState(null); // State untuk menyimpan data pengguna

  const navigation = useNavigation();
  // Ambil data pengguna saat komponen dimuat
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const storedData = await AsyncStorage.getItem("userData");
        if (storedData) {
          setUserData(JSON.parse(storedData));
        }
      } catch (error) {
        console.error("Failed to load user data:", error);
      }
    };

    fetchUserData();
  }, []);

  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem("userData"); // Hapus data pengguna dari storage
      Alert.alert("Logout", "Anda telah berhasil logout.");
      navigation.replace("Starting"); // Kembali ke layar login
    } catch (error) {
      console.error("Failed to logout:", error);
    }
  };

  if (!userData) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={20} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Pengaturan</Text>
      </View>

      {/* Body Section */}
      <View style={styles.body}>
        <TouchableOpacity style={styles.button} onPress={handleAccount}>
          <Text style={styles.buttonText}>Akun</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleContact}>
          <Text style={styles.buttonText}>Hubungi Kami</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleAbout}>
          <Text style={styles.buttonText}>Tentang Kami</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleTerms}>
          <Text style={styles.buttonText}>Syarat dan Ketentuan</Text>
        </TouchableOpacity>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Versi App 1.0</Text>
        </View>
        <TouchableOpacity
          style={[styles.button, styles.logoutButton]}
          onPress={handleLogout}
        >
          <Text style={[styles.buttonText, styles.logoutButtonText]}>
            Keluar
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#88D0E4",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    paddingTop: 40,
    backgroundColor: "#fff",
    top: 0,
    width: "100%",
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
    marginLeft: "auto",
    marginRight: "auto",
  },
  body: {
    flex: 1,
    justifyContent: "justify",
    alignItems: "center",
    padding: 16,
    marginTop: 50,
  },
  button: {
    backgroundColor: "#fff",
    borderRadius: 25,
    paddingVertical: 12,
    paddingHorizontal: 32,
    marginBottom: 16,
    width: "75%",
    alignItems: "center",
  },
  buttonText: {
    color: "black",
    fontSize: 16,
  },
  logoutButton: {
    backgroundColor: "#88D0E4",
    borderRadius: 25,
    paddingVertical: 12,
    paddingHorizontal: 32,
    marginBottom: 16,
    width: "75%",
    alignItems: "center",
    backgroundColor: "#fff", // Red for "Keluar"
  },
  logoutButtonText: {
    color: "#ef4444",
  },
});

export default SettingScreens;
