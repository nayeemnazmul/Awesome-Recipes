import React, { Component } from "react";
import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
  FlatList,
  Button,
  SafeAreaView
} from "react-native";
import RecipeItem from "../components/RecipeItem";
import sampleRecipes from "./../sample-recipes";
import { SearchBar } from "react-native-elements";

export default class HomeScreen extends Component {
  static navigationOptions = {
    title: "Recipe List"
  };

  // default way of declaring state

  constructor(props) {
    super(props);

    this.state = {
      data: null,
      success: false,
      loading: true,
      searchText: ""
    };

    this.arrayHolder = [];
  }

  // alternative way of declaring state
  // state = {
  //   data: null,
  //   success: false,
  //   loading: true,
  //   searchText: ""
  // };

  //arrayHolder = [];

  fetchRecipe = () => {
    // this is a freely available public API from food2fork
    // use your own API key to test
    // this has a limit of 50 requests/day
    fetch(
      "https://www.food2fork.com/api/search?key=1466bb51e37f8088374fda8c3d177325"
    )
      .then(response => {
        console.log("main response ", response);

        if (response.ok) {
          return response.json();
        }
      })
      .then(responseJson => {
        console.log("Response ", responseJson);
        if (responseJson.error !== "limit") {
          this.setState({
            data: responseJson.recipes,
            success: true,
            loading: false
          });

          this.arrayHolder = responseJson.recipes;
        } else {
          // if API call fails somehow then, load sample recipes
          this.setState({
            data: sampleRecipes.recipes,
            success: true,
            loading: false
          });

          this.arrayHolder = sampleRecipes.recipes;
        }
      })
      .catch(error => {
        this.setState({
          loading: false
        });

        console.log("Error ", error);
      });
  };

  componentDidMount() {
    this.fetchRecipe();
  }

  _renderItem = ({ item: recipe }) => {
    //console.log("RecipeItem ", recipe);
    return <RecipeItem recipe={recipe} navigation={this.props.navigation} />;
  };

  // solution for
  // VirtualizedList: missing keys for items,
  // make sure to specify a key property on each item or provide a custom keyExtractor.
  _keyExtractor = item => item.recipe_id;

  _searchFilterFunction = text => {
    this.setState({
      searchText: text
    });

    const newData = this.arrayHolder.filter(recipe => {
      const title = recipe.title.toUpperCase();
      const searchText = text.toUpperCase();

      return title.indexOf(searchText) > -1;
    });

    this.setState({ data: newData });
  };

  _renderHeader = () => {
    return (
      <SearchBar
        placeholder="Search by title..."
        lightTheme={true}
        round
        onChangeText={text => this._searchFilterFunction(text)}
        autoCorrect={false}
        value={this.state.searchText}
      />
    );
  };

  // if fetch call fails
  // load sample recipe from already loaded data

  // loadSampleRecipe = () => {
  //   this.setState({
  //     data: sampleRecipes.recipes,
  //     success: true
  //   });

  //   // not working

  //   // const { data } = this.state;
  //   // this.arrayHolder = data;
  // };

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

    // if (!success) {
    //   return (
    //     <View style={styles.loadButton}>
    //       <Text>API call failed.</Text>
    //       <Button
    //         onPress={this.loadSampleRecipe}
    //         title="Load Sample Recipe"
    //         color="#841584"
    //       />
    //     </View>
    //   );
    // }

    return (
      <SafeAreaView style={styles.recipeListContainer}>
        <FlatList
          data={data}
          renderItem={this._renderItem}
          keyExtractor={this._keyExtractor}
          ListHeaderComponent={this._renderHeader}
        />
      </SafeAreaView>
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
    justifyContent: "center"
  }
});
