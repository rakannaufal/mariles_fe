import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import FooterNoTab from "../components/FooterNoTab";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";

const App = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={20} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Banner</Text>
      </View>

      {/* Main Content with ScrollView */}
      <ScrollView
        contentContainerStyle={styles.main}
        showsVerticalScrollIndicator={false}
      >
        {/* Banner 1 */}
        <View style={styles.bannerContainer}>
          <Text style={styles.bannerTitle}>Banner 1</Text>
          <Image
            style={styles.bannerImage}
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStXO1wnLUvvpcJyBwbhC-cgFFrjKlcJdgsuQ&s",
            }}
          />
        </View>

        {/* Banner 2 */}
        <View style={styles.bannerContainer}>
          <Text style={styles.bannerTitle}>Banner 2</Text>
          <Image
            style={styles.bannerImage}
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQumAaAr_NbThocz92ve4UFB_hzWUUG1sO-XGavNa6D9_9mYkI-fNv0ulhtZJHxkPQM5i8&usqp=CAU",
            }}
          />
        </View>

        {/* Banner 3 */}
        <View style={styles.bannerContainer}>
          <Text style={styles.bannerTitle}>Banner 3</Text>
          <View style={styles.uploadContainer}>
            <Ionicons name="image" size={40} color="white" />
            <TouchableOpacity style={styles.uploadButton}>
              <Text style={styles.uploadButtonText}>Upload</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Save Button */}
        <TouchableOpacity style={styles.saveButton}>
          <Text style={styles.saveButtonText}>Simpan</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Footer */}
      <FooterNoTab />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3f4f6",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    paddingTop: 40,
    backgroundColor: "#88D0E4",
  },
  headerText: {
    flex: 1,
    textAlign: "center",
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  main: {
    paddingHorizontal: 16,
    paddingBottom: 80, // Tambahan padding bawah agar tombol terlihat di atas footer
  },
  bannerContainer: {
    width: "100%",
    backgroundColor: "white",
    padding: 16,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    marginTop: 20,
  },
  bannerTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 8,
  },
  bannerImage: {
    width: "100%",
    height: 200,
    borderRadius: 8,
  },
  uploadContainer: {
    width: "100%",
    backgroundColor: "#1e3a8a",
    padding: 16,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  uploadButton: {
    backgroundColor: "#bfdbfe",
    paddingVertical: 8,
    paddingHorizontal: 32,
    borderRadius: 24,
    marginTop: 8,
  },
  uploadButtonText: {
    color: "#1e3a8a",
    fontSize: 14,
    fontWeight: "600",
  },
  saveButton: {
    backgroundColor: "#1e3a8a",
    paddingVertical: 12,
    paddingHorizontal: 145,
    borderRadius: 24,
    marginTop: 16,
    marginBottom: 20, // Memberikan margin bawah agar tombol tidak menempel dengan footer
  },
  saveButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },
});

export default App;
