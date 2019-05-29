import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

export default class Card extends Component {
  render() {
    return <View style={styles.recipeContainer}>{this.props.children}</View>;
  }
}

const styles = StyleSheet.create({
  recipeContainer: {
    marginVertical: 10,
    marginLeft: 5,
    marginRight: 5,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#ddd",
    shadowColor: "#bdbdbd",
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowOpacity: 0.5,
    shadowRadius: 0.5,
    elevation: 5,
    backgroundColor: "#e0f7fa"
  }
});
