import React from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import FooterNoTab from "../components/FooterNoTab";
import { useNavigation } from "@react-navigation/native";

const App = () => {
  const navigation = useNavigation();

  const data = [
    {
      id: "1",
      name: "Ahmad Fauzi",
      question: "Bagaimana cara menemukan lokasi les terdekat?",
      date: "01-11-2024",
    },
    {
      id: "2",
      name: "Dewi Lestari",
      question: "Apa saja jenis les yang tersedia di aplikasi Mariles?",
      date: "15-11-2024",
    },
    {
      id: "3",
      name: "Andi Saputra",
      question: "Apakah saya bisa memilih jadwal les sesuai dengan waktu saya?",
      date: "30-11-2024",
    },
    {
      id: "4",
      name: "Siti Nurhaliza",
      question: "Ada brosur atau informasi lebih lanjut tentang paket les?",
      date: "05-12-2024",
    },
    {
      id: "6",
      name: "Rini Setiawan",
      question: "Apakah ada fitur rating untuk pengajar di aplikasi Mariles?",
      date: "31-12-2024",
    },
  ];

  const handleResponse = (name) => {
    Alert.alert("Tanggapi Pertanyaan", `Tanggapi pertanyaan dari ${name}`);
  };

  const renderItem = ({ item, index }) => (
    <View
      style={[styles.row, index % 2 === 0 ? styles.evenRow : styles.oddRow]}
    >
      <Text style={[styles.cell, styles.noCell]}>{index + 1}</Text>
      <Text style={[styles.cell, styles.nameCell]}>{item.name}</Text>
      <Text style={[styles.cell, styles.questionCell]}>{item.question}</Text>
      <Text style={[styles.cell, styles.dateCell]}>{item.date}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => handleResponse(item.name)}
      >
        <Text style={styles.buttonText}>Tanggapi</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={20} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Pertanyaan</Text>
      </View>

      {/* Table with header */}
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        ListHeaderComponent={
          <View style={styles.headerRow}>
            <Text style={[styles.cell, styles.noCell]}>No</Text>
            <Text style={[styles.cell, styles.nameCell]}>Nama</Text>
            <Text style={[styles.cell, styles.questionCell]}>Pertanyaan</Text>
            <Text style={[styles.cell, styles.dateCell]}>Tanggal</Text>
            <Text style={[styles.cell, styles.aksiCell]}>Aksi</Text>
          </View>
        }
      />

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
  headerRow: {
    flexDirection: "row",
    backgroundColor: "#d1d5db",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  row: {
    flexDirection: "row",
    paddingVertical: 10,
    alignItems: "center",
    paddingHorizontal: 10,
  },
  evenRow: {
    backgroundColor: "#ffffff",
  },
  oddRow: {
    backgroundColor: "#f9fafb",
  },
  cell: {
    flex: 1,
    textAlign: "center",
    fontSize: 14,
    color: "#333",
  },
  noCell: {
    flex: 0.5, // Slightly smaller for the 'No' column
  },
  nameCell: {
    flex: 2.5, // Wider for the 'Nama' column
  },
  questionCell: {
    flex: 3.5, // Wider for the 'Pertanyaan' column
  },
  dateCell: {
    flex: 2, // Adjusting the width of the 'Tanggal' column
  },
  aksiCell: {
    flex: 1.5, // Adjusting the width of the 'Aksi' column
  },
  button: {
    backgroundColor: "#4CAF50",
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 4,
    marginLeft: 6,
  },
  buttonText: {
    color: "#fff",
    fontSize: 12,
  },
});

export default App;
