import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { AntDesign, Feather } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

type MentorProps = {
  name: string;
  company: string;
  title: string;
  tagline: string;
  imageUrl: string;
  jobColor: string;
  isOnline?: boolean;
};

export const MentorCard = ({
  name,
  company,
  title,
  tagline,
  imageUrl,
  jobColor,
  isOnline = true,
}: MentorProps) => {
  return (
    <Pressable style={styles.card}>
      <ImageBackground
        source={{ uri: imageUrl }}
        style={styles.image}
        imageStyle={{ borderRadius: 20 }}
      >
        {/* Gradient Overlay */}
        <LinearGradient
          colors={["transparent", "rgba(0,0,0,0.7)"]}
          style={styles.gradient}
        />

        {/* Online Dot */}
        {isOnline && <View style={styles.onlineDot} />}

        {/* Heart Icon */}
        <View style={styles.heartIcon}>
          <Feather name="bookmark" size={20} color="#fff" />
        </View>

        {/* Text Content */}
        <View style={styles.textContainer}>
          <Text style={styles.name}>{name}</Text>
          {/* <Text style={[styles.title, { color: jobColor }]}>{title}</Text> */}
          <Text style={styles.tagline}>{tagline}</Text>
        </View>
      </ImageBackground>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  card: {
    width: "48%",
    height: 200,
    borderRadius: 20,
    overflow: "hidden",
    position: "relative",
  },
  image: {
    flex: 1,
    justifyContent: "flex-end",
    borderRadius: 20,
  },
  gradient: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 20,
  },
  heartIcon: {
    position: "absolute",
    top: 12,
    right: 12,
    backgroundColor: "rgba(0,0,0,0.4)",
    padding: 6,
    borderRadius: 100,
  },
  onlineDot: {
    position: "absolute",
    top: 12,
    left: 12,
    width: 12,
    height: 12,
    backgroundColor: "#4ADE80", // Tailwind green-400
    borderRadius: 6,
    borderWidth: 2,
    borderColor: "#fff",
  },
  textContainer: {
    padding: 12,
  },
  name: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
  },
  company: {
    fontSize: 14,
    fontWeight: "600",
  },
  title: {
    fontSize: 13,
    fontWeight: "500",
    marginTop: 2,
  },
  tagline: {
    color: "#ccc",
    fontSize: 10,
    marginTop: 4,
  },
});
