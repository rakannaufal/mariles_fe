import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";

const AboutScreens = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={20} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Tentang Kami</Text>
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.logoContainer}>
          <Image
            source={require("../../assets/logo.png")}
            style={styles.logo}
            resizeMode="contain"
            alt="Logo with a hand holding a graduation cap"
          />
        </View>
        <Text style={styles.paragraph}>
          <Text style={styles.bold}>Mariles</Text> adalah aplikasi yang
          dirancang untuk mempermudah Anda menemukan tempat les yang sesuai
          dengan kebutuhan. Baik Anda seorang pelajar yang mencari bimbingan
          belajar atau seorang pemilik usaha les yang ingin mempromosikan
          layanan Anda, Mariles adalah solusi tepat untuk Anda.
        </Text>

        <Text style={styles.sectionTitle}>Apa yang Mariles Tawarkan?</Text>

        <Text style={styles.paragraph}>
          <Text style={styles.bold}>Pencarian Tempat Les</Text>
        </Text>
        <Text style={styles.paragraph}>
          Temukan tempat les terbaik sesuai kebutuhan Anda. Gunakan filter
          berdasarkan lokasi, mata pelajaran, tingkat pendidikan, harga, hingga
          metode pengajaran (offline/online).
        </Text>

        <Text style={styles.paragraph}>
          <Text style={styles.bold}>Platform Iklan</Text>
        </Text>
        <Text style={styles.paragraph}>
          Pemilik tempat les dapat mengiklankan layanan mereka secara efektif
          untuk menjangkau lebih banyak calon siswa. Tampilkan informasi lengkap
          seperti deskripsi, harga, jadwal, hingga ulasan dari pengguna.
        </Text>

        <Text style={styles.paragraph}>
          <Text style={styles.bold}>Review dan Rating</Text>
        </Text>
        <Text style={styles.paragraph}>
          Baca ulasan dari pengguna lain untuk membantu Anda memilih tempat les
          yang terpercaya dan berkualitas.
        </Text>

        <Text style={styles.paragraph}>
          <Text style={styles.bold}>Integrasi Lokasi</Text>
        </Text>
        <Text style={styles.paragraph}>
          Temukan tempat les terdekat dengan fitur lokasi yang memudahkan Anda
          mengakses tempat belajar pilihan.
        </Text>

        <Text style={styles.paragraph}>
          <Text style={styles.bold}>Notifikasi Pintar</Text>
        </Text>
        <Text style={styles.paragraph}>
          Dapatkan notifikasi tentang promosi terbaru, kelas baru, atau
          pengingat jadwal les Anda.
        </Text>

        <Text style={styles.paragraph}>
          <Text style={styles.bold}>Komunitas Belajar</Text>
        </Text>
        <Text style={styles.paragraph}>
          Berinteraksi dengan pengguna lain, diskusikan pengalaman, dan dapatkan
          tips belajar dari komunitas.
        </Text>

        <Text style={styles.paragraphBawah}>
          Mariles hadir sebagai penghubung antara siswa dan penyedia tempat les,
          menciptakan ekosistem belajar yang lebih efektif, transparan, dan
          mudah diakses.
        </Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    paddingTop: 40,
    backgroundColor: "#88D0E4",
    top: 0,
    width: "100%",
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    marginLeft: "auto",
    marginRight: "auto",
  },
  content: {
    padding: 16,
    backgroundColor: "#fff",
  },
  logoContainer: {
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
    marginTop: -30, // Mengurangi jarak logo dari header
    marginBottom: -50, // Memberikan sedikit jarak dengan konten
  },
  logo: {
    width: 200,
    height: 200,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 8,
    color: "#000",
  },
  paragraph: {
    fontSize: 14,
    lineHeight: 22,
    color: "#000",
    marginBottom: 12,
    textAlign: "justify", // Membuat teks rata kiri dan kanan
  },
  paragraphBawah: {
    fontSize: 14,
    lineHeight: 22,
    color: "#000",
    marginBottom: 30,
    textAlign: "justify", // Membuat teks rata kiri dan kanan
  },
  bold: {
    fontWeight: "bold",
  },
  link: {
    color: "#007aff",
    textDecorationLine: "underline",
  },
});

export default AboutScreens;
