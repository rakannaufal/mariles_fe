import React from "react";
import { View, ScrollView, TouchableOpacity, Text } from "react-native"; // Added View import
import { FontAwesome } from "@expo/vector-icons";
import styles from "../../styles/homeStyles";

const LocationSelector = ({
  selectedProvince,
  selectedCity,
  selectedDistrict,
  provinces,
  cities,
  districts,
  onProvinceClick,
  onCityClick,
  onDistrictClick,
}) => {
  return (
    <View style={styles.locationSelectorContainer}>
      {" "}
      {/* Use View here */}
      <TouchableOpacity
        style={styles.locationSelector}
        onPress={() => onProvinceClick(selectedProvince)}
      >
        <FontAwesome name="map-marker" size={20} color="black" />
        <Text style={styles.locationText}>
          {selectedDistrict ||
            selectedCity ||
            selectedProvince?.name ||
            "Pilih Lokasi"}
        </Text>
      </TouchableOpacity>
      {provinces.length > 0 && (
        <ScrollView style={styles.locationDropdown}>
          {provinces.map((province) => (
            <TouchableOpacity
              key={province.id}
              onPress={() => onProvinceClick(province)}
            >
              <Text>{province.name}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      )}
      {cities.length > 0 && (
        <ScrollView style={styles.locationDropdown}>
          {cities.map((city) => (
            <TouchableOpacity key={city.id} onPress={() => onCityClick(city)}>
              <Text>{city.name}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      )}
      {districts.length > 0 && (
        <ScrollView style={styles.locationDropdown}>
          {districts.map((district) => (
            <TouchableOpacity
              key={district.id}
              onPress={() => onDistrictClick(district)}
            >
              <Text>{district.name}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      )}
    </View>
  );
};

export default LocationSelector;
