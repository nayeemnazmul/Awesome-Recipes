import React, { Component } from "react";
import { Image, StyleSheet, TouchableOpacity } from "react-native";
import Button from "./common/Button";
import Card from "./common/Card";
import RecipeHeader from "./common/RecipeHeader";

export default class RecipeItem extends Component {
  goToDetail = () => {
    const { recipe } = this.props;
    this.props.navigation.navigate("Details", { recipe });
  };

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

    return (
      <TouchableOpacity onPress={this.goToDetail}>
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

          <Button onPress={this.goToDetail} title="View Details" />
        </Card>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  recipeImage: {
    height: 150,
    flex: 1,
    borderRadius: 8,
    margin: 5
  }
});
