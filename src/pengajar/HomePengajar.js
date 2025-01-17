import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function HomePengajar() {
  const navigation = useNavigation();

  const handleAccountPengajar = () => {
    navigation.navigate("Setting"); // Mengarahkan ke halaman AccountPengajar
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
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Akun</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Les</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Forum</Text>
        </TouchableOpacity>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <TouchableOpacity>
          <FontAwesome name="home" size={28} color="#0056b3" />
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesome name="comments" size={28} color="#0056b3" />
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
  button: {
    backgroundColor: "#0056b3",
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 8,
    width: "75%",
    alignItems: "center",
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
