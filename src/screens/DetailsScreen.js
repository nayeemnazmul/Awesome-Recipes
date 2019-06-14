import React, { Component } from "react";
import { View, Text, StyleSheet, Image, Linking } from "react-native";
import RecipeHeader from "../components/common/RecipeHeader";
import Card from "../components/common/Card";
import Button from "../components/common/Button";
import RecipeBody from "../components/RecipeBody";

export default class DetailsScreen extends Component {
  static navigationOptions = {
    title: "Details"
  };

  constructor(props) {
    super(props);
    this.state = {
      details: {}
    };
  }

  // fetchIngredients = () => {
  //   // this is a freely available public API from food2fork
  //   // use your own API key to test
  //   // this has a limit of 50 requests/day
  //   const { recipe_id } = this.props.navigation.getParam("recipe", "");

  //   fetch(
  //     "https://www.food2fork.com/api/get?key=1466bb51e37f8088374fda8c3d177325&rId=" +
  //       recipe_id
  //   )
  //     .then(response => response.json())
  //     .then(responseJson => {
  //       console.log("Details ", responseJson);
  //       if (responseJson.error !== "limit") {
  //         this.setState({
  //           details: responseJson
  //         });
  //       }
  //     })
  //     .catch(error => {
  //       console.log("Error ", error);
  //     });
  // };

  // componentDidMount() {
  //   this.fetchIngredients();
  // }

  goToSource = () => {
    const recipe = this.props.navigation.getParam("recipe", "");
    Linking.openURL(recipe.source_url);
  };

  render() {
    const recipe = this.props.navigation.getParam("recipe", "");
    const { details } = this.state;
    console.log("kjh ", details);

    return (
      <Card>
        <Image
          source={{ uri: recipe.image_url }}
          style={styles.detailImage}
          resizeMode="cover"
        />

        <RecipeHeader
          publisher={recipe.publisher}
          publisher_url={recipe.publisher_url}
          title={recipe.title}
        />

        <RecipeBody>
          <Text style={{ marginLeft: 10 }}>
            Social Rank - {recipe.social_rank}
          </Text>
          {/* <H1>Ingredients</H1> */}
          {/* <View>
            {details.recipe.ingredients.map((item, key) => (
              <Text key={key}>{item}</Text>
            ))}
          </View> */}
        </RecipeBody>

        <Button onPress={this.goToSource} title="Go to Source" />
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  detailImage: {
    height: 350,
    //width: "100%",
    borderRadius: 8,
    margin: 5
  }
});
