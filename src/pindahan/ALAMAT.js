import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Using icons from Ionicons (integrated with Expo)

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="arrow-back" size={24} color="black" />
        <Text style={styles.headerText}>Alamat Saya</Text>
      </View>
      <View style={styles.labelContainer}>
        <View style={styles.form}>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Provinsi</Text>
            <TextInput
              value="Riau"
              style={styles.input}
              editable={false}
            />
          </View>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Kota</Text>
            <TextInput
              value="Pekanbaru"
              style={styles.input}
              editable={false}
            />
          </View>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Kecamatan</Text>
            <TextInput
              value="Tenayan Raya"
              style={styles.input}
              editable={false}
            />
          </View>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Simpan</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#88D0E4",
    height: '100%',
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 16,
    width: '100%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
  },

  headerText: {
    marginLeft: 16,  // Adjusted margin for proper alignment
    fontSize: 18,
    fontWeight: 'bold',
  },

  labelContainer: {
    marginTop: 20,
  },

  label: {
    fontSize: 14,
    fontWeight: '500',
    marginLeft: 15,
  },

  input: {
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 16,
    backgroundColor: '#fff',
    marginBottom: 16,
    marginLeft: 15,
    marginRight: 15,
  },

  button: {
    backgroundColor: '#1e40af',
    borderRadius: 20,
    paddingVertical: 12,
    alignItems: 'center',
    marginTop: 16,
    marginLeft: 15,
    marginRight: 15,
  },

  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
