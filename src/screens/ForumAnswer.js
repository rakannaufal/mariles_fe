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
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";

const ForumAnswer = () => {
  const navigation = useNavigation(); // Declare the navigation hook

  const handleQuestion = () => {
    navigation.navigate("ForumQuestion");
  };
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={20} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Forum menjawab</Text>
      </View>

      <ScrollView contentContainerStyle={styles.contentContainer}>
        {/* Search Bar */}
        <View style={styles.searchBarContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Cari jawabanmu..."
          />
          <TouchableOpacity style={styles.askButton} onPress={handleQuestion}>
            <Text style={styles.askButtonText}>Bertanya</Text>
          </TouchableOpacity>
        </View>

        {/* Question */}
        <View style={styles.questionContainer}>
          <View style={styles.questionHeader}>
            <View style={styles.profileAvatar} />

            <View>
              <Text style={styles.username}>Ucup</Text>
              <View style={styles.tagsContainer}>
                <Text style={styles.tagText}>Matematika</Text>
                <Text style={styles.tagText}>SD</Text>
                <Text style={styles.tagText}>Kelas 5</Text>
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
            <View style={styles.profileAvatar} />

            <Text style={styles.username}>Samsudin</Text>
          </View>
          <Text style={styles.answerText}>Jawabannya b.172 cm</Text>
        </View>

        <View style={styles.answerContainer}>
          <View style={styles.answerHeader}>
            <View style={styles.profileAvatar} />

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
      <View style={styles.footer}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff", // Warna latar yang lebih terang
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
    padding: 8,
    marginRight: 8,
    backgroundColor: "#ffffff",
  },
  askButton: {
    backgroundColor: "#095783",
    borderRadius: 30,
    padding: 8,
  },
  askButtonText: {
    color: "#ffffff",
    fontWeight: "semibold",
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

  profileAvatar: {
    width: 40,
    height: 40,
    backgroundColor: "#ccc",
    borderRadius: 20,
    marginRight: 8,
  },
  username: {
    fontWeight: "bold",
    color: "#1f2937",
  },
  tagsContainer: {
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
    backgroundColor: "#095783",
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 10,
    marginLeft: 8,
  },
  sendButtonText: {
    color: "#ffffff",
    fontWeight: "semibold",
  },
  footer: {
    height: 60, // Tinggi footer
    backgroundColor: "#88D0E4", // Warna background footer
    width: "100%",
    position: "absolute", // Mengatur posisi absolut
    bottom: 0, // Tetap di bawah
  },
});

export default ForumAnswer;
