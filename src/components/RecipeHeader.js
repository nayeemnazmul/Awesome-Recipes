import React from "react";
import { Text, View, StyleSheet, Linking } from "react-native";

const RecipeHeader = props => (
  <View style={styles.recipeHeader}>
    <Text style={styles.title}>{props.title}</Text>
    <Text
      style={styles.publisher}
      onPress={() => Linking.openURL(props.publisher_url)}
    >
      Publisher - {props.publisher}
    </Text>
  </View>
);

const styles = StyleSheet.create({
  recipeHeader: {
    marginTop: 10,
    marginLeft: 10,
    marginBottom: 15
  },
  title: {
    fontSize: 20,
    color: "#303030",
    fontWeight: "bold"
  },
  publisher: {
    fontSize: 15,
    //color: "#303030",
    color: "#E91E63",
    textDecorationLine: "underline",
    paddingTop: 6
  }
});

export default RecipeHeader;
