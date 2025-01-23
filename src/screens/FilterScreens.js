import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Modal,
  FlatList,
  TouchableHighlight,
  Dimensions,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import axios from "axios"; // Make sure to import axios
const { width, height } = Dimensions.get("window");

export default function FilterScreens() {
  const navigation = useNavigation();

  const [provinceData, setProvinceData] = useState([]);
  const [cityData, setCityData] = useState([]);
  const [districtData, setDistrictData] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState("Pekanbaru");
  const [modalVisible, setModalVisible] = useState(false);
  const [locationType, setLocationType] = useState("province");
  const [selectedProvinceCode, setSelectedProvinceCode] = useState(null);
  const [selectedCityCode, setSelectedCityCode] = useState(null);

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

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <FontAwesome name="arrow-left" size={20} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Filter</Text>
      </View>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        {/* Lokasi */}
        <View style={styles.section}>
          <Text style={styles.label}>Lokasi</Text>
          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <View style={styles.inputWrapper}>
              <TextInput
                style={[styles.input, styles.readOnly]}
                value={selectedLocation}
                editable={false}
              />
              <FontAwesome
                name="chevron-down"
                size={18}
                color="gray"
                style={styles.icon}
              />
            </View>
          </TouchableOpacity>
        </View>

        {/* Kelas */}
        <View style={styles.section}>
          <Text style={styles.label}>Kelas</Text>
          <View style={styles.buttonGroup}>
            <TouchableOpacity style={[styles.button, styles.optionButton]}>
              <Text>Private</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, styles.optionButton]}>
              <Text>Public</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Fasilitas */}
        <View style={styles.section}>
          <Text style={styles.label}>Fasilitas</Text>
          <View style={styles.facilityGroup}>
            {["AC", "Kantin", "Musholla", "Wifi"].map((item) => (
              <TouchableOpacity
                key={item}
                style={[styles.button, styles.optionButton]}
              >
                <Text>{item}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Harga */}
        <View style={styles.section}>
          <Text style={styles.label}>Harga</Text>
          <View style={styles.priceInputGroup}>
            <TextInput
              style={[styles.input, styles.flexGrow]}
              placeholder="Rp."
              keyboardType="numeric"
            />
            <Text>-</Text>
            <TextInput
              style={[styles.input, styles.flexGrow]}
              placeholder="Rp."
              keyboardType="numeric"
            />
          </View>
        </View>

        <TouchableOpacity style={styles.filterButton}>
          <Text style={styles.filterButtonText}>Filter</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Modal for Location Selection */}
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
                keyExtractor={(item) => item.id.toString()}
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
                keyExtractor={(item) => item.id.toString()}
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
                keyExtractor={(item) => item.id.toString()}
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
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
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
  contentContainer: {
    padding: 16,
  },
  section: {
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 8,
  },
  inputWrapper: {
    position: "relative",
  },
  input: {
    borderWidth: 1,
    borderColor: "#d1d5db",
    borderRadius: 8,
    padding: 8,
    backgroundColor: "#e5e7eb",
  },
  readOnly: {
    color: "black",
  },
  icon: {
    position: "absolute",
    right: 8,
    top: 12,
  },
  buttonGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  facilityGroup: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  button: {
    borderWidth: 1,
    borderColor: "#d1d5db",
    borderRadius: 8,
    padding: 8,
    margin: 4,
    backgroundColor: "#e5e7eb",
  },
  optionButton: {
    flexGrow: 1,
    alignItems: "center",
  },
  priceInputGroup: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  flexGrow: {
    flexGrow: 1,
  },
  filterButton: {
    backgroundColor: "#1e40af",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  filterButtonText: {
    color: "white",
    fontWeight: "600",
  },
  modalBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContainer: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    width: width - 0,
    height: height - 10,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 16,
  },
  modalOption: {
    paddingVertical: 12,
  },
  modalOptionText: {
    fontSize: 16,
  },
  closeModalButton: {
    marginTop: 16,
    paddingVertical: 12,
    backgroundColor: "#1D4ED8",
    borderRadius: 5,
  },
  closeModalButtonText: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
  },
});
