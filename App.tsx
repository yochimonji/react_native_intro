import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import tw from "twrnc";

import Header from "./components/Header";

export default function App() {
  const [users, setUsers] = useState([]);

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text>{item.name}</Text>
    </View>
  );

  useEffect(() => {
    const getUser = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const users = await res.json();
      setUsers(users);
    };
    getUser();
  }, []);

  return (
    <View style={styles.container}>
      <Header title="ユーザー一覧" />
      <FlatList
        data={users}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => (
          <View
            style={{
              backgroundColor: "lightgray",
              height: 1,
            }}
          ></View>
        )}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    padding: 40,
  },
});
