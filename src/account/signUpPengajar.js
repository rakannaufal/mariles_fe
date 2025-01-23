import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import BASE_URL from "../config/config";

export default function RegisterScreenPengajar() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const navigation = useNavigation();

  const handleRegisterPengajar = async () => {
    if (
      !username ||
      !email ||
      !password ||
      !confirmPassword ||
      !phone ||
      !address
    ) {
      Alert.alert("Error", "Semua field harus diisi.");
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert("Error", "Password dan konfirmasi password tidak cocok.");
      return;
    }

    try {
      // Mengirimkan data ke backend API untuk registrasi
      const response = await fetch(`${BASE_URL}/api/auth/registerPengajar`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, password, phone, address }),
      });

      const data = await response.json(); // Pastikan ini ada untuk mengubah response menjadi JSON
      console.log(data); // Debug log

      if (data.success) {
        Alert.alert(
          "Registrasi Berhasil",
          `Akun berhasil dibuat untuk email ${email}.`,
          [{ text: "OK", onPress: () => navigation.navigate("SignInPengajar") }]
        );
      } else {
        Alert.alert("Error", data.message);
      }
    } catch (error) {
      console.error(error);
      Alert.alert("Error", "Terjadi kesalahan, coba lagi.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Daftar Mariles Pengajar</Text>

      <TextInput
        style={styles.input}
        placeholder="Username"
        placeholderTextColor="#555"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#555"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#555"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        placeholder="Konfirmasi Password"
        placeholderTextColor="#555"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        placeholder="No. Handphone"
        placeholderTextColor="#555"
        value={phone}
        onChangeText={setPhone}
        keyboardType="phone-pad"
      />
      <TextInput
        style={styles.input}
        placeholder="Alamat"
        placeholderTextColor="#555"
        value={address}
        onChangeText={setAddress}
      />

      <TouchableOpacity
        style={styles.buttonPrimary}
        onPress={handleRegisterPengajar}
      >
        <Text style={styles.buttonPrimaryText}>Daftar</Text>
      </TouchableOpacity>

      <Text style={styles.subText}>Sudah punya akun?</Text>
      <TouchableOpacity
        style={styles.buttonSecondary}
        onPress={() => navigation.navigate("SignInPengajar")}
      >
        <Text style={styles.buttonSecondaryText}>Masuk</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#87CFE3",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  header: {
    fontSize: 22,
    fontWeight: "600",
    color: "#000",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    height: 50,
    backgroundColor: "#FFFFFF",
    borderRadius: 25,
    paddingLeft: 20,
    marginBottom: 15,
    color: "#000",
    fontSize: 16,
    elevation: 3,
  },
  buttonPrimary: {
    width: "100%",
    backgroundColor: "#0D5782",
    height: 50,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 15,
    elevation: 3,
  },
  buttonPrimaryText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },
  subText: {
    fontSize: 14,
    color: "#000",
    marginBottom: 10,
  },
  buttonSecondary: {
    width: "100%",
    backgroundColor: "#FFFFFF",
    height: 50,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 15,
    elevation: 3,
  },
  buttonSecondaryText: {
    color: "#000",
    fontSize: 16,
    fontWeight: "600",
  },
});
