import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Modal,
  Alert,
  FlatList,
  TouchableHighlight,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import Icon from "react-native-vector-icons/FontAwesome";
import * as ImagePicker from "expo-image-picker";
import styles from "../../styles/InfoLesStyles";
import { Picker } from "@react-native-picker/picker";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import BASE_URL from "../config/config";

export default function App() {
  const navigation = useNavigation();
  const [lesName, setLesName] = useState("");
  const [description, setDescription] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [provinceData, setProvinceData] = useState([]);
  const [cityData, setCityData] = useState([]);
  const [districtData, setDistrictData] = useState([]);
  const [selectedProvinceCode, setSelectedProvinceCode] = useState(null);
  const [selectedCityCode, setSelectedCityCode] = useState(null);
  const [locationType, setLocationType] = useState("province");
  const [selectedClass, setSelectedClass] = useState(null);
  const [selectedFacilities, setSelectedFacilities] = useState([]);
  const [bannerUri, setBannerUri] = useState(null);
  const [bannerFileName, setBannerFileName] = useState(null);
  const [detailImages, setDetailImages] = useState([]);
  const [dayFrom, setDayFrom] = useState("");
  const [dayTo, setDayTo] = useState("");
  const [timeFrom, setTimeFrom] = useState(new Date());
  const [timeTo, setTimeTo] = useState(new Date());
  const [showFromTimePicker, setShowFromTimePicker] = useState(false);
  const [showToTimePicker, setShowToTimePicker] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState("Masukkan lokasi");
  const [modalVisible, setModalVisible] = useState(false);
  const [error, setError] = useState(null);
  const [currentUser, setUserData] = useState(null);

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

  // Handle Province Change
  const handleProvinceChange = (value) => {
    setSelectedProvince(value);
    setSelectedCity(""); // Reset selected city
    if (value) {
      fetchCities(value); // Fetch cities for the selected province
    } else {
      setCityData([]); // Clear city data if no province is selected
    }
  };
  // Handle location selection from modal
  const handleLocationSelect = (name, provinceCode, cityCode) => {
    console.log("Selected location:", name); // Debug
    setSelectedLocation(name);
    setModalVisible(false);
  };

  // Ambil data pengguna saat komponen dimuat
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const storedData = await AsyncStorage.getItem("userData");
        console.log("Stored Data: ", storedData); // Log data yang disimpan
        if (storedData) {
          const parsedData = JSON.parse(storedData);
          console.log("Parsed Data: ", parsedData); // Log data setelah diparse
          setUserData(parsedData); // Menyimpan data pengguna ke state
        }
      } catch (error) {
        console.error("Failed to load user data:", error);
      }
    };

    fetchUserData();
  }, []);

  const handleClassSelection = (type) => {
    setSelectedClass(type);
  };

  const handleFacilitySelection = (facility) => {
    setSelectedFacilities((prev) => {
      if (prev.includes(facility)) {
        return prev.filter((item) => item !== facility);
      } else {
        return [...prev, facility];
      }
    });
  };

  const handleBannerUpload = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (status !== "granted") {
      Alert.alert(
        "Permission Denied",
        "Sorry, we need camera roll permission to upload images."
      );
      return; // Jika izin ditolak, keluar dari fungsi
    }

    const result = await ImagePicker.launchImageLibraryAsync();

    console.log("Image Picker Result:", result); // Cek hasil dari ImagePicker

    if (result.canceled) {
      console.log("Image selection was cancelled.");
      setError("Image selection was cancelled.");
      return; // Jika pemilihan dibatalkan, keluar dari fungsi
    }

    if (result.assets && result.assets[0].fileName) {
      setBannerUri(result.assets[0].uri); // Set URI untuk banner
      setBannerFileName(result.assets[0].fileName); // Simpan nama file banner
      setError(null); // Reset error jika berhasil memilih gambar
    } else {
      console.log("No file name provided.");
      setError("No file name provided.");
    }
  };

  const handleDetailImageUpload = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (status !== "granted") {
      Alert.alert(
        "Permission Denied",
        "Sorry, we need camera roll permission to upload images."
      );
      return; // Jika izin ditolak, keluar dari fungsi
    }

    const result = await ImagePicker.launchImageLibraryAsync();

    console.log("Image Picker Result:", result); // Cek hasil dari ImagePicker

    if (result.canceled) {
      console.log("Image selection was cancelled.");
      setError("Image selection was cancelled.");
      return; // Jika pemilihan dibatalkan, keluar dari fungsi
    }

    // Pastikan jumlah gambar tidak lebih dari 4
    if (detailImages.length >= 4) {
      Alert.alert("Maximum limit reached", "You can only upload 4 images.");
      return; // Batalkan jika sudah 4 gambar
    }

    if (result.assets && result.assets[0].fileName) {
      setDetailImages((prev) => [...prev, result.assets[0].fileName]); // Simpan nama file
      setError(null); // Reset error jika berhasil memilih gambar
    } else {
      console.log("No file name provided.");
      setError("No file name provided.");
    }
  };

  const handleTimeChange = (event, selectedDate, type) => {
    const currentDate = selectedDate || (type === "from" ? timeFrom : timeTo);
    if (type === "from") {
      setShowFromTimePicker(false);
      setTimeFrom(currentDate);
    } else {
      setShowToTimePicker(false);
      setTimeTo(currentDate);
    }
  };

  const handleSubmit = async () => {
    if (
      !lesName ||
      !description ||
      !phone ||
      !address ||
      selectedLocation === "Masukkan lokasi" ||
      !selectedClass ||
      !dayFrom ||
      !dayTo ||
      !timeFrom ||
      !timeTo
    ) {
      setError("Harap lengkapi semua data.");
      return;
    }

    // Persiapkan data untuk dikirimkan
    const dataToSubmit = {
      lesName,
      description,
      phone,
      address,
      selectedLocation,
      selectedClass,
      selectedFacilities,
      bannerUri,
      bannerFileName,
      detailImages,
      dayFrom,
      dayTo,
      timeFrom: timeFrom.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
      timeTo: timeTo.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
      pengajar_id: currentUser.pengajar_id,
    };
    console.log("data = ", dataToSubmit);
    try {
      // Kirim data ke server (API)
      const response = await fetch(`${BASE_URL}/api/infoles/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSubmit),
      });

      if (!response.ok) {
        const errorResponse = await response.json();
        const errorMessage =
          errorResponse?.message || "Terjadi kesalahan server.";
        Alert.alert("Error", errorMessage); // Show the specific error message from the server
        return; // Don't proceed if response is not OK
      }

      const jsonResponse = await response.json();
      if (jsonResponse.success) {
        // Jika berhasil, beri tahu pengguna dan reset form
        Alert.alert("Success", "Informasi Les berhasil disimpan.", [
          {
            text: "OK",
            onPress: () => {
              resetForm(); // Fungsi untuk mereset form setelah submit
              navigation.navigate("HomePengajar"); // Navigasi ke halaman Home
            },
          },
        ]);
      } else {
        Alert.alert("Error", jsonResponse.message || "Gagal menyimpan data.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      Alert.alert("Error", "Terjadi kesalahan jaringan atau server.");
    }
  };

  // Fungsi untuk mereset form setelah submit
  const resetForm = () => {
    setLesName("");
    setDescription("");
    setPhone("");
    setAddress("");
    setSelectedLocation("");
    setSelectedClass(null);
    setSelectedFacilities([]);
    setBannerUri(null);
    setBannerFileName(null);
    setDetailImages([]);
    setDayFrom("");
    setDayTo("");
    setTimeFrom(new Date());
    setTimeTo(new Date());
  };

  return (
    <View Style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={20} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Informasi Les</Text>
      </View>

      {/* Form */}
      <ScrollView style={styles.formContainer}>
        {/* Nama Les */}
        <View style={styles.formGroup}>
          <Text style={styles.label}>Nama les</Text>
          <TextInput
            style={styles.input}
            placeholder="Masukkan nama les"
            value={lesName}
            onChangeText={setLesName}
          />
        </View>

        {/* Deskripsi */}
        <View style={styles.formGroup}>
          <Text style={styles.label}>Deskripsi</Text>
          <TextInput
            style={[styles.input, styles.textarea]}
            multiline
            placeholder="Masukkan deskripsi les"
            value={description}
            onChangeText={setDescription}
          />
        </View>

        {/* No Handphone */}
        <View style={styles.formGroup}>
          <Text style={styles.label}>No Handphone</Text>
          <TextInput
            style={styles.input}
            keyboardType="phone-pad"
            placeholder="Masukkan nomor handphone"
            value={phone}
            onChangeText={setPhone}
          />
        </View>

        {/* Alamat */}
        <View style={styles.formGroup}>
          <Text style={styles.label}>Alamat</Text>
          <TextInput
            style={styles.input}
            placeholder="Masukkan alamat"
            value={address}
            onChangeText={setAddress}
          />
        </View>
        {/* Lokasi */}
        <View style={styles.formGroup}>
          <Text style={styles.label}>Lokasi</Text>
          <TouchableOpacity
            style={styles.input}
            onPress={() => setModalVisible(true)}
          >
            <Text style={styles.locationText} placeholder="Masukkan lokasi">
              {selectedLocation} <FontAwesome name="chevron-down" size={20} />
            </Text>
          </TouchableOpacity>
        </View>

        {/* Pilihan Kelas */}
        <View style={styles.formGroup}>
          <Text style={styles.label}>Pilihan kelas</Text>
          <View style={styles.row}>
            <TouchableOpacity
              style={[
                styles.choiceButton,
                selectedClass === "Private" && styles.selectedButton,
              ]}
              onPress={() => handleClassSelection("Private")}
            >
              <Text
                style={[
                  styles.choiceText,
                  selectedClass === "Private" && styles.selectedText,
                ]}
              >
                Private
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.choiceButton,
                selectedClass === "Public" && styles.selectedButton,
              ]}
              onPress={() => handleClassSelection("Public")}
            >
              <Text
                style={[
                  styles.choiceText,
                  selectedClass === "Public" && styles.selectedText,
                ]}
              >
                Public
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Hari Operasional */}
        <View style={styles.formGroup}>
          <Text style={styles.label}>Hari Operasional</Text>
          <View style={styles.row}>
            <View style={[styles.inputWrapper, { flex: 1 }]}>
              <Picker
                selectedValue={dayFrom}
                style={styles.picker}
                onValueChange={(itemValue) => setDayFrom(itemValue)}
              >
                <Picker.Item label="Pilih Hari" value="" />
                <Picker.Item label="Senin" value="Senin" />
                <Picker.Item label="Selasa" value="Selasa" />
                <Picker.Item label="Rabu" value="Rabu" />
                <Picker.Item label="Kamis" value="Kamis" />
                <Picker.Item label="Jumat" value="Jumat" />
                <Picker.Item label="Sabtu" value="Sabtu" />
                <Picker.Item label="Minggu" value="Minggu" />
              </Picker>
            </View>
            <Text>-</Text>
            <View style={[styles.inputWrapper, { flex: 1 }]}>
              <Picker
                selectedValue={dayTo}
                style={styles.picker}
                onValueChange={(itemValue) => setDayTo(itemValue)}
              >
                <Picker.Item label="Pilih Hari" value="" />
                <Picker.Item label="Senin" value="Senin" />
                <Picker.Item label="Selasa" value="Selasa" />
                <Picker.Item label="Rabu" value="Rabu" />
                <Picker.Item label="Kamis" value="Kamis" />
                <Picker.Item label="Jumat" value="Jumat" />
                <Picker.Item label="Sabtu" value="Sabtu" />
                <Picker.Item label="Minggu" value="Minggu" />
              </Picker>
            </View>
          </View>
        </View>

        {/* Jam Operasional */}
        <View style={styles.formGroup}>
          <Text style={styles.label}>Jam Operasional</Text>
          <View style={styles.row}>
            <TouchableOpacity
              style={styles.inputPick}
              onPress={() => setShowFromTimePicker(true)}
            >
              <TextInput
                value={timeFrom.toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
                editable={false}
                placeholder="Dari"
              />
            </TouchableOpacity>
            <Text>-</Text>
            <TouchableOpacity
              style={styles.inputPick}
              onPress={() => setShowToTimePicker(true)}
            >
              <TextInput
                value={timeTo.toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
                editable={false}
                placeholder="Sampai"
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* Show Time Picker */}
        {showFromTimePicker && (
          <DateTimePicker
            testID="dateTimePicker"
            value={timeFrom}
            mode="time"
            is24Hour={false}
            display="default"
            onChange={(event, selectedDate) =>
              handleTimeChange(event, selectedDate, "from")
            }
          />
        )}
        {showToTimePicker && (
          <DateTimePicker
            testID="dateTimePicker"
            value={timeTo}
            mode="time"
            is24Hour={false}
            display="default"
            onChange={(event, selectedDate) =>
              handleTimeChange(event, selectedDate, "to")
            }
          />
        )}

        {/* Kelas */}
        <View style={styles.formGroup}>
          <Text style={styles.label}>Kelas</Text>
          <Text style={styles.subLabel}>Jenjang</Text>
          <TextInput
            style={styles.input}
            placeholder="Masukkan jenjang kelas"
          />
          <Text style={styles.subLabel}>Layanan mapel</Text>
          <TextInput
            style={[styles.input, styles.textarea]}
            multiline
            placeholder="Masukkan layanan mapel"
          />
          <Text style={styles.subLabel}>Harga</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            placeholder="Masukkan harga"
          />
        </View>

        {/* Fasilitas */}
        <View style={styles.formGroup}>
          <Text style={styles.label}>Fasilitas</Text>
          <View style={styles.row}>
            {[
              { name: "mosque", value: "Mosque" },
              { name: "wifi", value: "WiFi" },
              { name: "fan", value: "Fan" },
              { name: "utensils", value: "Meals" },
            ].map((facility) => (
              <TouchableOpacity
                key={facility.value}
                style={[
                  styles.iconButton,
                  selectedFacilities.includes(facility.value) &&
                    styles.selectedButton,
                ]}
                onPress={() => handleFacilitySelection(facility.value)}
              >
                <FontAwesome5
                  name={facility.name}
                  size={20}
                  color={
                    selectedFacilities.includes(facility.value)
                      ? "white"
                      : "black"
                  }
                />
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Banner */}
        <View style={styles.formGroup}>
          <Text style={styles.label}>Banner</Text>
          <View style={styles.bannerUpload}>
            {bannerUri ? (
              <View>
                {/* Display file name instead of image */}
                <Text style={styles.fileName}>{bannerFileName}</Text>
              </View>
            ) : (
              <FontAwesome5 name="image" size={50} color="gray" />
            )}
            <TouchableOpacity
              style={styles.uploadButton}
              onPress={handleBannerUpload}
            >
              <Text>Upload</Text>
            </TouchableOpacity>
            {bannerUri && <Text style={styles.errorText}>{error}</Text>}
          </View>
        </View>

        {/* Detail Gambar */}
        <View style={styles.formGroup}>
          <Text style={styles.label}>Detail Gambar</Text>
          <View style={styles.row}>
            {detailImages && detailImages.length > 0 ? (
              <ScrollView
                horizontal
                contentContainerStyle={styles.fileNamesContainer}
              >
                <View style={styles.fileNamesGrid}>
                  {detailImages.slice(0, 4).map((fileName, index) => (
                    <View key={index} style={styles.fileNameWrapper}>
                      <Text style={styles.fileNameText}>
                        {index + 1}. {fileName}
                      </Text>
                    </View>
                  ))}
                </View>
              </ScrollView>
            ) : (
              <Text>No images selected yet</Text>
            )}
            <TouchableOpacity
              style={styles.imagePlaceholder}
              onPress={handleDetailImageUpload}
            >
              <FontAwesome5 name="plus" size={30} />
            </TouchableOpacity>
          </View>
        </View>

        {/* Submit Button */}
        <View style={styles.formGroup}>
          <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
            <Text style={styles.submitButtonText}>Submit</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.formGroup}>
          <TouchableOpacity style={styles.submitButton}>
            <Text style={styles.submitButtonText}></Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
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
}
