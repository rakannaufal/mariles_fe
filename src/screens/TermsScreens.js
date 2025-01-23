import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";

const TermsScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={20} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Syarat dan Ketentuan</Text>
      </View>

      {/* Content */}
      <ScrollView style={styles.content}>
        <View style={styles.section}>
          <Text style={styles.title}>Kebijakan Privasi</Text>
          <Text style={styles.subtitle}>
            Terakhir diperbarui: 18 Januari 2025
          </Text>
          <Text style={styles.paragraph}>
            Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan,
            menggunakan, dan mengungkapkan informasi Anda saat menggunakan
            layanan kami, serta hak privasi Anda dan perlindungan hukum terkait.
            Dengan menggunakan layanan, Anda menyetujui pengumpulan dan
            penggunaan informasi sesuai kebijakan ini.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.title}>Definisi</Text>
          <Text style={styles.paragraph}>
            <Text style={styles.bold}>Akun:</Text> Akun unik untuk mengakses
            layanan kami.
          </Text>
          <Text style={styles.paragraph}>
            <Text style={styles.bold}>Perusahaan:</Text> Mariles.
          </Text>
          <Text style={styles.paragraph}>
            <Text style={styles.bold}>Afiliasi:</Text> Entitas yang terhubung
            melalui kepemilikan atau kontrol bersama.
          </Text>
          <Text style={styles.paragraph}>
            <Text style={styles.bold}>Data Pribadi:</Text> Informasi yang
            mengidentifikasi individu.
          </Text>
          <Text style={styles.paragraph}>
            <Text style={styles.bold}>Layanan:</Text> Aplikasi Mariles.
          </Text>
          <Text style={styles.paragraph}>
            <Text style={styles.bold}>Penyedia Layanan:</Text> Pihak ketiga yang
            membantu mengoperasikan layanan.
          </Text>
          <Text style={styles.paragraph}>
            <Text style={styles.bold}>Data Penggunaan:</Text> Informasi otomatis
            dari penggunaan layanan, seperti alamat IP atau durasi kunjungan.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.title}>Pengumpulan dan Penggunaan Data</Text>
          <Text style={styles.paragraph}>
            Kami mengumpulkan data seperti nama, email, nomor telepon, dan
            alamat. Data ini digunakan untuk:
          </Text>
          <Text style={styles.paragraph}>
            1. Memberikan dan meningkatkan layanan.
          </Text>
          <Text style={styles.paragraph}>2. Mengelola akun pengguna.</Text>
          <Text style={styles.paragraph}>
            3. Berkomunikasi terkait layanan.
          </Text>
          <Text style={styles.paragraph}>
            4. Memberikan penawaran atau informasi terbaru.
          </Text>
          <Text style={styles.paragraph}>
            5. Analisis dan evaluasi performa layanan.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.title}>Keamanan dan Retensi Data</Text>
          <Text style={styles.paragraph}>
            Data Anda dilindungi, tetapi kami tidak dapat menjamin keamanan
            sepenuhnya. Data disimpan sesuai kebutuhan atau kewajiban hukum.
            Anda dapat meminta pembaruan atau penghapusan data melalui
            pengaturan akun atau menghubungi kami.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.title}>Privasi Anak</Text>
          <Text style={styles.paragraph}>
            Layanan kami tidak ditujukan untuk anak di bawah 13 tahun. Jika kami
            mengetahui data anak telah dikumpulkan tanpa izin orang tua, data
            akan segera dihapus.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.title}>Perubahan Kebijakan</Text>
          <Text style={styles.paragraph}>
            Kami dapat memperbarui kebijakan ini sewaktu-waktu. Anda disarankan
            untuk meninjau secara berkala.
          </Text>
        </View>
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
  },
  section: {
    marginBottom: 16,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 12,
    color: "gray",
    marginBottom: 8,
  },
  paragraph: {
    fontSize: 14,
    lineHeight: 22,
    color: "#333",
    marginBottom: 8,
    textAlign: "justify", // Menambahkan rata kiri-kanan
  },
  bold: {
    fontWeight: "bold",
  },
});

export default TermsScreen;
