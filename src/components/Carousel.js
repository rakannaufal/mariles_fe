import React from "react";
import { ScrollView, Image } from "react-native";
import styles from "../../styles/homeStyles";

const Carousel = ({ images, currentSlide, scrollViewRef, width }) => {
  return (
    <ScrollView
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      ref={scrollViewRef}
      style={styles.carousel}
    >
      {images.map((image, index) => (
        <Image
          key={index}
          source={{ uri: image }}
          style={{ width, height: 200 }}
        />
      ))}
    </ScrollView>
  );
};

export default Carousel;
