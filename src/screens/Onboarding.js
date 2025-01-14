import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Animated,
  Easing,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage"; // Import AsyncStorage

export default function OnboardingScreen() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigation = useNavigation();
  const indicatorPosition = useRef(new Animated.Value(0)).current;

  const slides = [
    {
      image: require("../../assets/slide1.png"),
      title: "Temukan Tempat Les Terbaik!",
      description:
        "Mudahnya menemukan tempat les terbaik sesuai kebutuhanmu! Jelajahi lokasi, jadwal, dan ulasan dari para pengguna langsung melalui aplikasi ini.",
    },
    {
      image: require("../../assets/slide2.png"),
      title: "Perluas Jangkauan Tempat Les Anda",
      description:
        "Para pengajar kini dapat mempromosikan layanan mereka dengan mudah. Tingkatkan kehadiran Anda dan raih lebih banyak siswa!",
    },
    {
      image: require("../../assets/slide3.png"),
      title: "Tempat Les yang Terpercaya",
      description:
        "Lihat ulasan dari pengguna lain dan pilih tempat les terbaik yang sesuai dengan kebutuhan Anda. Keputusan lebih mudah, belajar lebih nyaman.",
    },
    {
      image: require("../../assets/slide4.png"),
      title: "Gabung dan Temukan Kesempatan Baru",
      description:
        "Mudahnya menemukan tempat les terbaik sesuai kebutuhanmu! Jelajahi lokasi, jadwal, dan ulasan dari para pengguna langsung melalui aplikasi ini.",
    },
  ];

  const nextSlide = async () => {
    if (currentSlide < slides.length - 1) {
      animateIndicator(currentSlide + 1);
      setCurrentSlide(currentSlide + 1);
    } else {
      await AsyncStorage.setItem("isOnboardingCompleted", "true"); // Simpan status onboarding
      navigation.navigate("Starting");
    }
  };

  const goToSlide = (index) => {
    animateIndicator(index);
    setCurrentSlide(index);
  };

  const animateIndicator = (toValue) => {
    Animated.timing(indicatorPosition, {
      toValue,
      duration: 500,
      easing: Easing.out(Easing.ease),
      useNativeDriver: false,
    }).start();
  };

  return (
    <View style={styles.container}>
      {/* Gambar dan Teks */}
      <Image source={slides[currentSlide].image} style={styles.image} />
      <Text style={styles.title}>{slides[currentSlide].title}</Text>
      <Text style={styles.description}>{slides[currentSlide].description}</Text>

      {/* Indikator */}
      <View style={styles.indicatorsContainer}>
        {slides.map((_, index) => (
          <TouchableOpacity key={index} onPress={() => goToSlide(index)}>
            <View style={styles.indicatorBackground} />
          </TouchableOpacity>
        ))}
        <Animated.View
          style={[
            styles.activeIndicator,
            {
              transform: [
                {
                  translateX: indicatorPosition.interpolate({
                    inputRange: [0, slides.length - 1],
                    outputRange: [0, (slides.length - 1) * 20],
                  }),
                },
              ],
            },
          ]}
        />
      </View>

      {/* Tombol */}
      <TouchableOpacity style={styles.button} onPress={nextSlide}>
        <Text style={styles.buttonText}>
          {currentSlide < slides.length - 1 ? "Selanjutnya" : "Mulai"}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#87CFE3",
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
    position: "relative",
  },
  image: {
    width: 250,
    height: 250,
    marginBottom: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFFFFF",
    textAlign: "center",
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    color: "#FFFFFF",
    textAlign: "center",
    marginBottom: 24,
  },
  indicatorsContainer: {
    flexDirection: "row",
    position: "absolute",
    bottom: 80,
    justifyContent: "center",
    alignItems: "center",
  },
  indicatorBackground: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#0D5782",
    marginHorizontal: 6,
    opacity: 0.3,
  },
  activeIndicator: {
    position: "absolute",
    width: 16,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#0D5782",
    left: 0,
  },
  button: {
    backgroundColor: "#095783",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 9999,
    position: "absolute",
    bottom: 20,
    right: 20,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },
});
