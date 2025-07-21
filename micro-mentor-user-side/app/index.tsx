// app/index.tsx
import { StatusBar } from "expo-status-bar";
import { View, Text, ScrollView } from "react-native";
import Login from "src/pages/auth/login/Login";
import { Layout } from "src/pages/layout/Layout";

export default function IndexScreen() {
  return (
    <>
      <StatusBar style="dark" />
      <Layout />
    </>
  );
}
