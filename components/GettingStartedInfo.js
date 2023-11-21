import React from "react";
import { View, Image, StyleSheet, Dimensions } from "react-native";
import Carousel from "react-native-snap-carousel";

const GettingStartedInfo = ({ data }) => {
  const renderItem = ({ item }) => (
    <Image source={item.image} style={styles.carouselImage} />
  );

  return (
    <View style={styles.container}>
      <Carousel
        data={data}
        renderItem={renderItem}
        sliderWidth={Dimensions.get("window").width}
        itemWidth={Dimensions.get("window").width}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  carouselImage: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").width, // Adjust the height as needed
  },
});

export default GettingStartedInfo;
