import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Feather, Octicons } from "@expo/vector-icons";

export const HomeHeader = () => {
  return (
    <View style={styles.container}>
      {/* Top Row */}
      <View style={styles.topRow}>
        <Image
          source={{ uri: "https://i.pravatar.cc/100" }} // Replace with your user image
          style={styles.avatar}
        />

        <View style={styles.iconRow}>
          <TouchableOpacity style={styles.icon}>
            <Octicons name="search" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.icon}>
            <Octicons name="bell" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Bottom Text */}
      <View style={styles.textBlock}>
        <Text style={styles.subText}>Let's learn</Text>
        <Text style={styles.mainText}>something new</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    backgroundColor: "#fff",
    width: "100%",
  },
  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  avatar: {
    width: 52,
    height: 52,
    borderRadius: 999,
    borderWidth: 2,
    borderColor: "#FFD700",
  },
  iconRow: {
    flexDirection: "row",
    gap: 6,
  },
  icon: {
    marginLeft: 16,
  },
  textBlock: {
    marginTop: 20,
  },
  subText: {
    fontSize: 40,
    color: "#444",
  },
  mainText: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#000",
    marginTop: -10,
  },
});
