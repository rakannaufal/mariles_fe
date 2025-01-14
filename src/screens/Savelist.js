import React from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import styles1 from "../../styles/homeStyles";
import Header from "../components/Header";

const Savelist = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate("Details");
  };
  const handleHome = () => {
    navigation.navigate("Home");
  };
  const handleForum = () => {
    navigation.navigate("Forum");
  };

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
      price: "Rp.900k - 1.5 Juta",
      location: "Jakarta",
      rating: "5.0",
    },
  ];

  const renderCard = ({ item }) => (
    <View style={styles1.card}>
      <TouchableOpacity onPress={handlePress}>
        <Image
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQumAaAr_NbThocz92ve4UFB_hzWUUG1sO-XGavNa6D9_9mYkI-fNv0ulhtZJHxkPQM5i8&usqp=CAU",
          }}
          style={styles1.cardImage}
        />
        <View style={styles1.cardContent}>
          <Text style={styles1.cardTitle}>{item.name}</Text>
          <View style={styles1.tagsContainer}>
            {["SD", "SMP", "SMA", "KULIAH"].map((tag, index) => (
              <View key={index} style={styles1.tag}>
                <Text style={styles1.tagText}>{tag}</Text>
              </View>
            ))}
          </View>
          <Text style={styles1.cardPrice}>{item.price}</Text>
          <View style={styles1.locationAndRating}>
            <Text style={styles1.cardLocation}>{item.location}</Text>
            <View style={styles1.cardRatingContainer}>
              <FontAwesome name="star" size={16} color="gold" />
              <Text style={styles1.cardRating}>{item.rating}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles1.container}>
      {/* Header */}
      <Header></Header>
      <View style={styles1.mainContent}>
        {/* Content */}
        <FlatList
          data={data}
          renderItem={renderCard}
          keyExtractor={(item) => item.id}
          numColumns={2}
          columnWrapperStyle={styles1.cardWrapper}
        />
      </View>
      {/* Footer */}
      <View style={styles1.footer}>
        <TouchableOpacity onPress={handleHome}>
          <FontAwesome name="home" size={24} />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleForum}>
          <FontAwesome name="comments" size={24} />
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesome name="bookmark" size={24} style={{ color: "white" }} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Savelist;
