import React, { Component } from "react";
import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
  FlatList,
  Button,
  TouchableOpacity
} from "react-native";
import RecipeItem from "../components/RecipeItem";
import sampleRecipes from "./../sample-recipes";

export default class HomeScreen extends Component {
  static navigationOptions = {
    title: "Home"
  };

  // default way of declaring state

  // constructor() {
  //   super();
  //   this.state = {
  //     data: null,
  //     success: false,
  //     loading: false
  //   };
  // }

  // alternative way of declaring state
  state = {
    data: null,
    success: false,
    loading: false
  };

  componentWillMount() {
    this.setState({
      loading: true
    });

    // this is a freely available public API from food2fork
    // user your own API key to test
    fetch(
      "https://www.food2fork.com/api/search?key=7cbb796ab2a4ef5cb1a72c5f5eb4e113"
    )
      .then(response => {
        //console.log("Response ", response);

        if (response.ok) {
          this.setState({
            success: true
          });

          return response.json();
        }
      })
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

  _renderItem = ({ item: recipe }) => {
    //console.log("RecipeItem ", recipe);
    return (
      <TouchableOpacity
      // style={}
      // onPress={}
      >
        <RecipeItem recipe={recipe} />
      </TouchableOpacity>
    );
  };

  // solution for
  // VirtualizedList: missing keys for items,
  // make sure to specify a key property on each item or provide a custom keyExtractor.
  _keyExtractor = item => item.recipe_id;

  // if fetch call fails
  // load sample recipe from already loaded data
  loadSampleRecipe = () => {
    this.setState({
      data: sampleRecipes,
      success: true
    });
  };

  render() {
    const { navigation } = this.props;
    const { loading, data, success } = this.state;

    console.log("State ", this.state);

    if (loading) {
      return (
        <View style={styles.loadingIndicator}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      );
    }

    if (!success) {
      return (
        <View style={styles.loadingIndicator}>
          <Text>API call failed.</Text>
          <Button
            onPress={this.loadSampleRecipe}
            title="Load Sample Recipe"
            color="#841584"
          />
        </View>
      );
    }

    return (
      <View style={styles.recipeListContainer}>
        <FlatList
          data={data.recipes}
          renderItem={this._renderItem}
          keyExtractor={this._keyExtractor}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  loadingIndicator: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  loadButton: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  recipeListContainer: {
    flex: 1,
    alignItems: "center",
    marginVertical: 25
    //justifyContent: "center"
  }
});
