import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  SafeAreaView,
  ScrollView,
} from "react-native";
import {
  Ionicons,
  Feather,
  AntDesign,
  MaterialIcons,
} from "@expo/vector-icons";

export const ProfileScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{ paddingBottom: 40 }}>
        {/* Profile Picture */}
        <View style={styles.avatarContainer}>
          <View style={styles.avatarBg}>
            <Image
              source={{
                uri: "https://framerusercontent.com/images/TXmaTyuH0kXQJXdyaxO3tYlA0c.gif",
              }}
              style={styles.avatar}
            />
          </View>
          <Text style={styles.name}>Alax Anmaksion</Text>
          <Text style={styles.levelText}>80 points to next level</Text>
        </View>

        {/* Quick Actions */}
        <View style={styles.actions}>
          <ActionBox icon="staro" color="#DCFCE7" iconColor="#22C55E" />
          <ActionBox icon="Trophy" color="#E0E7FF" iconColor="#4F46E5" />
          <ActionBox icon="like2" color="#FCE7F3" iconColor="#EC4899" />
        </View>

        {/* Settings Section */}
        <View style={styles.section}>
          <ProfileOption icon="settings-outline" text="Settings" />
          <ProfileOption icon="help-circle-outline" text="Help & Support" />
          <ProfileOption icon="alert-circle-outline" text="Report a Problem" />
          <ProfileOption icon="log-out-outline" text="Logout" color="#EF4444" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const ActionBox = ({
  icon,
  color,
  iconColor,
}: {
  icon: any;
  color: string;
  iconColor: string;
}) => {
  return (
    <TouchableOpacity style={[styles.actionBox, { backgroundColor: color }]}>
      <AntDesign name={icon} size={24} color={iconColor} />
    </TouchableOpacity>
  );
};

const ProfileOption = ({
  icon,
  text,
  color = "#111",
}: {
  icon: any;
  text: string;
  color?: string;
}) => {
  return (
    <TouchableOpacity style={styles.option}>
      {/* <Ionicons name={icon} size={22} color={color} style={{ width: 30 }} /> */}
      <Text style={[styles.optionText, { color }]}>{text}</Text>
      <Feather
        name="chevron-right"
        size={18}
        color="#999"
        style={{ marginLeft: "auto" }}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
  },
  avatarContainer: {
    alignItems: "center",
    marginTop: 60,
  },
  avatarBg: {
    width: 140,
    height: 140,
    borderRadius: 999,
    backgroundColor: "#FFE9C7",
    justifyContent: "center",
    alignItems: "center",
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 50,
  },
  name: {
    fontSize: 24,
    fontWeight: "700",
    marginTop: 16,
    color: "#111",
  },
  levelText: {
    fontSize: 14,
    color: "#666",
    marginTop: 6,
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 30,
    paddingHorizontal: 30,
  },
  actionBox: {
    width: 64,
    height: 64,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  section: {
    marginTop: 40,
    paddingHorizontal: 10,
    gap: 14,
  },
  option: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 18,
    borderBottomColor: "#f0f0f0",
    backgroundColor: "#f0f0f0bf",
    paddingHorizontal: 10,
    borderRadius: 16,
  },
  optionText: {
    fontSize: 16,
    fontWeight: "500",
    paddingLeft: 10,
  },
});
