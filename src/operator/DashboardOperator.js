import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons"; // or use react-native-vector-icons
import { useNavigation } from "@react-navigation/native";
import Entypo from "react-native-vector-icons/Entypo";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Dashboard = () => {
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

  const handleContactPress = () => {
    navigation.navigate("DataContact");
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Dashboard</Text>
        <TouchableOpacity onPress={handleLogout}>
          <Entypo name="log-out" size={24} style={styles.userIcon} />
        </TouchableOpacity>
      </View>

      {/* Stats Card */}
      <View style={styles.cardContainer}>
        <View style={styles.card}>
          <Text style={styles.cardText}>Total Pelajar: 11</Text>
          <Text style={styles.cardText}>Total Pengajar: 6</Text>
          <Text style={styles.cardText}>Total User: 17</Text>

          <TouchableOpacity
            style={styles.contactContainer}
            onPress={handleContactPress}
          >
            <Text style={styles.contactText}>Contact</Text>
            <View style={styles.contactIconContainer}>
              <FontAwesome5 name="comment-dots" size={20} color="#00509E" />
              <Text style={styles.contactCount}>5</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>

      {/* Buttons Grid */}
      <View style={styles.gridContainer}>
        {buttonData.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.gridItem}
            onPress={() => navigation.navigate(item.navigateTo)} // Navigate to specific screen
          >
            <FontAwesome5
              name={item.icon}
              size={30}
              color="#fff"
              style={styles.gridImage}
            />
            <Text style={styles.gridText}>{item.label}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Footer */}
      <View style={styles.footer}></View>
    </View>
  );
};

const buttonData = [
  {
    label: "Banner",
    icon: "image", // Image icon for the Banner
    navigateTo: "BannerScreen", // Name of the screen to navigate
  },
  {
    label: "Data Forum",
    icon: "comments", // Comments icon for Forum
    navigateTo: "DataForum",
  },
  {
    label: "Data Pelajar",
    icon: "user-graduate", // User graduate icon for Pelajar
    navigateTo: "DataPelajar",
  },
  {
    label: "Data Pengajar",
    icon: "chalkboard-teacher", // Chalkboard teacher icon for Pengajar
    navigateTo: "DataPengajar",
  },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
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
  cardContainer: {
    width: "90%",
    marginTop: 10,
  },
  card: {
    backgroundColor: "#00509E",
    borderRadius: 8,
    padding: 20,
    paddingVertical: 30,
  },
  cardText: {
    color: "#fff",
    marginBottom: 16,
    fontSize: 16,
  },
  contactContainer: {
    backgroundColor: "#B3D9FF",
    padding: 12,
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 16,
  },
  contactText: {
    color: "#00509E",
  },
  contactIconContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  contactCount: {
    marginLeft: 8,
    color: "#00509E",
  },
  gridContainer: {
    width: "90%",
    marginTop: 20,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  gridItem: {
    width: "48%",
    backgroundColor: "#00509E",
    borderRadius: 8,
    padding: 16,
    alignItems: "center",
    marginBottom: 10,
  },
  gridImage: {
    marginBottom: 8,
  },
  gridText: {
    color: "#fff",
  },
  footer: {
    height: 60, // Footer height
    backgroundColor: "#88D0E4", // Footer background color
    width: "100%",
    position: "absolute", // Fixed at the bottom
    bottom: 0,
  },
});

export default Dashboard;
