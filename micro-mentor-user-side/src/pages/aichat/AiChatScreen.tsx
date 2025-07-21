import React, { useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
  Image,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Entypo, Ionicons } from "@expo/vector-icons";

type Message = {
  id: string;
  text: string;
  sender: "user" | "ai";
};

export const AiChatScreen = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const flatListRef = useRef<FlatList>(null);

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      text: input,
      sender: "user",
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");

    setTimeout(() => {
      const aiReply: Message = {
        id: Date.now().toString() + "_ai",
        text: `🤖 That's interesting! Tell me more.`,
        sender: "ai",
      };
      setMessages((prev) => [...prev, aiReply]);
    }, 800);
  };

  const renderItem = ({ item }: { item: Message }) => {
    const isUser = item.sender === "user";
    return (
      <View
        style={[
          styles.messageBubble,
          isUser ? styles.userBubble : styles.aiBubble,
        ]}
      >
        <Text style={styles.messageText}>{item.text}</Text>
      </View>
    );
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 80 : 0}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <LinearGradient
          colors={["#fdf2f8", "#f5f3ff", "#f0f9ff"]}
          style={styles.container}
        >
          {/* Logo / Header */}
          {messages.length === 0 && (
            <View style={styles.logoContainer}>
              <View style={styles.logoCircle}>
                <Image
                  source={{
                    uri: "https://framerusercontent.com/images/l6b5dqTTqCOpEu9F4Rtj1OkAfI.gif",
                  }}
                  style={styles.avatar}
                />
              </View>
              <View style={styles.textBlock}>
                <Text style={styles.subText}>Hi, Tuhin</Text>
                <Text style={styles.mainText}>search with Ai</Text>
              </View>
            </View>
          )}

          {/* Chat messages */}
          <FlatList
            ref={flatListRef}
            data={messages}
            keyExtractor={(item) => item.id}
            renderItem={renderItem}
            contentContainerStyle={styles.chatArea}
            onContentSizeChange={() =>
              flatListRef.current?.scrollToEnd({ animated: true })
            }
          />

          {/* Input */}
          <View style={styles.inputWrapper}>
            <View
              style={{
                marginRight: 10,
                backgroundColor: "gray",
                padding: 4,
                borderRadius: 999,
              }}
            >
              <TouchableOpacity onPress={() => alert("Settings pressed")}>
                <Entypo name="link" size={24} color="white" />
              </TouchableOpacity>
            </View>

            <TextInput
              value={input}
              onChangeText={setInput}
              placeholder="Ask SayHalo anything..."
              placeholderTextColor="#999"
              style={styles.input}
              onSubmitEditing={sendMessage}
              returnKeyType="send"
            />
            <TouchableOpacity onPress={sendMessage} style={styles.sendButton}>
              <Ionicons name="send" size={28} color="#f97316" />
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 50,
  },
  textBlock: {
    marginTop: 10,
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
  logoContainer: {
    paddingTop: 70,
    paddingBottom: 30,
  },
  logoCircle: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  greeting: {
    fontSize: 22,
    fontWeight: "600",
    color: "#444",
    marginTop: 12,
  },
  question: {
    fontSize: 20,
    fontWeight: "700",
    color: "#111",
    marginTop: 4,
  },
  sub: {
    fontSize: 14,
    color: "#666",
    textAlign: "center",
    marginTop: 10,
    lineHeight: 20,
    paddingHorizontal: 12,
  },
  chatArea: {
    paddingBottom: 120,
    gap: 10,
  },
  messageBubble: {
    maxWidth: "75%",
    padding: 12,
    borderRadius: 16,
    marginBottom: 8,
  },
  userBubble: {
    backgroundColor: "#f97316",
    alignSelf: "flex-end",
    borderBottomRightRadius: 0,
  },
  aiBubble: {
    backgroundColor: "#f1f1f1",
    alignSelf: "flex-start",
    borderBottomLeftRadius: 0,
  },
  messageText: {
    fontSize: 14,
    color: "#000",
  },
  inputWrapper: {
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 25,
    paddingHorizontal: 16,
    paddingVertical: 10,
    marginBottom: 20,
    marginTop: "auto",
    shadowColor: "gray",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.07,
    shadowRadius: 6,
    elevation: 8,
  },
  input: {
    flex: 1,
    paddingHorizontal: 10,
    fontSize: 14,
    color: "#333",
  },
  sendButton: {
    // backgroundColor: "#f97316",
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 20,
    marginLeft: 8,
  },
});
