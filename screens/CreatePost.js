import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

export default class CreateProfile extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>CreatePost</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
   
  }
});
