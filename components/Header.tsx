import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

type HeaderType = {
  title: string;
};

const Header = ({ title }: HeaderType) => {
  return (
    <View style={styles.header}>
      <View style={styles.title}>
        <Feather name="users" size={24} color="black" />
        <Text style={styles.text}>{title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 90,
    backgroundColor: "lightblue",
  },
  title: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
  },
  text: {
    fontSize: 20,
    marginLeft: 8,
  },
});

export default Header;
