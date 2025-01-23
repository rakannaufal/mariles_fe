import React from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import FooterNoTab from "../components/FooterNoTab";
import { useNavigation } from "@react-navigation/native";

const App = () => {
  const navigation = useNavigation();

  const data = [
    {
      id: "1",
      Question: "Bagaimana cara menyelesaikan persamaan kuadrat?",
      date: "13-11-2024",
    },
    {
      id: "2",
      Question: "Apa perbedaan antara sel hewan dan sel tumbuhan?",
      date: "15-11-2024",
    },
    {
      id: "3",
      Question: "Bisakah ada trik cepat menghitung luas segitiga?",
      date: "30-11-2024",
    },
    {
      id: "4",
      Question: "Apa rumus gaya gravitasi menurut Newton?",
      date: "05-12-2024",
    },
    {
      id: "8",
      Question: "Apa saja perbedaan pokok dalam tenses bahasa Inggris?",
      date: "10-01-2025",
    },
    {
      id: "9",
      Question: "Bagaimana cara cepat memahami pecahan desimal?",
      date: "15-01-2025",
    },
    {
      id: "10",
      Question: "Apa tips belajar efektif menghadapi ujian nasional?",
      date: "20-01-2025",
    },
    {
      id: "11",
      Question: "Bagaimana cara menyelesaikan integral tak tentu?",
      date: "23-01-2025",
    },
  ];

  const renderItem = ({ item, index }) => (
    <View
      style={[styles.row, index % 2 === 0 ? styles.evenRow : styles.oddRow]}
    >
      <Text style={[styles.cell, styles.noCell]}>{index + 1}</Text>
      <Text style={[styles.cell, styles.QuestionCell]}>{item.Question}</Text>
      <Text style={[styles.cell, styles.dateCell]}>{item.date}</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Hapus</Text>
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
        <Text style={styles.headerText}>Data Forum</Text>
      </View>

      {/* Table */}
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        ListHeaderComponent={
          <View style={styles.headerRow}>
            <Text style={[styles.cell, styles.noCell]}>No</Text>
            <Text style={[styles.cell, styles.QuestionCell]}>Pertanyaan</Text>
            <Text style={[styles.cell, styles.dateCell]}>Tgl Bertanya</Text>
            <Text style={[styles.cell, styles.aksiCell]}>Aksi</Text>
          </View>
        }
      />

      {/* Footer */}
      <FooterNoTab></FooterNoTab>
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
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  row: {
    flexDirection: "row",
    paddingVertical: 10,
    alignItems: "center",
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
    flex: 1,
  },
  QuestionCell: {
    flex: 2,
  },
  dateCell: {
    flex: 2.5,
  },
  aksiCell: {
    flex: 1.5,
  },
  button: {
    backgroundColor: "#f87171",
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 4,
    marginRight: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 12,
  },
});

export default App;
