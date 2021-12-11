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

export default function App() {
  const [users, setUsers] = useState([]);

  const renderItem = ({ item }) => (
    <Pressable
      onPress={() => {
        Alert.alert(item.name);
      }}
    >
      <View style={styles.item}>
        <Image
          source={{ uri: "https://i.pravatar.cc/150" }}
          style={styles.avatar}
        />
        <Text>{item.name}</Text>
      </View>
    </Pressable>
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
  item: {
    flexDirection: "row",
    alignItems: "center",
    padding: 40,
    backgroundColor: "#eeeeee",
  },
  avatar: {
    height: 50,
    width: 50,
    borderRadius: 30,
    marginRight: 8,
  },
});
