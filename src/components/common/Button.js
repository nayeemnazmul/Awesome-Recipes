import React from "react";
import { Text, TouchableOpacity } from "react-native";

const Button = props => (
  <TouchableOpacity onPress={props.goToDetail} style={styles.button}>
    <Text style={styles.buttonText}>{props.title}</Text>
  </TouchableOpacity>
);

const styles = {
  button: {
    padding: 15,
    alignSelf: "center",
    backgroundColor: "#7c4dff",
    borderRadius: 4,
    marginTop: 10,
    marginBottom: 20,
    shadowColor: "#bdbdbd", // IOS
    shadowOffset: { height: 1, width: 1 }, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 1, //IOS
    elevation: 8 // Android
    // height: 50,
    // width: 100,
    // justifyContent: "center",
    // alignItems: "center",
    // flexDirection: "row"
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center"
  }
};

export default Button;
