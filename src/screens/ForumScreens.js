import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";
import axios from "axios"; // Import axios untuk memanggil API
import { FontAwesome } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";

import BASE_URL from "../config/config";

const ForumScreens = () => {
  const [forumData, setForumData] = useState([]); // State untuk data forum
  const [searchQuery, setSearchQuery] = useState(""); // State untuk query pencarian
  const [loading, setLoading] = useState(true); // State untuk memonitor loading data
  const navigation = useNavigation();
  const [currentUser, setCurrentUser] = useState(null);

  // Fungsi untuk mengambil data forum dari API
  const fetchForumData = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/api/forum`);
      if (response.data && response.data.forum) {
        const formattedData = Object.keys(response.data.forum).map((key) => ({
          forum_id: key,
          ...response.data.forum[key],
        }));
        formattedData.reverse(); // Menampilkan data terbaru di atas
        setForumData(formattedData);
      } else {
        console.log("Tidak ada data forum");
      }
    } catch (error) {
      console.error("Error fetching forum data:", error);
    } finally {
      setLoading(false); // Set loading ke false setelah selesai
    }
  };

  // Fungsi untuk mengambil data user yang sedang login
  const fetchCurrentUser = async () => {
    try {
      const storedData = await AsyncStorage.getItem("userData");
      if (storedData) {
        const parsedData = JSON.parse(storedData);
        setCurrentUser(parsedData.username); // Menggunakan username untuk pengecekan
      }
    } catch (error) {
      console.error("Failed to load user data:", error);
    }
  };
  useEffect(() => {
    fetchCurrentUser();
    fetchForumData();

    // Interval untuk refresh data setiap 60 detik
    const interval = setInterval(() => {
      console.log("Refreshing forum data...");
      fetchForumData();
    }, 5000);

    // Membersihkan interval saat komponen di-unmount
    return () => clearInterval(interval);
  }, []);

  const handleHome = () => navigation.navigate("Home");
  const handleSave = () => navigation.navigate("Savelist");
  const handleJawaban = (forumId, question, username, tag) => {
    navigation.navigate("ForumAnswer", { forumId, question, username, tag });
  };
  const handleQuestion = () => navigation.navigate("ForumQuestion");

  // Filter data forum berdasarkan pencarian
  const filteredData = forumData.filter(
    (data) =>
      data.pertanyaan &&
      data.pertanyaan.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Fungsi untuk menghapus pertanyaan forum
  const handleDelete = async (forumId) => {
    try {
      if (!currentUser) {
        console.error("User is not logged in.");
        return;
      }

      console.log("Attempting to delete forum ID:", forumId);
      console.log("Current user:", currentUser); // Debug log to check the username

      // Ensure you're passing the correct user_id (likely 'uid' from Firebase)
      const response = await axios.delete(
        `${BASE_URL}/api/forum/deleteForum/${forumId}`,
        {
          headers: { "Content-Type": "application/json" },
          data: { user_id: currentUser.uid }, // Pass actual user_id (uid)
        }
      );

      if (response.data.success) {
        console.log("Forum deleted successfully:", forumId);
        setForumData(forumData.filter((data) => data.forum_id !== forumId)); // Remove the deleted forum from the local state
      } else {
        console.error(
          "Failed to delete forum question:",
          response.data.message
        );
      }
    } catch (error) {
      console.error(
        "Error deleting forum question:",
        error.response?.data || error.message
      );
    }
  };

  // Tampilkan indikator loading jika masih memuat data
  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={20} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Forum</Text>
      </View>

      <View style={styles.searchContainer}>
        <TextInput
          style={styles.input}
          placeholder="Cari jawabanmu..."
          value={searchQuery}
          onChangeText={(text) => setSearchQuery(text)}
        />
        <TouchableOpacity style={styles.askButton} onPress={handleQuestion}>
          <Text style={styles.askButtonText}>Bertanya</Text>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.contentContainer}>
        {filteredData.map((data) => (
          <View key={data.forum_id} style={styles.card}>
            <View style={styles.cardHeader}>
              <View style={styles.profileContainer}>
                <View style={styles.profileAvatar} />
                <Text style={styles.profileName}>{data.username}</Text>
              </View>
              {/* Tampilkan tombol hapus hanya jika username cocok */}
              {data.username === currentUser && (
                <TouchableOpacity
                  onPress={() => handleDelete(data.forum_id)}
                  style={styles.deleteButton}
                >
                  <FontAwesome name="trash" size={20} color="red" />
                </TouchableOpacity>
              )}
            </View>
            <Text style={styles.questionText}>{data.pertanyaan}</Text>
            <View style={styles.tagContainer}>
              <TouchableOpacity
                onPress={() =>
                  handleJawaban(
                    data.forum_id,
                    data.pertanyaan,
                    data.username,
                    data.tag
                  )
                }
                style={styles.commentButton}
              >
                <Text style={styles.commentButtonText}>Beri jawaban</Text>
              </TouchableOpacity>
              {data.tag && data.tag.length > 0 ? (
                data.tag.map((tag, idx) => (
                  <Text key={idx} style={styles.tagText}>
                    {tag}
                  </Text>
                ))
              ) : (
                <Text style={styles.tagText}>Tidak ada tag tersedia</Text>
              )}
            </View>
          </View>
        ))}
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity onPress={handleHome}>
          <FontAwesome name="home" size={24} />
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesome name="comments" size={24} style={{ color: "white" }} />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleSave}>
          <FontAwesome name="bookmark" size={24} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

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
    top: 0,
    width: "100%",
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    marginLeft: "auto",
    marginRight: "auto",
  },
  searchContainer: {
    flexDirection: "row",
    padding: 16,
  },
  input: {
    flex: 1,
    padding: 8,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 16,
    marginRight: 8,
  },
  askButton: {
    backgroundColor: "#095783",
    padding: 8,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  askButtonText: {
    fontSize: 14,
    fontWeight: "semibold",
    color: "#fff",
  },
  contentContainer: {
    paddingBottom: 16,
    paddingTop: 16, // Menambahkan padding di atas agar tidak menyentuh footer
  },
  card: {
    backgroundColor: "white",
    padding: 16,
    borderRadius: 8,
    margin: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  profileAvatar: {
    width: 32,
    height: 32,
    backgroundColor: "#ccc",
    borderRadius: 16,
    marginRight: 8,
  },
  profileName: {
    fontWeight: "bold",
  },
  questionText: {
    fontSize: 14,
    marginBottom: 8,
    borderBottomWidth: 1,
    padding: 10,
  },
  commentButton: {
    backgroundColor: "#095783",
    padding: 8,
    borderRadius: 30,
    marginBottom: 8,
  },
  commentButtonText: {
    color: "#fff",
    fontWeight: "semibold",
    textAlign: "center",
  },
  tagContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  tagText: {
    fontSize: 12,
    color: "#000",
    backgroundColor: "#fff",
    padding: 8,
    borderRadius: 8,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: "#000",
    fontWeight: "semibold",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    height: 60,
    backgroundColor: "#88D0E4",
    width: "100%",
    position: "absolute",
    paddingVertical: 16,
    bottom: 0,
    marginTop: 40,
  },
  deleteButton: {
    padding: 8,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  noDataText: {
    textAlign: "center",
    padding: 16,
    fontSize: 16,
  },
});

export default ForumScreens;
