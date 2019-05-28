import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Image } from "react-native";
import Card from "./common/Card";
import RecipeHeader from "./common/RecipeHeader";

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

    const { navigation } = this.props;

    // console.log(image_url);

    return (
      <TouchableOpacity onPress={() => navigation.navigate("Details")}>
        <Card>
          <Image
            source={{ uri: image_url }}
            style={styles.recipeImage}
            resizeMode="cover"
          />
          <RecipeHeader
            publisher={publisher}
            publisher_url={publisher_url}
            title={title}
          />
        </Card>
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
  },
  recipeImage: {
    height: 250,
    flex: 1,
    borderRadius: 8,
    margin: 5
  }
});
