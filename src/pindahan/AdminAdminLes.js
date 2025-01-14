import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const App = () => {
  const data = [
    { id: '1', name: 'Ucup', date: '13-09-2022' },
    { id: '2', name: 'Dewi', date: '15-02-2023' },
    { id: '3', name: 'Cody Fisher', date: '17-02-2021' },
    { id: '4', name: 'Esther Howard', date: '05-05-2020' },
    { id: '5', name: 'Ronald Richards', date: '28-12-2021' },
    { id: '6', name: 'Albert Flores', date: '20-11-2023' },
    { id: '7', name: 'Marvin McKinney', date: '16-05-2019' },
    { id: '8', name: 'Floyd Miles', date: '27-10-2022' },
    { id: '9', name: 'Courtney Henry', date: '22-08-2022' },
    { id: '10', name: 'Guy Hawkins', date: '16-03-2020' },
    { id: '11', name: 'Ralph Edwards', date: '31-01-2021' },
  ];

  const renderItem = ({ item, index }) => (
    <View style={[styles.row, index % 2 === 0 ? styles.evenRow : styles.oddRow]}>
      <Text style={[styles.cell, styles.noCell]}>{index + 1}</Text>
      <Text style={[styles.cell, styles.nameCell]}>{item.name}</Text>
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
        <Ionicons name="arrow-back" size={24} color="black" />
        <Text style={styles.headerText}>Data Admin Les</Text>
        <View style={{ width: 24 }} /> {/* Placeholder untuk spasi kanan */}
      </View>

      {/* Table */}
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        ListHeaderComponent={
          <View style={styles.headerRow}>
            <Text style={[styles.cell, styles.noCell]}>No</Text>
            <Text style={[styles.cell, styles.nameCell]}>Nama</Text>
            <Text style={[styles.cell, styles.dateCell]}>Tgl Masuk</Text>
            <Text style={[styles.cell, styles.aksiCell]}>Aksi</Text>
          </View>
        }
      />

      {/* Footer */}
      <View style={styles.footer}>
        <Ionicons name="home" size={28} color="white" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f4f6',
  },
  header: {
    backgroundColor: '#87ceeb',
    paddingVertical: 30,  // Menambah padding vertikal agar header lebih lebar ke bawah
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  headerRow: {
    flexDirection: 'row',
    backgroundColor: '#d1d5db',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  row: {
    flexDirection: 'row',
    paddingVertical: 10,
    alignItems: 'center',
  },
  evenRow: {
    backgroundColor: '#ffffff',
  },
  oddRow: {
    backgroundColor: '#f9fafb',
  },
  cell: {
    flex: 1,
    textAlign: 'center',
    fontSize: 14,
    color: '#333',
  },
  noCell: {
    flex: 1,
  },
  nameCell: {
    flex: 2,
  },
  dateCell: {
    flex: 2.5,
  },
  aksiCell: {
    flex: 1.5,
  },
  button: {
    backgroundColor: '#f87171',
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 4,
    marginRight: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 12,
  },
  footer: {
    backgroundColor: '#87ceeb',
    padding: 20,
    alignItems: 'center',
  },
});

export default App;
