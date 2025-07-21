import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Feather } from "@expo/vector-icons";

const mentors = [
  {
    id: "1",
    name: "Karl Mona",
    title: "Leading UI/UX expert",
    image:
      "https://media.istockphoto.com/id/1338134336/photo/headshot-portrait-african-30s-man-smile-look-at-camera.jpg?s=612x612&w=0&k=20&c=kUVdvBnwnZRxausswIKRZuC25bZgTXwrmGSPikdcOro=",
    bgColor: "#FBC6D0",
  },
  {
    id: "2",
    name: "Sara Ghosh",
    title: "Marketing Guru",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&q=80",
    bgColor: "#C7D9FF",
  },
  {
    id: "3",
    name: "Dawei Lou",
    title: "Marketing Guru",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI3-ssKiTTho0kTQAn4UyZichSqJ6IEXXDxA&s",
    bgColor: "#C7D9FF",
  },
];

export const TopMentorList = () => {
  return (
    <View style={styles.wrapper}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Top Mentors</Text>
        <Text style={styles.showAll}>Show All</Text>
      </View>

      {/* Mentor List */}
      {mentors.map((mentor) => (
        <TouchableOpacity key={mentor.id} style={styles.card}>
          <View
            style={[styles.avatarWrapper, { backgroundColor: mentor.bgColor }]}
          >
            <Image source={{ uri: mentor.image }} style={styles.avatar} />
          </View>

          <View style={styles.info}>
            <Text style={styles.name}>{mentor.name}</Text>
            <Text style={styles.subtitle}>{mentor.title}</Text>
          </View>

          <Feather name="chevron-right" size={22} color="#555" />
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 30,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
  },
  showAll: {
    fontSize: 14,
    color: "#888",
  },
  card: {
    backgroundColor: "#F8F8F8",
    flexDirection: "row",
    alignItems: "center",
    padding: 14,
    borderRadius: 20,
    marginBottom: 12,
  },
  avatarWrapper: {
    width: 52,
    height: 52,
    borderRadius: 26,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 14,
  },
  avatar: {
    width: 46,
    height: 46,
    borderRadius: 23,
  },
  info: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: "600",
    color: "#111",
  },
  subtitle: {
    fontSize: 13,
    color: "#666",
    marginTop: 2,
  },
});
