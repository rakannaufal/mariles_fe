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
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import axios from "axios"; // Import axios untuk memanggil API
import { Platform } from "react-native";

// Sesuaikan BASE_URL dengan kondisi emulator/perangkat
const BASE_URL =
  Platform.OS === "android" ? "http://10.0.2.2:5001" : "http://localhost:5001";

const ForumScreens = () => {
  const [forumData, setForumData] = useState([]); // State untuk data forum
  const [searchQuery, setSearchQuery] = useState(""); // State untuk query pencarian
  const [loading, setLoading] = useState(true); // State untuk memonitor loading data
  const navigation = useNavigation();

  // Fungsi untuk mengambil data forum dari API
  const fetchForumData = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/api/forum`);

      if (response.data && response.data.forum) {
        // Memastikan data forum ada
        const formattedData = Object.keys(response.data.forum).map((key) => ({
          forum_id: key,
          ...response.data.forum[key],
        }));

        // Urutkan data berdasarkan waktu (misalnya, data terbaru dulu)
        formattedData.reverse(); // Membalik urutan array untuk menampilkan data terbaru di atas
        setForumData(formattedData); // Menyimpan data yang sudah diformat
      } else {
        console.log("Tidak ada data forum");
      }
    } catch (error) {
      console.error("Error fetching forum data:", error);
    } finally {
      setLoading(false); // Mengubah state loading menjadi false setelah data selesai di-fetch
    }
  };

  useEffect(() => {
    fetchForumData(); // Ambil data forum saat pertama kali komponen dimuat
  }, []);

  const handleHome = () => navigation.navigate("Home");
  const handleSave = () => navigation.navigate("Savelist");
  const handleJawaban = () => navigation.navigate("ForumAnswer");
  const handleQuestion = () => navigation.navigate("ForumQuestion");

  // Filter data forum berdasarkan pencarian
  const filteredData = forumData.filter(
    (data) =>
      data.pertanyaan &&
      data.pertanyaan.toLowerCase().includes(searchQuery.toLowerCase())
  );

  console.log("Filtered Data:", filteredData); // Cek filtered data

  // Cek jika loading true maka tampilkan indikator loading
  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <Text>Loading...</Text>
      </View>
    );
  }

  // Cek jika filteredData kosong
  if (filteredData.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.noDataText}>Tidak ada data yang ditemukan.</Text>
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
            </View>
            <Text style={styles.questionText}>{data.pertanyaan}</Text>
            <View style={styles.tagContainer}>
              <TouchableOpacity
                onPress={handleJawaban}
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
                <Text style={styles.tagText}>No tags available</Text>
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
