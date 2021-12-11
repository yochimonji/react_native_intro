import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import tw from "twrnc";

import Header from "./components/Header";

export default function App() {
  const [users, setUsers] = useState([]);

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
      {users.map((user) => (
        <Text key={user.id}>{user.name}</Text>
      ))}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
