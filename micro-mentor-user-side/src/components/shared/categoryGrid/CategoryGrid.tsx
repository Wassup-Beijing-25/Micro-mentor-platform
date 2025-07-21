import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export const CategoryGrid = () => {
  return (
    <View style={styles.container}>
      {/* Row 1 */}
      <View style={styles.row}>
        <CategoryBox
          title="Design Art"
          backgroundColor="#FF7A4C"
          imageUrl="https://framerusercontent.com/images/TXmaTyuH0kXQJXdyaxO3tYlA0c.gif"
        />
        <CategoryBox
          title="Chemistry"
          backgroundColor="#988BFF"
          imageUrl="https://framerusercontent.com/images/GvmeDhLAlp3VrJvyCiDyr9cFNSw.gif"
        />
      </View>

      {/* Row 2 */}
      <View style={styles.row}>
        <CategoryBox
          title="Science"
          backgroundColor="#2A2F96"
          imageUrl="https://framerusercontent.com/images/lR7MGa4wM64LRAZzHhM5QoIHpk.gif"
        />
        <CategoryBox
          title="Math"
          backgroundColor="#FFC45C"
          imageUrl="https://framerusercontent.com/images/OKTJjeoKHEYodoJfrbbfgQE69A.gif"
        />
      </View>
    </View>
  );
};

type CategoryBoxProps = {
  title: string;
  backgroundColor: string;
  imageUrl?: string;
};

const CategoryBox: React.FC<CategoryBoxProps> = ({
  title,
  backgroundColor,
  imageUrl,
}) => {
  return (
    <View style={[styles.box, { backgroundColor }]}>
      <View style={styles.imageContainer}>
        {imageUrl ? (
          <Image
            source={{ uri: imageUrl }}
            style={styles.image}
            resizeMode="contain"
          />
        ) : (
          <View style={styles.placeholder} />
        )}
      </View>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    gap: 12,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  box: {
    width: "48%",
    aspectRatio: 1,
    borderRadius: 30,
    padding: 16,
    justifyContent: "space-between",
    overflow: "hidden",
  },
  imageContainer: {
    flex: 1,
  },
  image: {
    height: 80,
    width: 80,
  },
  placeholder: {
    height: 60,
    width: 60,
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    borderRadius: 12,
  },
  title: {
    color: "white",
    fontSize: 20,
    fontWeight: "400",
  },
});
