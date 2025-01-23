import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Alert,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import BASE_URL from "../config/config";

const AccountPengajar = () => {
  const navigation = useNavigation();
  const [userData, setUserData] = useState(null); // State untuk menyimpan data pengguna

  // Fungsi untuk mengambil data pengguna dari API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = await AsyncStorage.getItem("token");
        if (!token) {
          Alert.alert("Error", "Token tidak ditemukan, silakan login ulang.");
          navigation.replace("Starting");
          return;
        }

        const response = await axios.get(`${BASE_URL}/pengajar/details`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        console.log("Response Data: ", response.data);

        if (response.data.success && response.data.data) {
          setUserData(response.data.data); // Simpan data ke state
        } else {
          Alert.alert(
            "Error",
            response.data.message || "Data pengajar tidak ditemukan."
          );
        }
      } catch (error) {
        console.error("Error fetching data:", error.response || error);
        Alert.alert(
          "Error",
          "Gagal mengambil data pengguna. Pastikan server berjalan."
        );
      }
    };

    fetchData();
  }, [navigation]);

  // Fungsi untuk logout
  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem("token");
      Alert.alert("Logout", "Anda telah berhasil logout.");
      navigation.replace("Starting");
    } catch (error) {
      console.error("Failed to logout:", error);
    }
  };

  // Tampilkan loading jika data belum ada
  if (!userData) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  // Tampilkan UI dengan data pengguna
  return (
    <View>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={20} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Akun Saya</Text>
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Username</Text>
          <TextInput
            style={[styles.input, styles.readOnlyInput]}
            value={userData.username || ""}
            editable={false}
          />
        </View>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={[styles.input, styles.readOnlyInput]}
            value={userData.email || ""}
            editable={false}
          />
        </View>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Nomor Handphone</Text>
          <TextInput
            style={[styles.input, styles.readOnlyInput]}
            value={userData.phone || ""}
            editable={false}
          />
        </View>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Alamat</Text>
          <TextInput
            style={[styles.input, styles.readOnlyInput]}
            value={userData.address || ""}
            editable={false}
          />
        </View>

        <View style={styles.logoutContainer}>
          <TouchableOpacity onPress={handleLogout}>
            <Text style={styles.logoutText}>Keluar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    paddingTop: 40,
    backgroundColor: "#88D0E4",
  },
  headerText: {
    flex: 1,
    textAlign: "center",
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  content: {
    padding: 16,
  },
  inputGroup: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    marginBottom: 8,
  },
  input: {
    borderBottomWidth: 1,
    borderColor: "#000",
    paddingVertical: 4,
    paddingHorizontal: 8,
    fontSize: 16,
  },
  readOnlyInput: {
    color: "#6b7280",
    backgroundColor: "#f3f4f6",
  },
  logoutContainer: {
    marginTop: 32,
    alignItems: "center",
  },
  logoutText: {
    color: "#ef4444",
    fontSize: 18,
  },
});

export default AccountPengajar;
