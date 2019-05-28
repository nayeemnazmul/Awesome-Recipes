import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";

export default class Card extends Component {
  render() {
    return <View style={styles.recipeContainer}>{this.props.children}</View>;
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
