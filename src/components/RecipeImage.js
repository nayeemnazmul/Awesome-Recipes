import React from "react";
import { View, Image, StyleSheet } from "react-native";

const RecipeImage = props => (
  <View>
    <Image
      source={{ uri: props.image_url }}
      style={styles.recipeImage}
      resizeMode="cover"
    />
  </View>
);

const styles = StyleSheet.create({
  recipeImage: {
    height: 250,
    flex: 1,
    borderRadius: 8,
    margin: 5
  }
});

export default RecipeImage;
