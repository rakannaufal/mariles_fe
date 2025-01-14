import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons'; // or use react-native-vector-icons

const Dashboard = () => {
  const handleContactPress = () => {
    // Add functionality for contact press here
    console.log('Contact pressed');
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Dashboard</Text>
      </View>

      {/* Stats Card */}
      <View style={styles.cardContainer}>
        <View style={styles.card}>
          <Text style={styles.cardText}>Total Student: 60</Text>
          <Text style={styles.cardText}>Total Admin Les: 25</Text>
          <Text style={styles.cardText}>Total User: 85</Text>

          <TouchableOpacity style={styles.contactContainer} onPress={handleContactPress}>
            <Text style={styles.contactText}>Contact</Text>
            <View style={styles.contactIconContainer}>
              <FontAwesome5 name="comment-dots" size={20} color="#00509E" />
              <Text style={styles.contactCount}>5</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>

      {/* Buttons Grid */}
      <View style={styles.gridContainer}>
        {buttonData.map((item, index) => (
          <TouchableOpacity key={index} style={styles.gridItem}>
            <Image source={{ uri: item.icon }} style={styles.gridImage} />
            <Text style={styles.gridText}>{item.label}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <FontAwesome5 name="home" size={24} color="#00509E" />
      </View>
    </View>
  );
};

const buttonData = [
  {
    label: 'Banner',
    icon: 'https://storage.googleapis.com/a1aa/image/gHY8X4NemITUWasfLYlM6TkavFvgj9HKeus71z40t97aBeHQB.jpg',
  },
  {
    label: 'Data Forum',
    icon: 'https://storage.googleapis.com/a1aa/image/RgYFoKWwKDobCVeVYVzAWJC0n0oKTfgTiGTgipruF7XrAfDoA.jpg',
  },
  {
    label: 'Data Student',
    icon: 'https://storage.googleapis.com/a1aa/image/2hSlGagc4Jbfai5Fe5EM2p9EUsNlS0WbPB1zJJtC72inAfDoA.jpg',
  },
  {
    label: 'Data Admin Les',
    icon: 'https://storage.googleapis.com/a1aa/image/AoM15OT3Nl4DBBZcj34WwveSEXomeAe5fwKTOIR15TfJF4PgC.jpg',
  },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  header: {
    width: '100%',
    backgroundColor: '#B3D9FF',
    paddingVertical: 20,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  cardContainer: {
    width: '90%',
    marginTop: 10,
  },
  card: {
    backgroundColor: '#00509E',
    borderRadius: 8,
    padding: 20,
    paddingVertical: 30,
  },
  cardText: {
    color: '#fff',
    marginBottom: 16,
    fontSize: 16,
  },
  contactContainer: {
    backgroundColor: '#B3D9FF',
    padding: 12,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 16,
  },
  contactText: {
    color: '#00509E',
  },
  contactIconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  contactCount: {
    marginLeft: 8,
    color: '#00509E',
  },
  gridContainer: {
    width: '90%',
    marginTop: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  gridItem: {
    width: '48%',
    backgroundColor: '#00509E',
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
    marginBottom: 10,
  },
  gridImage: {
    width: 50,
    height: 50,
    marginBottom: 8,
    borderRadius: 8,
  },
  gridText: {
    color: '#fff',
  },
  footer: {
    width: '100%',
    backgroundColor: '#B3D9FF',
    paddingVertical: 10,
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
  },
});

export default Dashboard;
