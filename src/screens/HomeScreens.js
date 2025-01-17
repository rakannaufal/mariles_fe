import React, { useEffect, useState, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  FlatList,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  Modal,
  TouchableHighlight,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import Icon from "react-native-vector-icons/Feather";
import Entypo from "react-native-vector-icons/Entypo";
import { useNavigation } from "@react-navigation/native";
import styles from "../../styles/homeStyles";
import Header from "../components/Header";
import axios from "axios";

const { width, height } = Dimensions.get("window");

const carouselImages = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStXO1wnLUvvpcJyBwbhC-cgFFrjKlcJdgsuQ&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQumAaAr_NbThocz92ve4UFB_hzWUUG1sO-XGavNa6D9_9mYkI-fNv0ulhtZJHxkPQM5i8&usqp=CAU",
];

const HomeScreens = () => {
  const navigation = useNavigation();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [provinceData, setProvinceData] = useState([]);
  const [cityData, setCityData] = useState([]);
  const [districtData, setDistrictData] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState("Semua Lokasi");
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedProvinceCode, setSelectedProvinceCode] = useState(null);
  const [selectedCityCode, setSelectedCityCode] = useState(null);
  const [locationType, setLocationType] = useState("province"); // Track location type for modal navigation

  const scrollViewRef = useRef(null);

  // Handle Filter and Save List actions
  const handleFilter = () => {
    navigation.navigate("Filter");
  };
  const handleForum = () => {
    navigation.navigate("Forum");
  };
  const handleSavelist = () => {
    navigation.navigate("Savelist");
  };

  const handlePress = () => {
    navigation.navigate("Details");
  };

  // Fetch Provinces from API
  useEffect(() => {
    const fetchProvinces = async () => {
      try {
        const response = await axios.get(
          "https://open-api.my.id/api/wilayah/provinces"
        );
        if (Array.isArray(response.data)) {
          setProvinceData(response.data);
        } else {
          console.error("Invalid data format:", response.data);
        }
      } catch (error) {
        console.error("Error fetching provinces:", error);
        // Handle error gracefully
        alert("Error fetching provinces. Please check your connection.");
      }
    };
    fetchProvinces();
  }, []);

  // Fetch Cities based on selected Province
  const fetchCities = async (provinceCode) => {
    try {
      const response = await axios.get(
        `https://open-api.my.id/api/wilayah/regencies/${provinceCode}`
      );
      if (Array.isArray(response.data)) {
        setCityData(response.data);
      } else {
        console.error("Invalid city data format:", response.data);
      }
    } catch (error) {
      console.error("Error fetching cities:", error);
      alert("Error fetching cities. Please check your connection.");
    }
  };

  // Fetch Districts based on selected City
  const fetchDistricts = async (cityCode) => {
    try {
      const response = await axios.get(
        `https://open-api.my.id/api/wilayah/districts/${cityCode}`
      );
      if (Array.isArray(response.data)) {
        setDistrictData(response.data);
      } else {
        console.error("Invalid district data format:", response.data);
      }
    } catch (error) {
      console.error("Error fetching districts:", error);
      alert("Error fetching districts. Please check your connection.");
    }
  };

  // Handle location selection from modal
  const handleLocationSelect = (name, provinceCode, cityCode) => {
    setSelectedLocation(name);
    setModalVisible(false);
  };

  // Automatic carousel slide interval
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % carouselImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({
        x: currentSlide * width,
        animated: true,
      });
    }
  }, [currentSlide]);

  const data = [
    {
      id: "1",
      name: "Ganesha Operation",
      price: "Rp.800k - 1.2 Juta",
      location: "Pekanbaru",
      rating: "5.0",
    },
    {
      id: "2",
      name: "Ganesha Operation",
      price: "Rp.800k - 1.2 Juta",
      location: "Pekanbaru",
      rating: "5.0",
    },
    {
      id: "3",
      name: "Ganesha Operation",
      price: "Rp.800k - 1.2 Juta",
      location: "Pekanbaru",
      rating: "5.0",
    },
    {
      id: "4",
      name: "Ganesha Operation",
      price: "Rp.800k - 1.2 Juta",
      location: "Pekanbaru",
      rating: "5.0",
    },
  ];

  const renderCard = ({ item }) => (
    <View style={styles.card}>
      <TouchableOpacity onPress={handlePress}>
        <Image
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQumAaAr_NbThocz92ve4UFB_hzWUUG1sO-XGavNa6D9_9mYkI-fNv0ulhtZJHxkPQM5i8&usqp=CAU",
          }}
          style={styles.cardImage}
        />
        <View style={styles.cardContent}>
          <Text style={styles.cardTitle}>{item.name}</Text>
          <View style={styles.tagsContainer}>
            {["SD", "SMP", "SMA", "KULIAH"].map((tag, index) => (
              <View key={index} style={styles.tag}>
                <Text style={styles.tagText}>{tag}</Text>
              </View>
            ))}
          </View>
          <Text style={styles.cardPrice}>{item.price}</Text>
          <View style={styles.locationAndRating}>
            <Text style={styles.cardLocation}>{selectedLocation}</Text>
            <View style={styles.cardRatingContainer}>
              <FontAwesome name="star" size={16} color="gold" />
              <Text style={styles.cardRating}>{item.rating}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <Header />

      {/* Main Content */}
      <View style={styles.mainContent}>
        <View style={styles.locationContainer}>
          <FontAwesome name="map-marker" size={20} />
          <TouchableOpacity
            style={styles.locationTouchable}
            onPress={() => setModalVisible(true)}
          >
            <Text style={styles.locationText}>{selectedLocation}</Text>
          </TouchableOpacity>
          <FontAwesome name="chevron-down" size={20} />
        </View>

        <ScrollView
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          ref={scrollViewRef}
          style={styles.carousel}
        >
          {carouselImages.map((image, index) => (
            <Image key={index} source={{ uri: image }} style={styles.banner} />
          ))}
        </ScrollView>
        <View style={styles.indicatorContainer}>
          {carouselImages.map((_, index) => (
            <View
              key={index}
              style={[styles.dot, currentSlide === index && styles.activeDot]}
            />
          ))}
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Cari tempat les terbaikmu!</Text>
          <TouchableOpacity style={styles.filterButton} onPress={handleFilter}>
            <FontAwesome name="filter" size={20} color="#1D4ED8" />
          </TouchableOpacity>
        </View>
        <FlatList
          data={data}
          renderItem={renderCard}
          keyExtractor={(item) => item.id}
          numColumns={2}
          columnWrapperStyle={styles.cardWrapper}
        />
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <TouchableOpacity>
          <Icon name="home" size={24} style={{ color: "white" }} />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleForum}>
          <Entypo name="chat" size={24} />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleSavelist}>
          <FontAwesome name="bookmark" size={24} />
        </TouchableOpacity>
      </View>

      {/* Full Screen Modal for Location Selection */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Pilih Lokasi</Text>
            {locationType === "province" && (
              <FlatList
                data={provinceData}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    style={styles.modalOption}
                    onPress={() => {
                      setSelectedProvinceCode(item.id);
                      setLocationType("city"); // Switch to cities
                      fetchCities(item.id); // Fetch cities for the selected province
                    }}
                  >
                    <Text style={styles.modalOptionText}>{item.name}</Text>
                  </TouchableOpacity>
                )}
              />
            )}
            {locationType === "city" && (
              <FlatList
                data={cityData}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    style={styles.modalOption}
                    onPress={() => {
                      setSelectedCityCode(item.id);
                      setLocationType("district"); // Switch to districts
                      fetchDistricts(item.id); // Fetch districts for the selected city
                    }}
                  >
                    <Text style={styles.modalOptionText}>{item.name}</Text>
                  </TouchableOpacity>
                )}
              />
            )}
            {locationType === "district" && (
              <FlatList
                data={districtData}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    style={styles.modalOption}
                    onPress={() => {
                      handleLocationSelect(
                        item.name,
                        selectedProvinceCode,
                        selectedCityCode
                      );
                      setLocationType("province"); // Reset to provinces
                    }}
                  >
                    <Text style={styles.modalOptionText}>{item.name}</Text>
                  </TouchableOpacity>
                )}
              />
            )}
            <TouchableHighlight
              style={styles.closeModalButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.closeModalButtonText}>Tutup</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default HomeScreens;
