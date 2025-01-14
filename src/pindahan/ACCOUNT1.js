import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

export default function App() {
  const [username, setUsername] = useState("M Rakan Naufal");
  const [email, setEmail] = useState("rakan123@gmail.com");
  const [phone, setPhone] = useState("0812937539423");
  const [password, setPassword] = useState("********");
  const [address, setAddress] = useState("Jl.Satria");

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Text style={styles.backIcon}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Akun Saya</Text>
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Username</Text>
          <TextInput 
            style={[styles.input, styles.readOnlyInput]} 
            value={username} 
            editable={false} // Membuat semua field hanya baca
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Email</Text>
          <TextInput 
            style={[styles.input, styles.readOnlyInput]} 
            value={email} 
            editable={false} 
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Nomor Handphone</Text>
          <TextInput 
            style={[styles.input, styles.readOnlyInput]} 
            value={phone} 
            editable={false} 
          />
        </View>

        <View style={styles.inputGroupRow}>
          <Text style={styles.label}>Password</Text>
          <View style={styles.row}>
            <TextInput 
              style={[styles.input, styles.flexInput, styles.readOnlyInput]} 
              value={password} 
              secureTextEntry 
              editable={false} 
            />
            <TouchableOpacity style={styles.changeButton} disabled>
              <Text style={[styles.changeButtonText, styles.disabledText]}>Ubah</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.inputGroupRow}>
          <Text style={styles.label}>Alamat</Text>
          <View style={styles.row}>
            <TextInput 
              style={[styles.input, styles.flexInput, styles.readOnlyInput]} 
              value={address} 
              editable={false} 
            />
            <TouchableOpacity style={styles.changeButton} disabled>
              <Text style={[styles.changeButtonText, styles.disabledText]}>Ubah</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.logoutContainer}>
          <TouchableOpacity>
            <Text style={styles.logoutText}>Keluar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    backgroundColor: '#93c5fd',
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  backIcon: {
    fontSize: 24,
    color: '#000',
  },
  headerTitle: {
    flex: 1,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  content: {
    padding: 16,
  },
  inputGroup: {
    marginBottom: 16,
  },
  inputGroupRow: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    marginBottom: 8,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    borderBottomWidth: 1,
    borderColor: '#000',
    paddingVertical: 4,
    paddingHorizontal: 8,
    fontSize: 16,
  },
  flexInput: {
    flex: 1,
  },
  readOnlyInput: {
    color: '#6b7280', // Warna teks menjadi abu-abu untuk menunjukkan hanya baca
    backgroundColor: '#f3f4f6', // Latar belakang untuk membedakan input hanya baca
  },
  changeButton: {
    marginLeft: 8,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 4,
  },
  changeButtonText: {
    fontSize: 14,
  },
  disabledText: {
    color: '#9ca3af', // Warna teks untuk tombol yang dinonaktifkan
  },
  logoutContainer: {
    marginTop: 32,
    alignItems: 'center',
  },
  logoutText: {
    color: '#ef4444',
    fontSize: 18,
  },
});
