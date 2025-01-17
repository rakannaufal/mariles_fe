import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Alert,
  Platform,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useRoute, useNavigation } from "@react-navigation/native";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Base URL for API
const BASE_URL =
  Platform.OS === "android" ? "http://10.0.2.2:5001" : "http://localhost:5001";

const ForumAnswer = () => {
  const route = useRoute();
  const [answerText, setAnswerText] = useState("");
  const [loading, setLoading] = useState(false);
  const [answers, setAnswers] = useState([]); // Store answers in state
  const navigation = useNavigation();
  const { forumId, question, username, tag } = route.params;
  const [currentUser, setUserData] = useState(null);

  useEffect(() => {
    // Get user data from AsyncStorage
    const fetchUserData = async () => {
      try {
        const storedData = await AsyncStorage.getItem("userData");
        if (storedData) {
          const parsedData = JSON.parse(storedData);
          setUserData(parsedData);
        }
      } catch (error) {
        console.error("Failed to load user data:", error);
      }
    };

    // Fetch the answers for the forum question
    fetchUserData();
    fetchAnswers();
  }, [forumId]);

  // Function to fetch answers
  const fetchAnswers = async () => {
    try {
      const response = await axios.get(
        `${BASE_URL}/api/forum/answers/${forumId}`
      );
      if (response.status === 200) {
        setAnswers(response.data.answers);
      } else {
        Alert.alert("Failed to fetch answers.");
      }
    } catch (error) {
      Alert.alert("Error fetching answers.");
    }
  };

  const handleAnswer = async () => {
    if (!currentUser) {
      Alert.alert("You must be logged in to answer.");
      return;
    }

    if (answerText.trim() === "") {
      Alert.alert("Please enter an answer.");
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post(`${BASE_URL}/api/forum/addAnswer`, {
        forum_id: forumId,
        user_id: currentUser.user_id,
        username: currentUser.username,
        answer: answerText,
      });

      if (response.status === 200) {
        Alert.alert("Answer submitted successfully.");
        fetchAnswers(); // Refresh answers after submission
        setAnswerText(""); // Clear the input field
      } else {
        Alert.alert("Error submitting answer.");
      }
    } catch (error) {
      Alert.alert("There was an issue submitting your answer.");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={20} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Forum Answer</Text>
      </View>

      <ScrollView contentContainerStyle={styles.contentContainer}>
        {/* Question */}
        <View style={styles.questionContainer}>
          <View style={styles.questionHeader}>
            <View style={styles.profileAvatar} />
            <Text style={styles.username}>{username}</Text>
            <Text style={styles.commentsCount}>{answers.length} Comments</Text>
            {/* Updated line */}
          </View>
          <Text style={styles.questionText}>{question}</Text>
          <View style={styles.tagsContainer}>
            {tag && tag.length > 0 ? (
              tag.map((tag, idx) => (
                <Text key={idx} style={styles.tagText}>
                  {tag}
                </Text>
              ))
            ) : (
              <Text style={styles.tagText}>No tags available</Text>
            )}
          </View>
        </View>
        {/* Display Answers */}

        <View>
          {answers.length === 0 ? (
            <Text>Tidak ada jawaban.</Text>
          ) : (
            answers.map((answer) => (
              <View key={answer.answer_id} style={styles.answerContainer}>
                <View style={styles.answerHeader}>
                  <View style={styles.profileAvatar} />
                  <Text style={styles.username}>{answer.username}</Text>
                </View>
                <Text style={styles.answerText}>{answer.answer}</Text>
              </View>
            ))
          )}
        </View>

        {/* Comment Input */}
        <View style={styles.commentInputContainer}>
          <TextInput
            style={styles.commentInput}
            multiline
            value={answerText}
            onChangeText={(text) => setAnswerText(text)}
            placeholder="Enter your answer..."
          />

          <TouchableOpacity
            style={styles.sendButton}
            onPress={handleAnswer}
            disabled={loading} // Disable button when loading
          >
            <Text style={styles.sendButtonText}>
              {loading ? "Mengirim..." : "Kirim"}
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
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
  tagsContainer: {
    borderTopWidth: 1,
    paddingTop: 10,
    marginTop: 10,
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
});

export default ForumAnswer;
