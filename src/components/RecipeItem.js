import React, { Component } from "react";
import { Text, View, StyleSheet, Linking } from "react-native";
import RecipeImage from "./RecipeImage";
import RecipeHeader from "./RecipeHeader";

export default class RecipeItem extends Component {
  render() {
    const {
      publisher,
      title,
      source_url,
      image_url,
      social_rank,
      publisher_url
    } = this.props.recipe;

    // console.log(image_url);

    return (
      <View style={styles.recipeContainer}>
        <View>
          <RecipeImage image_url={image_url} />
        </View>
        <View>
          <RecipeHeader
            publisher={publisher}
            publisher_url={publisher_url}
            title={title}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  recipeContainer: {
    margin: 10,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#ddd",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowOpacity: 0.6,
    shadowRadius: 8
  }
});
