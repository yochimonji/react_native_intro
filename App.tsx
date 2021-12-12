import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Alert,
  Pressable,
  Image,
  ScrollView,
} from "react-native";
import tw from "twrnc";

import Header from "./components/Header";
import Footer from "./components/Footer";
import ListUser from "./components/ListUser";

export default function App() {
  const [users, setUsers] = useState([]);

  const deleteUser = (id: Number) => {
    setUsers((prevUsers) => {
      return prevUsers.filter((prevUser) => prevUser.id !== id);
    });
  };

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
        renderItem={({ item }) => (
          <ListUser item={item} deleteUser={deleteUser} />
        )}
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

      {/* FlatListを使わないパターン */}
      {/* <ScrollView>
        {users.map((user) => (
          <Text key={user.id} style={styles.item}>
            {user.name}
          </Text>
        ))}
      </ScrollView> */}

      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
