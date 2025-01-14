//AccountScreens.js
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

const AccountScreens = () => {
  const navigation = useNavigation();
  const [userData, setUserData] = useState(null); // State untuk menyimpan data pengguna

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
            value={userData.username} // Tampilkan username
            editable={false}
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={[styles.input, styles.readOnlyInput]}
            value={userData.email} // Tampilkan email
            editable={false}
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Nomor Handphone</Text>
          <TextInput
            style={[styles.input, styles.readOnlyInput]}
            value={userData.phone} // Tampilkan nomor telepon
            editable={false}
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Alamat</Text>
          <TextInput
            style={[styles.input, styles.readOnlyInput]}
            value={userData.address} // Tampilkan alamat
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
    paddingTop: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    paddingTop: 40,
    backgroundColor: "#88D0E4",
  },
  buttonFilter: {
    backgroundColor: "#0D5782",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  buttonFilterText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
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
  inputGroupRow: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    marginBottom: 8,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    borderBottomWidth: 1,
    borderColor: "#000",
    paddingVertical: 4,
    paddingHorizontal: 8,
    fontSize: 16,
  },
  flexInput: {
    flex: 1,
  },
  readOnlyInput: {
    color: "#6b7280", // Warna teks menjadi abu-abu untuk menunjukkan hanya baca
    backgroundColor: "#f3f4f6", // Latar belakang untuk membedakan input hanya baca
  },
  changeButton: {
    marginLeft: 8,
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 4,
  },
  changeButtonText: {
    fontSize: 14,
  },
  disabledText: {
    color: "#9ca3af", // Warna teks untuk tombol yang dinonaktifkan
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

export default AccountScreens;
