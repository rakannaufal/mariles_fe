import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function App() {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <FontAwesome name="arrow-left" size={20} style={styles.icon} />
        <Text style={styles.headerText}>Forum</Text>
      </View>

      {/* Content */}
      <ScrollView contentContainerStyle={styles.content}>
        {/* Tags */}
        <View style={styles.section}>
          <Text style={styles.label}>Tag</Text>
          <View style={styles.tagContainer}>
            {['Matematika', 'SD', 'Kelas 5'].map((tag, index) => (
              <View key={index} style={styles.tag}>
                <Text>{tag}</Text>
                <FontAwesome name="times" size={16} style={styles.tagIcon} />
              </View>
            ))}
          </View>
        </View>

        {/* Pertanyaan */}
        <View style={styles.section}>
          <Text style={styles.label}>Pertanyaan</Text>
          <TextInput
            style={styles.textArea}
            multiline
            editable={false}
            value={'1. Tinggi rata-rata dari 15 anak adalah 162 cm. Setelah ditambah tinggi 5 anak, tinggi rata-rata menjadi 166 cm. Tinggi rata-rata 5 anak tersebut adalah:\na. 168 cm\nb. 172 cm\nc. 176 cm\nd. 178 cm\ne. 182 cm'}
          />
          <Text style={styles.characterCount}>197/500</Text>
        </View>

        {/* Submit Button */}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Kirim</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F4F6',
  },
  header: {
    backgroundColor: '#BFDBFE',
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 8,
  },
  headerText: {
    fontSize: 18,
    fontWeight: '600',
    flex: 1,
    textAlign: 'center',
  },
  content: {
    padding: 16,
  },
  section: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 8,
  },
  tagContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  tag: {
    backgroundColor: '#E5E7EB',
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  tagIcon: {
    marginLeft: 8,
  },
  textArea: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    borderColor: '#E5E7EB',
    borderWidth: 1,
    padding: 8,
    height: 120,
    textAlignVertical: 'top',
  },
  characterCount: {
    textAlign: 'right',
    fontSize: 12,
    color: '#6B7280',
  },
  button: {
    backgroundColor: '#1D4ED8',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 16,
  },
});