import { StyleSheet, Text, View, StatusBar } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";
export default function App() {
  // const images = [
  //   "image1":"./assets/image1.png",
  //   "image2",
  //   "image3",
  //   "image4",
  //   "image5",
  //   "image6",
  //   "image7",
  //   "image8",
  // ]
  const users = [
    {
      id: 1,
      name: "Aron",
      image: "https://i.pravatar.cc/150?img=1",
      message: "Hello user 1",
    },
    {
      id: 2,
      name: "Abelson",
      image: "https://i.pravatar.cc/150?img=2",
      message: "Hello user 2",
    },
    {
      id: 3,
      name: "Cathor",
      image: "https://i.pravatar.cc/150?img=3",
      message: "Hello user 3",
    },
    {
      id: 4,
      name: "Steven",
      image: "https://i.pravatar.cc/150?img=4",
      message: "Hello user 4",
    },
    {
      id: 5,
      name: "Franklin",
      image: "https://i.pravatar.cc/150?img=5",
      message: "Hello user 5",
    },
    {
      id: 6,
      name: "Henry Ward",
      image: "https://i.pravatar.cc/150?img=6",
      message: "Hello user 6",
    },
    {
      id: 7,
      name: "Jacob Jones",
      image: "https://i.pravatar.cc/150?img=7",
      message: "Hello user 7",
    },
    {
      id: 8,
      name: "Lilly",
      image: "https://i.pravatar.cc/150?img=8",
      message: "Hello user 8",
    },
  ];
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
          }}
        >
          <Text style={{ color: "white", fontSize: 20, fontWeight: "700" }}>
            WhatApp
          </Text>
          <View style={{ flexDirection: "row" }}>
            <AntDesign
              name="search1"
              size={30}
              color="white"
              paddingRight={10}
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
      <ScrollView>{users.map}</ScrollView>
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
    paddingTop: 50,
    backgroundColor: "#008069",
    width: "100%",
  },
  navbar: {
    paddingTop: 30,
    backgroundColor: "#008069",
    width: "100%",
    paddingBottom: 10,
  },
});
