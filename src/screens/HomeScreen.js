import React, { Component } from "react";
import { View, Text } from "react-native";

export default class HomeScreen extends Component {
  // state = {

  // };

  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { navigation } = this.props;

    return (
      <View>
        <Text onPress={() => navigation.navigate("Details")}>Home Screen</Text>
      </View>
    );
  }
}
