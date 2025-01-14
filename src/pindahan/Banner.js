import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Menggunakan Ionicons untuk ikon seperti Font Awesome

const App = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Ionicons name="arrow-back" size={24} color="black" />
        <Text style={styles.headerText}>Banner</Text>
        <View />
      </View>

      {/* Main Content */}
      <View style={styles.main}>
        {/* Banner 1 */}
        <View style={styles.bannerContainer}>
          <Text style={styles.bannerTitle}>Banner 1</Text>
          <Image
            style={styles.bannerImage}
            source={{ uri: 'https://storage.googleapis.com/a1aa/image/dX4WWrEHh5LgIhirWgrbYVVNINXoeCPAwWGMfDWqCMP56fDoA.jpg' }}
          />
        </View>

        {/* Banner 2 */}
        <View style={styles.bannerContainer}>
          <Text style={styles.bannerTitle}>Banner 2</Text>
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
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Ionicons name="home" size={30} color="#3b82f6" />
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
    paddingVertical: 30, 
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 20,
  },
  main: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  bannerContainer: {
    width: '100%',
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    marginTop: 20,
  },
  bannerTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },
  bannerImage: {
    width: '100%',
    height: 200,
    borderRadius: 8,
  },
  uploadContainer: {
    width: '100%',
    backgroundColor: '#1e3a8a',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop : 10,
  },
  uploadButton: {
    backgroundColor: '#bfdbfe',
    paddingVertical: 8,
    paddingHorizontal: 32,
    borderRadius: 24,
    marginTop: 8,
  },
  uploadButtonText: {
    color: '#1e3a8a',
    fontSize: 14,
    fontWeight: '600',
  },
  saveButton: {
    backgroundColor: '#1e3a8a',
    paddingVertical: 12,
    paddingHorizontal: 145,
    borderRadius: 24,
    marginTop: 16,
  },
  saveButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  footer: {
    backgroundColor: '#87ceeb',
    padding: 20,
    alignItems: 'center',
  },
});

export default App;
