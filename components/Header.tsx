import React from "react";
import { View, Text, StyleSheet } from "react-native";

type HeaderType = {
  title: string;
};

const Header = ({ title }: HeaderType) => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 90,
    backgroundColor: "lightblue",
  },
  text: {
    marginTop: 50,
    color: "white",
    fontSize: 20,
    textAlign: "center",
  },
});

export default Header;
