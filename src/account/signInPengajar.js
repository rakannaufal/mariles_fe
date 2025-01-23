// LoginScreenPengajar.js
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ActivityIndicator,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import BASE_URL from "../config/config";

export default function LoginScreenPengajar() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation();

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleLoginPengajar = async () => {
    if (!email || !password) {
      Alert.alert("Error", "Email dan password tidak boleh kosong.");
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch(`${BASE_URL}/api/auth/loginPengajar`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      setIsLoading(false);

      if (response.ok && data.success) {
        if (data.userData) {
          await AsyncStorage.setItem("userData", JSON.stringify(data.userData));
          console.log("Data pengguna berhasil disimpan:", data.userData);
          navigation.navigate("HomePengajar");
        } else {
          Alert.alert(
            "Error",
            "Data pengguna tidak ditemukan di respons server."
          );
        }
      } else {
        Alert.alert("Error", data.message || "Login gagal.");
      }
    } catch (error) {
      setIsLoading(false);
      console.error("Network Error:", error);
      Alert.alert("Error", "Tidak dapat terhubung ke server.");
    }
  };

  const handleTeacherLogin = () => {
    navigation.navigate("SignInPelajar");
  };

  const handleRegister = () => {
    navigation.navigate("SignUpPengajar");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Masuk Sebagai Pengajar</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#555"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#555"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TouchableOpacity
        style={styles.buttonPrimary}
        onPress={handleLoginPengajar}
        disabled={isLoading}
      >
        {isLoading ? (
          <ActivityIndicator size="small" color="#fff" />
        ) : (
          <Text style={styles.buttonPrimaryText}>Masuk</Text>
        )}
      </TouchableOpacity>
      <Text style={styles.labelText}>Masuk sebagai pelajar</Text>
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
