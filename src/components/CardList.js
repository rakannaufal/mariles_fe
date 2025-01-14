import React from "react";
import { FlatList, View, Image, Text, TouchableOpacity } from "react-native";
import styles from "../../styles/homeStyles";

const CardList = ({ items, itemsToShow, loadMoreItems }) => {
  return (
    <FlatList
      data={items.slice(0, itemsToShow)}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View style={styles.card}>
          <Image source={{ uri: item.imageUrl }} style={styles.cardImage} />
          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>{item.title}</Text>
            <Text style={styles.price}>{item.price}</Text>
          </View>
        </View>
      )}
      ListFooterComponent={
        <TouchableOpacity style={styles.loadMore} onPress={loadMoreItems}>
          <Text>Load More</Text>
        </TouchableOpacity>
      }
    />
  );
};

export default CardList;
