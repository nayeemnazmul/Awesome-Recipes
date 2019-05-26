import React from "react";
import { Image, StyleSheet } from "react-native";

const RecipeImage = props => (
  <Image
    source={{ uri: props.image_url }}
    style={styles.recipeImage}
    resizeMode="cover"
  />
);

const styles = StyleSheet.create({
  recipeImage: {
    height: 120,
    flex: 1,
    borderRadius: 8
  }
});

export default RecipeImage;
