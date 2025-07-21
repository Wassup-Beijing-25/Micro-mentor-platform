import React, { ReactElement, useState } from "react";
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Text,
  SafeAreaView,
} from "react-native";
import { Feather, Ionicons } from "@expo/vector-icons";
import { HomePage } from "../home/Home";
import { AiChatScreen } from "../aichat/AiChatScreen";
import { ProfileScreen } from "../profilePage/ProfilePage";

// Dummy screen components
const Bookmark = () => (
  <Text style={styles.screenText}>🔖 Bookmark Screen</Text>
);
const Notes = () => <Text style={styles.screenText}>📝 Notes Screen</Text>;
const Profile = () => <Text style={styles.screenText}>👤 Profile Screen</Text>;

const ICON_SIZE = 28;

export const Layout = () => {
  const [activeTab, setActiveTab] = useState<
    "home" | "bookmark" | "notes" | "profile"
  >("home");

  const renderScreen = () => {
    switch (activeTab) {
      case "home":
        return <HomePage />;
      case "bookmark":
        return <AiChatScreen />;
      case "notes":
        return <Notes />;
      case "profile":
        return <ProfileScreen />;
      default:
        return null;
    }
  };

  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        <View style={styles.screen}>{renderScreen()}</View>

        <View style={styles.navBar}>
          <TabButton
            icon={<Feather name="home" size={ICON_SIZE} />}
            active={activeTab === "home"}
            onPress={() => setActiveTab("home")}
          />
          <TabButton
            icon={<Ionicons name="sparkles" size={ICON_SIZE} />}
            active={activeTab === "bookmark"}
            onPress={() => setActiveTab("bookmark")}
          />
          <TabButton
            icon={<Feather name="file-text" size={ICON_SIZE} />}
            active={activeTab === "notes"}
            onPress={() => setActiveTab("notes")}
          />
          <TabButton
            icon={<Feather name="user" size={ICON_SIZE} />}
            active={activeTab === "profile"}
            onPress={() => setActiveTab("profile")}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

type TabButtonProps = {
  icon: ReactElement;
  active: boolean;
  onPress: () => void;
};

const TabButton: React.FC<TabButtonProps> = ({ icon, active, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.tabButton}>
      {React.cloneElement(icon, {
        color: active ? "#000" : "#aaa",
      })}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    flex: 1,
    justifyContent: "space-between", // <-- Crucial!
  },
  screen: {
    flex: 1,
  },
  screenText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  navBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    borderTopWidth: 1,
    paddingBottom: 12,
    paddingTop: 5,
    borderTopColor: "#eee",
    backgroundColor: "#fff",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    overflow: "hidden", // optional but helps with clipping
    elevation: 10, // for shadow on Android
    shadowColor: "#000", // for iOS shadow
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },

  tabButton: {
    padding: 10,
  },
});
