// FRONTEND marilesFE : ForumQuestions
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Modal,
  TouchableWithoutFeedback,
  Alert,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { Platform } from "react-native";

const BASE_URL =
  Platform.OS === "android" ? "http://10.0.2.2:5001" : "http://localhost:5001";

export default function ForumQuestion() {
  const navigation = useNavigation();

  const [selectedTags, setSelectedTags] = useState([]);
  const [availableTags, setAvailableTags] = useState([
    // Kelas SD
    "SD Kelas 1",
    "SD Kelas 2",
    "SD Kelas 3",
    "SD Kelas 4",
    "SD Kelas 5",
    "SD Kelas 6",

    // Kelas SMP
    "SMP Kelas 7",
    "SMP Kelas 8",
    "SMP Kelas 9",

    // Kelas SMA
    "SMA Kelas 10",
    "SMA Kelas 11",
    "SMA Kelas 12",

    // Pelajaran Umum
    "Matematika",
    "Bahasa Indonesia",
    "Bahasa Inggris",
    "IPA",
    "IPS",
    "Sejarah",
    "Geografi",
    "Ekonomi",
    "Pendidikan Agama Islam",
    "Pendidikan Kewarganegaraan",
    "Pendidikan Jasmani",
    "Bahasa Arab",
    "Bahasa Mandarin",
    "Bahasa Jepang",
    "Bahasa Prancis",
    "Bahasa Spanyol",
    "Bahasa Italia",
    "Seni Rupa",
    "Seni Musik",
    "Seni Teater",
    "Pendidikan Seni",
    "Pendidikan Agama Kristen",
    "Pendidikan Agama Hindu",
    "Pendidikan Agama Buddha",
    "Pendidikan Agama Konghucu",
    "Pendidikan Kewirausahaan",
    "Ilmu Ekonomi",

    // Pelajaran Khusus
    "Fisika",
    "Kimia",
    "Biologi",
    "Teknologi Informasi",
    "Komputer",
    "Teknik Informatika",
    "Desain Grafis",
    "Fotografi",
    "Jurnalistik",
    "Desain Produk",
    "Desain Interior",
    "Arsitektur",
    "Kewirausahaan",
    "Manajemen",
    "Akuntansi",
    "Sosiologi",
    "Psikologi",
    "Antropologi",
    "Filsafat",
    "Hukum",
    "Politik",
    "Sistem Informasi",
    "Statistik",
    "Analisis Data",
    "Big Data",
    "Pengembangan Perangkat Lunak",
    "Web Development",
    "Mobile Development",
    "Game Development",
    "Cloud Computing",
    "Cybersecurity",
    "Kecerdasan Buatan",
    "Robotika",
    "Blockchain",

    // Teknik
    "Teknik Mesin",
    "Teknik Sipil",
    "Teknik Elektro",
    "Teknik Industri",
    "Teknik Kimia",
    "Teknik Lingkungan",
    "Teknik Otomotif",
    "Teknik Komputer",
    "Teknik Perkapalan",
    "Teknik Penerbangan",
    "Teknik Geodesi",
    "Teknik Geologi",
    "Teknik Material",
    "Teknik Energi Terbarukan",
    "Arsitektur Lanskap",

    // Kesehatan
    "Kesehatan Masyarakat",
    "Keperawatan",
    "Kedokteran",
    "Farmasi",
    "Gizi",
    "Psikologi Klinis",
    "Ilmu Kesehatan",

    // Pariwisata dan Hospitality
    "Pariwisata",
    "Perhotelan",
    "Restoran",
    "Kuliner",
    "Pemandu Wisata",
    "Manajemen Pariwisata",
    "Penyelenggaraan Acara",
    "Event Organizer",
    "Desain Event",
    "Pemasaran Pariwisata",
    "Perjalanan dan Logistik",

    // Seni & Kreativitas
    "Seni Teater",
    "Seni Musik",
    "Seni Tari",
    "Seni Rupa",
    "Fotografi",
    "Videografi",
    "Desain Produk",
    "Seni Grafis",
    "Animasi",
    "Game Design",
    "Penulisan Kreatif",
    "Pembuatan Film",
    "Film Dokumenter",
    "Film Fiksi",
    "Komik",
    "Literasi Digital",
    "Content Creator",
    "YouTuber",
    "Influencer",
    "Vlogger",
    "Podcast",
    "Social Media",
    "Content Marketing",

    // Pengembangan Karir dan Bisnis
    "Pemasaran Digital",
    "Manajemen Bisnis",
    "Pemasaran Sosial",
    "Pemasaran Internet",
    "Manajemen Keuangan",
    "Manajemen Sumber Daya Manusia",
    "Strategi Bisnis",
    "Analisis Pasar",
    "Startup",
    "Investasi",
    "Ekonomi Kreatif",

    // Pendidikan Vokasi
    "Pendidikan Vokasi",
    "Pelatihan Keterampilan",
    "Keahlian Teknologi",
    "Pendidikan Kejuruan",
    "Pelatihan Kerja",
    "Pengembangan Profesional",
    "Pendidikan Teknik",
    "Pendidikan Seni Vokasi",
    "Pendidikan Olahraga Vokasi",
  ]);
  const [isModalVisible, setModalVisible] = useState(false);
  const [questionText, setQuestionText] = useState("");

  const [loading, setLoading] = useState(false); // Track form submission loading state

  const [currentUser, setUserData] = useState(null); // State untuk menyimpan data pengguna

  // Ambil data pengguna saat komponen dimuat
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

  const removeTag = (tag) => {
    setSelectedTags(selectedTags.filter((t) => t !== tag));
  };

  const addTag = (tag) => {
    if (!selectedTags.includes(tag)) {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  const handleSubmit = async () => {
    if (!currentUser) {
      Alert.alert("You must be logged in and have a valid username.");
      return;
    }

    if (questionText.trim() === "") {
      Alert.alert("Please enter your question.");
      return;
    }

    if (selectedTags.length === 0) {
      Alert.alert("Please select at least one tag.");
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post(`${BASE_URL}/api/forum/addForum`, {
        user_id: currentUser.user_id,
        username: currentUser.username,
        tags: selectedTags,
        question: questionText,
      });
      if (response.status === 200) {
        Alert.alert("Question submitted successfully.");
        navigation.goBack();
      } else {
        Alert.alert("Error submitting question.");
      }
    } catch (error) {
      console.error("Error submitting question: ", error); // Tampilkan keseluruhan error
      if (error.response) {
        console.error("Error response data: ", error.response.data); // Tampilkan data error dari server
      } else if (error.request) {
        console.error("Error request: ", error.request); // Tampilkan request yang dikirim
      } else {
        console.error("Error message: ", error.message); // Tampilkan pesan error
      }
      Alert.alert("There was an issue submitting your question.");
    } finally {
      setLoading(false);
    }
    console.log({
      user_id: currentUser.user_id,
      username: currentUser.username,
      tags: selectedTags,
      question: questionText,
    });
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={20} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Forum bertanya</Text>
      </View>

      {/* Content */}
      <ScrollView contentContainerStyle={styles.content}>
        {/* Tags Section */}
        <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
          <View style={styles.section}>
            <Text style={styles.label}>Tag</Text>
            <View style={styles.tagContainer}>
              {selectedTags.map((tag, index) => (
                <View key={index} style={styles.tag}>
                  <Text style={styles.tagText}>{tag}</Text>
                  <TouchableOpacity onPress={() => removeTag(tag)}>
                    <FontAwesome
                      name="times"
                      size={16}
                      color="black"
                      style={styles.icon}
                    />
                  </TouchableOpacity>
                </View>
              ))}
            </View>
          </View>
        </TouchableWithoutFeedback>

        {/* Question Section */}
        <View style={styles.section}>
          <Text style={styles.label}>Pertanyaan</Text>
          <TextInput
            style={styles.textArea}
            multiline
            editable={true}
            value={questionText}
            onChangeText={(text) => setQuestionText(text)}
          />
          <Text style={styles.characterCount}>
            {`${questionText.length}/500`}
          </Text>
        </View>

        {/* Submit Button */}
        <TouchableOpacity
          style={styles.button}
          onPress={handleSubmit}
          disabled={loading} // Disable button when loading
        >
          <Text style={styles.buttonText}>
            {loading ? "Submitting..." : "Kirim"}
          </Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Modal for Selecting Tags */}
      <Modal
        visible={isModalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Pilih Tag</Text>
            <ScrollView contentContainerStyle={styles.tagContainer}>
              {availableTags.map((tag, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.tag}
                  onPress={() => addTag(tag)}
                >
                  <Text style={styles.tagText}>{tag}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
            <TouchableOpacity
              style={styles.modalCloseButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.modalCloseText}>Tutup</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Footer */}
      <View style={styles.footer}></View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F4F6",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    paddingTop: 40,
    backgroundColor: "#88D0E4",
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    marginLeft: "auto",
    marginRight: "auto",
  },
  content: {
    padding: 16,
  },
  section: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    fontWeight: "500",
    marginBottom: 8,
  },
  tagContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    backgroundColor: "white",
    padding: 16,
    borderRadius: 8,
  },
  tag: {
    backgroundColor: "#E5E7EB",
    paddingVertical: 4,
    paddingHorizontal: 6,
    borderRadius: 16,
    flexDirection: "row",
    alignItems: "center",
  },
  tagText: {
    fontSize: 14,
  },
  icon: {
    marginLeft: 8,
  },
  textArea: {
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    borderColor: "#E5E7EB",
    borderWidth: 1,
    padding: 8,
    height: 120,
    textAlignVertical: "top",
  },
  characterCount: {
    textAlign: "right",
    fontSize: 12,
    color: "#6B7280",
  },
  button: {
    backgroundColor: "#095783",
    padding: 8,
    borderRadius: 30,
    alignItems: "center",
  },
  buttonText: {
    color: "#FFFFFF",
    fontWeight: "semibold",
    fontSize: 14,
  },
  footer: {
    height: 60, // Footer height
    backgroundColor: "#88D0E4", // Footer background color
    width: "100%",
    position: "absolute", // Fixed at the bottom
    bottom: 0,
  },

  // Modal Styles
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContainer: {
    backgroundColor: "white",
    padding: 16,
    borderRadius: 8,
    width: "80%",
    maxHeight: "70%",
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 16,
  },
  modalContent: {
    marginBottom: 16,
  },
  modalCloseButton: {
    backgroundColor: "#095783",
    padding: 12,
    alignItems: "center",
    borderRadius: 8,
  },
  modalCloseText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});
