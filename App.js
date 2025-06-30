import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  ScrollView,
  Image,
  TextInput,
  Pressable,
  Alert,
} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { useState } from "react";
export default function App() {
  const users = [
    {
      id: 1,
      name: "Aron",
      image: "https://i.pravatar.cc/150?img=1",
      message: "Hello user 1",
      date: "11:59 AM",
      check: "check",
    },
    {
      id: 2,
      name: "Abelson",
      image: "https://i.pravatar.cc/150?img=2",
      message: "Hello user 2",
      date: "7:33 AM",
      check: "check-double",
    },
    {
      id: 3,
      name: "Cathor",
      image: "https://i.pravatar.cc/150?img=3",
      message: "Hello user 3",
      date: "5:59 PM",
      check: "check",
    },
    {
      id: 4,
      name: "Steven",
      image: "https://i.pravatar.cc/150?img=4",
      message: "Hello user 4",
      date: "3:00 PM",
      check: "check-double",
    },
    {
      id: 5,
      name: "Franklin",
      image: "https://i.pravatar.cc/150?img=5",
      message: "Hello user 5",
      date: "2:15 AM",
      check: "check",
    },
    {
      id: 6,
      name: "Henry Ward",
      image: "https://i.pravatar.cc/150?img=6",
      message: "Hello user 6",
      date: "3:49 PM",
      check: "check-double",
    },
    {
      id: 7,
      name: "Jacob Jones",
      image: "https://i.pravatar.cc/150?img=7",
      message: "Hello user 7",
      date: "10:10 AM",
      check: "check",
    },
    {
      id: 8,
      name: "Lilly",
      image: "https://i.pravatar.cc/150?img=8",
      message: "Hello user 8",
      date: "12:30 AM",
      check: "check-double",
    },
    {
      id: 9,
      name: "Aron",
      image: "https://i.pravatar.cc/150?img=1",
      message: "Hello user 9",
      date: "11:59 AM",
      check: "check",
    },
    {
      id: 10,
      name: "Abelson",
      image: "https://i.pravatar.cc/150?img=2",
      message: "Hello user 10",
      date: "7:33 AM",
      check: "check-double",
    },
    {
      id: 11,
      name: "Cathor",
      image: "https://i.pravatar.cc/150?img=3",
      message: "Hello user 11",
      date: "5:59 PM",
      check: "check",
    },
    {
      id: 12,
      name: "Steven",
      image: "https://i.pravatar.cc/150?img=4",
      message: "Hello user 12",
      date: "3:00 PM",
      check: "check-double",
    },
    {
      id: 13,
      name: "Franklin",
      image: "https://i.pravatar.cc/150?img=5",
      message: "Hello user 13",
      date: "2:15 AM",
      check: "check",
    },
    {
      id: 14,
      name: "Henry Ward",
      image: "https://i.pravatar.cc/150?img=6",
      message: "Hello user 14",
      date: "3:49 PM",
      check: "check-double",
    },
    {
      id: 15,
      name: "Jacob Jones",
      image: "https://i.pravatar.cc/150?img=7",
      message: "Hello user 15",
      date: "10:10 AM",
      check: "check",
    },
    {
      id: 16,
      name: "Lilly",
      image: "https://i.pravatar.cc/150?img=8",
      message: "Hello user 16",
      date: "12:30 AM",
      check: "check-double",
    },
  ];
  const [searchText, setSearchText] = useState("");
  const [userList, setUserList] = useState(users);
  const handleDelete = (id) => {
    setUserList((prev) => prev.filter((u) => u.id !== id));
  };

  const filteredUsers = userList.filter((user) =>
    user.name.toLowerCase().includes(searchText.toLowerCase())
  );
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#008069" barStyle="light-content" />
      <View style={styles.appbar}>
        <View
          style={{
            paddingTop: 50,
            paddingInline: 20,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 90,
          }}
        >
          <Text style={{ color: "white", fontSize: 20, fontWeight: "700" }}>
            WhatApp
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <TextInput
              placeholder="Search"
              placeholderTextColor="grey"
              value={searchText}
              onChangeText={setSearchText}
              style={{
                fontSize: 14,
                width: "60%",
                borderColor: "grey",
                borderWidth: 1,
                borderRadius: 8,
                height: 40,
                backgroundColor: "white",
              }}
            />
            <Entypo name="dots-three-vertical" size={30} color="white" />
          </View>
        </View>
      </View>
      <View style={styles.navbar}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <AntDesign name="camera" size={24} color="white" />
          <View style={{ flexDirection: "row", gap: 30, marginRight: 40 }}>
            <View
              style={{
                flexDirection: "row",
                gap: 5,
                paddingBottom: 5,
                borderBottomWidth: 2,
                borderColor: "white",
              }}
            >
              <Text style={{ color: "white", fontWeight: "700" }}>CHATS</Text>
              <View
                style={{
                  backgroundColor: "white",
                  width: 25,
                  height: 25,
                  borderRadius: 50,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text style={{ color: "black" }}>1</Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                gap: 5,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ color: "white", fontWeight: "700" }}>STATUS</Text>
              <View
                style={{
                  backgroundColor: "white",
                  borderRadius: 50,
                  width: 8,
                  height: 8,
                }}
              ></View>
            </View>
            <View>
              <Text style={{ color: "white", fontWeight: "700" }}>CALLS</Text>
            </View>
          </View>
        </View>
      </View>
      <ScrollView>
        {filteredUsers.map((user) => (
          <Pressable
            key={user.id}
            onLongPress={() =>
              Alert.alert(
                `Delete ${user.name}?`,
                `Are you sure you want to delete ${user.name}?`,
                [
                  {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                  },
                  {
                    text: "Delete",
                    onPress: () => handleDelete(user.id),
                  },
                ]
              )
            }
          >
            <View
              style={{
                flexDirection: "row",
                gap: 10,
                padding: 10,
                justifyContent: "space-between",
                width: "100%",
                borderBottomWidth: 1,
                borderBottomColor: "lightgrey",
              }}
            >
              <View
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 50,
                  overflow: "hidden",
                }}
              >
                <Image
                  source={{ uri: user.image }}
                  style={{ width: 50, height: 50 }}
                />
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  flex: 1,
                }}
              >
                <View style={{ flexDirection: "column" }}>
                  <Text style={{ fontWeight: "700" }}>{user.name}</Text>
                  <View style={{ flexDirection: "row", gap: 10 }}>
                    <FontAwesome5
                      name={user.check}
                      size={14}
                      color="#2a6aca"
                      paddingTop={5}
                    />
                    <Text style={{ color: "grey" }}>{user.message}</Text>
                  </View>
                </View>
                <View>
                  <Text style={{ color: "#555555" }}>{user.date}</Text>
                </View>
              </View>
            </View>
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  appbar: {
    paddingTop: 10,
    backgroundColor: "#008069",
    width: "100%",
  },
  navbar: {
    paddingTop: 20,
    backgroundColor: "#008069",
    width: "100%",
    paddingBottom: 10,
  },
});
