import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

import BASE_URL from "../config/config";

export default function ContactScreens() {
  const [nameText, setNameText] = useState("");
  const [emailText, setEmailText] = useState("");
  const [messageText, setMessageText] = useState("");

  const [loading, setLoading] = useState(false); // Track form submission loading state

  const [currentUser, setUserData] = useState(null); // State untuk menyimpan data pengguna
  const navigation = useNavigation();
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const storedData = await AsyncStorage.getItem("userData");
        console.log("Stored Data: ", storedData); // Log data yang disimpan
        if (storedData) {
          const parsedData = JSON.parse(storedData);
          console.log("Parsed Data: ", parsedData); // Log data setelah diparse
          setUserData(parsedData);
        }
      } catch (error) {
        console.error("Failed to load user data:", error);
      }
    };

    fetchUserData();
  }, []);
  const handleSubmitContact = async () => {
    if (!currentUser) {
      Alert.alert("You must be logged in and have a valid username.");
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post(`${BASE_URL}/api/contact/addMessage`, {
        user_id: currentUser.user_id,
        name: nameText,
        email: emailText,
        message: messageText,
      });
      if (response.status === 200) {
        Alert.alert("message submitted successfully.");
        navigation.goBack();
      } else {
        Alert.alert("Error submitting message.");
      }
    } catch (error) {
      console.error("Error submitting message: ", error); // Tampilkan keseluruhan error
      if (error.response) {
        console.error("Error response data: ", error.response.data); // Tampilkan data error dari server
      } else if (error.request) {
        console.error("Error request: ", error.request); // Tampilkan request yang dikirim
      } else {
        console.error("Error message: ", error.message); // Tampilkan pesan error
      }
      Alert.alert("There was an issue submitting your message.");
    } finally {
      setLoading(false);
    }
    console.log({
      user_id: currentUser.user_id,
      name: nameText,
      email: emailText,
      message: messageText,
    });
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={20} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Hubungi Kami</Text>
      </View>
      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Nama lengkap</Text>
          <TextInput
            style={styles.input}
            multiline
            editable={true}
            value={nameText}
            placeholder="Nama Lengkap"
            onChangeText={(text) => setNameText(text)}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Email"
            keyboardType="email-address"
            value={emailText}
            onChangeText={(text) => setEmailText(text)}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Pesan</Text>
          <TextInput
            style={styles.textArea}
            placeholder="Pesan"
            multiline
            numberOfLines={4}
            value={messageText}
            onChangeText={(text) => setMessageText(text)}
          />
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={handleSubmitContact}
          disabled={loading} // Disable button when loading
        >
          <Text style={styles.buttonText}>
            {loading ? "Submitting..." : "Kirim"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

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
  formContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  inputContainer: {
    marginBottom: 16,
    width: "100%",
  },
  label: {
    fontSize: 14,
    fontWeight: "semibold",
    color: "black",
    marginBottom: 8,
  },
  input: {
    width: "100%",
    padding: 12,
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 8,
    backgroundColor: "white",
  },
  textArea: {
    width: "100%",
    padding: 12,
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 8,
    height: 150,
    textAlignVertical: "top",
    backgroundColor: "white",
  },
  button: {
    backgroundColor: "#095783",
    width: "100%",
    paddingVertical: 12,
    borderRadius: 50,
    alignItems: "center",
    marginTop: 16,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
