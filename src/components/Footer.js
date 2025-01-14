import React from "react";
import { TouchableOpacity, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import styles from "../../styles/homeStyles";

const Footer = ({ activeTab, setActiveTab }) => {
  return (
    <View style={styles.footer}>
      <TouchableOpacity onPress={() => setActiveTab("home")}>
        <FontAwesome
          name="home"
          size={30}
          color={activeTab === "home" ? "#095783" : "white"}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setActiveTab("comments")}>
        <FontAwesome
          name="comments"
          size={30}
          color={activeTab === "comments" ? "#095783" : "white"}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setActiveTab("bookmark")}>
        <FontAwesome
          name="bookmark"
          size={30}
          color={activeTab === "bookmark" ? "#095783" : "white"}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Footer;
