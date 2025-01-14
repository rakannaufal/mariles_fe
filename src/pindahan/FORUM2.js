import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const App = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <FontAwesome name="arrow-left" size={24} color="black" />
        <Text style={styles.headerTitle}>Forum</Text>
      </View>

      <ScrollView contentContainerStyle={styles.contentContainer}>
        {/* Search Bar */}
        <View style={styles.searchBarContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Cari jawabanmu..."
          />
          <TouchableOpacity style={styles.askButton}>
            <Text style={styles.askButtonText}>Bertanya</Text>
          </TouchableOpacity>
        </View>

        {/* Question */}
        <View style={styles.questionContainer}>
          <View style={styles.questionHeader}>
            <Image
              source={{ uri: "https://placehold.co/40x40" }}
              style={styles.avatar}
            />
            <View>
              <Text style={styles.username}>Ucup</Text>
              <View style={styles.tagsContainer}>
                <Text style={styles.tag}>Matematika</Text>
                <Text style={styles.tag}>SD</Text>
                <Text style={styles.tag}>Kelas 5</Text>
              </View>
            </View>
            <Text style={styles.commentsCount}>2 Komentar</Text>
          </View>
          <Text style={styles.questionText}>
            1. Tinggi rata-rata dari 15 anak adalah 162 cm. Setelah ditambah
            tinggi 5 anak, tinggi rata-rata menjadi 166 cm. Tinggi rata-rata 5
            anak tersebut adalah
            {"\n"}a. 168 cm
            {"\n"}b. 172 cm
            {"\n"}c. 178 cm
            {"\n"}d. 179 cm
            {"\n"}e. 182 cm
          </Text>
        </View>

        {/* Answers */}
        <View style={styles.answerContainer}>
          <View style={styles.answerHeader}>
            <Image
              source={{ uri: "https://placehold.co/40x40" }}
              style={styles.avatar}
            />
            <Text style={styles.username}>Samsudin</Text>
          </View>
          <Text style={styles.answerText}>Jawabannya b.172 cm</Text>
        </View>

        <View style={styles.answerContainer}>
          <View style={styles.answerHeader}>
            <Image
              source={{ uri: "https://placehold.co/40x40" }}
              style={styles.avatar}
            />
            <Text style={styles.username}>Ucok</Text>
          </View>
          <Text style={styles.answerText}>saya rasa jawabannya b.172 cm</Text>
        </View>

        {/* Comment Input */}
        <View style={styles.commentInputContainer}>
          <TextInput
            style={styles.commentInput}
            placeholder="Beri komentar..."
          />
          <TouchableOpacity style={styles.sendButton}>
            <Text style={styles.sendButtonText}>Kirim</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9fafb", // Warna latar yang lebih terang
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#2563eb", // Warna biru lebih gelap untuk header
    padding: 16,
    paddingTop: 32, // Memberi ruang lebih ke atas
  },
  headerTitle: {
    flex: 1,
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
    color: "#ffffff", // Warna teks putih
  },
  contentContainer: {
    padding: 16,
  },
  searchBarContainer: {
    flexDirection: "row",
    marginBottom: 16,
  },
  searchInput: {
    flex: 1,
    borderColor: "#d1d5db",
    borderWidth: 1,
    borderRadius: 16, // Membuat sudut lebih melengkung
    paddingHorizontal: 16,
    paddingVertical: 10,
    marginRight: 8,
    backgroundColor: "#ffffff",
  },
  askButton: {
    backgroundColor: "#2563eb",
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  askButtonText: {
    color: "#ffffff",
    fontWeight: "bold",
  },
  questionContainer: {
    backgroundColor: "#ffffff",
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  questionHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 8,
  },
  username: {
    fontWeight: "bold",
    color: "#1f2937",
  },
  tagsContainer: {
    flexDirection: "row",
    marginTop: 4,
  },
  tag: {
    backgroundColor: "#93c5fd",
    color: "#1e3a8a",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 9999,
    fontSize: 12,
    marginRight: 4,
  },
  commentsCount: {
    marginLeft: "auto",
    color: "#6b7280",
    fontSize: 12,
  },
  questionText: {
    fontSize: 14,
    color: "#374151",
    lineHeight: 20,
  },
  answerContainer: {
    backgroundColor: "#ffffff",
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  answerHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  answerText: {
    fontSize: 14,
    color: "#374151",
    lineHeight: 20,
  },
  commentInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 16,
  },
  commentInput: {
    flex: 1,
    borderColor: "#d1d5db",
    borderWidth: 1,
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: "#ffffff",
  },
  sendButton: {
    backgroundColor: "#2563eb",
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 10,
    marginLeft: 8,
  },
  sendButtonText: {
    color: "#ffffff",
    fontWeight: "bold",
  },
});

export default App;
