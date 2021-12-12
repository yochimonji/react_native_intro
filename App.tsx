import React, { useEffect, useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";

import Header from "./components/Header";
import Footer from "./components/Footer";
import ListUser from "./components/ListUser";
import AddUser from "./components/AddUser";

export default function App() {
  const [users, setUsers] = useState([]);

  const addUser = (name: string) => {
    setUsers((prevUsers) => {
      return [{ id: uuidv4(), name }, ...prevUsers];
    });
  };

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

      <AddUser addUser={addUser} />

      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
