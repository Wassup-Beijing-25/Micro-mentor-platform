import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { MentorCard } from "../mentorCard/MentorCard";

type MentorCardType = {
  id: string;
  name: string;
  company: string;
  title: string;
  tagline: string;
  imageUrl: string;
  jobColor: string;
};

const MENTORS: MentorCardType[] = [
  {
    id: "1",
    name: "Jane Cooper",
    company: "Google",
    title: "UX Designer",
    tagline: "Career Advice, Design course",
    imageUrl:
      "https://media.istockphoto.com/id/1338134336/photo/headshot-portrait-african-30s-man-smile-look-at-camera.jpg?s=612x612&w=0&k=20&c=kUVdvBnwnZRxausswIKRZuC25bZgTXwrmGSPikdcOro=",
    jobColor: "#FF9C9C",
  },
  {
    id: "2",
    name: "Guy Hawkins",
    company: "Facebook",
    title: "UX Designer",
    tagline: "Career Advice, Portfolio Review",
    imageUrl:
      "https://static.vecteezy.com/system/resources/thumbnails/051/202/259/small/smiling-teacher-with-arms-crossed-on-white-background-world-teachers-day-photo.jpg",
    jobColor: "#F76D6D",
  },
  {
    id: "3",
    name: "Cameron Williamson",
    company: "Microsoft",
    title: "UI Designer",
    tagline: "Career Advice, Leadership",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI3-ssKiTTho0kTQAn4UyZichSqJ6IEXXDxA&s",
    jobColor: "#FF6EC7",
  },
  {
    id: "4",
    name: "Darlene Robertson",
    company: "edX",
    title: "UI Designer",
    tagline: "Career Advice, Portfolio Review",
    imageUrl:
      "https://media.istockphoto.com/id/2194081490/photo/closeup-headshot-portrait-of-young-asian-businesswoman.jpg?s=612x612&w=0&k=20&c=kbymrEu9BoYXITMAVAx2ggTFbYmstYVJUjMei8-U8wA=",
    jobColor: "#C17DFF",
  },
];

export const GradientCardList = () => {
  // Group mentors in rows of two
  const rows = MENTORS.reduce((acc: MentorCardType[][], curr, idx) => {
    if (idx % 2 === 0) acc.push([curr]);
    else acc[acc.length - 1].push(curr);
    return acc;
  }, []);

  return (
    <ScrollView style={styles.wrapper}>
      <View style={styles.header}>
        <Text style={styles.title}>Now Online</Text>
        <Text style={styles.showAll}>Show All</Text>
      </View>

      {rows.map((row, i) => (
        <View key={i} style={styles.row}>
          {row.map((mentor) => (
            <MentorCard key={mentor.id} {...mentor} />
          ))}
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    paddingTop: 20,
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
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 14,
  },
});
