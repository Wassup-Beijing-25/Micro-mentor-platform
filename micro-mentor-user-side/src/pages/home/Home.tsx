import React from "react";
import { ScrollView, Text, View } from "react-native";
import { CategoryGrid } from "src/components/shared/categoryGrid/CategoryGrid";
import { HomeHeader } from "src/components/shared/homeheader/Homeheader";
import { GradientCardList } from "src/components/shared/list/GradientCardList";
import { TopMentorList } from "src/components/shared/list/MentorList";

export const HomePage = () => {
  return (
    <ScrollView
      style={{ flex: 1, padding: 20, backgroundColor: "#fff" }}
      showsVerticalScrollIndicator={false}
    >
      <HomeHeader />
      <CategoryGrid />
      <TopMentorList />
      <GradientCardList />
    </ScrollView>
  );
};
