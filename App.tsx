import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import tw from "twrnc";

import Header from "./components/Header";

export default function App() {
  return (
    <View style={styles.container}>
      <Header title="ユーザー一覧" />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
