import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  Modal,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import styles from "../../styles/homeStyles";
import styles1 from "../../styles/DetailsStyles";
import Header from "../components/Header";

const CardDetails = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [rating, setRating] = useState(0); // Untuk menyimpan rating pengguna
  const [isSaved, setIsSaved] = useState(false); // Untuk menyimpan status save

  const handleImagePress = (uri) => {
    setSelectedImage(uri);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedImage(null);
  };

  const handleStarPress = (index) => {
    setRating(index + 1); // Set rating berdasarkan bintang yang diklik
  };

  const toggleSave = () => {
    setIsSaved(!isSaved); // Toggle status save
  };

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <Header></Header>

      <View style={styles1.bannerContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Home")}
          style={styles1.backButton}
        >
          <FontAwesome name="arrow-left" size={24} color="white" />
        </TouchableOpacity>
        <Image
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQumAaAr_NbThocz92ve4UFB_hzWUUG1sO-XGavNa6D9_9mYkI-fNv0ulhtZJHxkPQM5i8&usqp=CAU",
          }}
          style={styles1.mainImage}
        />
      </View>

      <View>
        {/* Smaller Images */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles1.imageScrollContainer}
        >
          {[...Array(4)].map((_, index) => (
            <TouchableOpacity
              key={index}
              onPress={() =>
                handleImagePress(
                  "https://saim.sch.id/wp-content/uploads/2020/08/IMG_000000_000000.jpg"
                )
              }
            >
              <Image
                source={{
                  uri: "https://saim.sch.id/wp-content/uploads/2020/08/IMG_000000_000000.jpg",
                }}
                style={styles1.smallImage}
              />
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Modal for larger image */}
        <Modal
          visible={modalVisible}
          transparent={true}
          onRequestClose={closeModal}
        >
          <TouchableOpacity style={styles1.modalContainer} onPress={closeModal}>
            <Image source={{ uri: selectedImage }} style={styles1.largeImage} />
          </TouchableOpacity>
        </Modal>
      </View>

      {/* Info Section */}
      <View style={styles1.infoContainer}>
        <View style={styles1.titleRow}>
          <Text style={styles1.title}>Les Privat Cendekia</Text>
          <TouchableOpacity onPress={toggleSave} style={styles1.saveButton}>
            <FontAwesome
              name="bookmark"
              style={styles1.iconbook}
              size={24}
              color={isSaved ? "blue" : "gray"}
            />
          </TouchableOpacity>
        </View>
        <Text style={styles1.openTime}>Buka 07.00 - 21.00</Text>

        <View style={styles1.locationContainer}>
          <FontAwesome name="map-marker" size={20} color="gray" />
          <Text style={styles1.locationText}>Jl. Jend. Ahmad Yani No.75 B</Text>
        </View>
        <View style={styles1.phoneContainer}>
          <FontAwesome name="phone" size={20} color="gray" />
          <Text style={styles1.phoneText}>0811-2386-138</Text>
        </View>
      </View>

      {/* Pricing Section */}
      <View style={styles1.pricingContainer}>
        {["SD", "SMP", "SMA"].map((level, index) => (
          <View key={index} style={styles1.card}>
            <Text style={styles1.cardTitle}>{level}</Text>
            <Text style={styles1.subject}>• Matematika</Text>
            <Text style={styles1.subject}>• B. Inggris</Text>
            <Text style={styles1.subject}>• B. Indonesia</Text>
            <Text style={styles1.price}>
              Rp.{" "}
              {index === 0
                ? "800.000"
                : index === 1
                ? "1.000.000"
                : "1.200.000"}
            </Text>
          </View>
        ))}
      </View>

      {/* Facilities and Class Type */}
      <View style={styles1.facilitiesContainer}>
        <Text style={styles1.sectionTitle}>Fasilitas</Text>
        <Text style={styles1.sectionTitle}>Kelas</Text>
      </View>

      <View style={styles1.iconRow}>
        {["moon-o", "wifi", "tv", "book"].map((icon, index) => (
          <FontAwesome
            key={index}
            name={icon}
            size={24}
            color="white"
            style={styles1.icon}
          />
        ))}
        <Text style={styles1.classType}>Private</Text>
        <Text style={styles1.classType}>Public</Text>
      </View>

      {/* Description Section */}
      <View style={styles1.descriptionContainer}>
        <Text style={styles1.sectionTitle}>Deskripsi</Text>
        <Text style={styles1.descriptionText}>
          Ganesha Operation adalah bimbingan belajar tatap muka berbasis
          teknologi online yang telah berhasil mengantarkan 50.000 lebih
          kelulusan siswa ke PTN dan PT Kedinasan, 2.500 lebih di antaranya
          diterima di kedokteran pada tahun 2024.
        </Text>
      </View>

      {/* Rating Section */}
      <View style={styles1.ratingContainer}>
        <Text style={styles1.sectionTitle}>Beri Penilaian</Text>
        <View style={styles1.ratingStars}>
          {[...Array(5)].map((_, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => handleStarPress(index)}
            >
              <FontAwesome
                name={index < rating ? "star" : "star-o"}
                size={50}
                style={{ marginHorizontal: 10 }}
                color={index < rating ? "gold" : "gray"}
              />
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default CardDetails;
