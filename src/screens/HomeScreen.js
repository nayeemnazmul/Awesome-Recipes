import React, { Component } from "react";
import { View, Text } from "react-native";

export default class HomeScreen extends Component {
  constructor() {
    super();
    this.state = {
      data: null
    };
  }

  componentWillMount() {
    fetch(
      "https://www.food2fork.com/api/search?key=7cbb796ab2a4ef5cb1a72c5f5eb4e113"
    )
      .then(response => response.json())
      .then(responseJson => {
        console.log("Response ", responseJson);
      })
      .catch(error => console.log("Error ", error));
  }

  render() {
    const { navigation } = this.props;

    console.log("State ", this.state);

    return (
      <View>
        <Text onPress={() => navigation.navigate("Details")}>Home Screen</Text>
      </View>
    );
  }
}
