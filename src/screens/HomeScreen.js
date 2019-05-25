import React, { Component } from "react";
import { View, Text, ActivityIndicator, StyleSheet } from "react-native";

export default class HomeScreen extends Component {
  constructor() {
    super();
    this.state = {
      data: null,
      loading: false
    };
  }

  componentWillMount() {
    this.setState({
      loading: true
    });

    fetch(
      "https://www.food2fork.com/api/search?key=7cbb796ab2a4ef5cb1a72c5f5eb4e113"
    )
      .then(response => response.json())
      .then(responseJson => {
        console.log("Response ", responseJson);
        this.setState({
          data: responseJson,
          loading: false
        });
      })
      .catch(error => {
        this.setState({
          loading: false
        });
        console.log("Error ", error);
      });
  }

  render() {
    const { navigation } = this.props;
    const { loading } = this.state;

    console.log("State ", this.state);

    if (loading) {
      return (
        <View style={styles.loadingIndicator}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      );
    }

    return (
      <View>
        <Text onPress={() => navigation.navigate("Details")}>Home Screen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  loadingIndicator: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
