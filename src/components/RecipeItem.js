import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  Linking,
  TouchableOpacity
} from "react-native";
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
      <TouchableOpacity style={styles.recipeContainer}>
        <RecipeImage image_url={image_url} />

        <RecipeHeader
          publisher={publisher}
          publisher_url={publisher_url}
          title={title}
        />
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  recipeContainer: {
    margin: 5,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#ddd",
    shadowColor: "#bdbdbd",
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowOpacity: 1,
    shadowRadius: 4,
    backgroundColor: "#e0f7fa"
  }
});
