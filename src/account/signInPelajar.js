// Frontend marilesFE: src/account/signInPelajar.js

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
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Platform } from "react-native";

const BASE_URL =
  Platform.OS === "android" ? "http://10.0.2.2:5001" : "http://localhost:5001";

export default function SignInPelajar() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  const validateInput = () => {
    if (!email || !password) {
      Alert.alert("Error", "Email dan password harus diisi.");
      return false;
    }
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(email)) {
      Alert.alert("Error", "Email tidak valid.");
      return false;
    }
    if (password.length < 6) {
      Alert.alert("Error", "Password harus lebih dari 5 karakter.");
      return false;
    }
    return true;
  };

  const handleLogin = async () => {
    if (!validateInput()) return;

    try {
      const response = await fetch(`${BASE_URL}/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        if (data.token) {
          // Cek apakah token ada di respons
          // Simpan token dan data pengguna di AsyncStorage
          await AsyncStorage.setItem("token", data.token);
          await AsyncStorage.setItem("userData", JSON.stringify(data.userData));

          Alert.alert(
            "Sukses",
            `Login berhasil! Selamat datang, ${data.userData.username}.`
          );
          navigation.navigate("Home");
        } else {
          Alert.alert("Error", "Token tidak diterima dari server.");
        }
      } else {
        Alert.alert("Error", data.message || "Login gagal.");
      }
    } catch (error) {
      console.error("Network Error:", error);
      Alert.alert("Error", "Tidak dapat terhubung ke server.");
    }
  };

  const handleTeacherLogin = () => {
    navigation.navigate("SignInPengajar");
  };

  const handleRegister = () => {
    navigation.navigate("SignUpPelajar");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Masuk sebagai pelajar</Text>

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

      <TouchableOpacity style={styles.buttonPrimary} onPress={handleLogin}>
        <Text style={styles.buttonPrimaryText}>Masuk</Text>
      </TouchableOpacity>

      <Text style={styles.labelText}>Masuk sebagai pengajar</Text>
      <TouchableOpacity
        style={styles.buttonSecondary}
        onPress={handleTeacherLogin}
      >
        <Text style={styles.buttonSecondaryText}>Masuk</Text>
      </TouchableOpacity>

      <Text style={styles.registerText}>Belum punya akun?</Text>
      <TouchableOpacity style={styles.buttonSecondary} onPress={handleRegister}>
        <Text style={styles.buttonSecondaryText}>Daftar</Text>
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
    marginBottom: 30,
  },
  input: {
    width: "100%",
    height: 50,
    backgroundColor: "#FFFFFF",
    borderRadius: 25,
    paddingLeft: 20,
    marginBottom: 20,
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
    marginBottom: 30,
    elevation: 3,
  },
  buttonPrimaryText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },
  labelText: {
    color: "#000",
    fontSize: 14,
    marginBottom: 10,
  },
  buttonSecondary: {
    width: "100%",
    backgroundColor: "#FFFFFF",
    height: 50,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
    elevation: 3,
  },
  buttonSecondaryText: {
    color: "#000",
    fontSize: 16,
    fontWeight: "600",
  },
  registerText: {
    fontSize: 14,
    color: "#000",
    marginBottom: 10,
  },
});
