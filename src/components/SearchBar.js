import React from "react";
import { View, TextInput, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import styles from "../../styles/homeStyles";

const SearchBar = ({ onFilterPress }) => {
  return (
    <View style={styles.searchContainer}>
      <FontAwesome name="search" size={20} color="gray" style={styles.icon} />
      <TextInput placeholder="Cari tempat les..." style={styles.input} />
      <TouchableOpacity style={styles.filterButton} onPress={onFilterPress}>
        <FontAwesome name="filter" size={20} color="#1D4ED8" />
      </TouchableOpacity>
    </View>
  );
};

export default SearchBar;
