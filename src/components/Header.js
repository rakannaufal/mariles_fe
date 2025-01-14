import React from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";

import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function Header() {
  const navigation = useNavigation();
  const handleAccount = () => {
    navigation.navigate("Account");
  };
  return (
    <View style={styles.header}>
      <TextInput
        style={styles.searchInput}
        placeholder="Cari tempat les..."
        placeholderTextColor="gray"
      />
      <TouchableOpacity onPress={handleAccount}>
        <FontAwesome name="user-circle" size={24} style={styles.userIcon} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    paddingTop: 40,
    backgroundColor: "#88D0E4",
  },
  searchInput: {
    flex: 1,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 10,
    paddingHorizontal: 16,

    color: "gray",
  },
  userIcon: {
    marginLeft: 16,
  },
});
