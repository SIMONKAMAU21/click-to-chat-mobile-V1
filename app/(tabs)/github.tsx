import React, { useState } from "react";
import {
  Linking,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  ToastAndroid,
} from "react-native";

import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useColorScheme } from "@/hooks/useColorScheme.web";
import { Zocial } from "@expo/vector-icons";

export default function TabTwoScreen() {
  const colorScheme = useColorScheme();

  const [username, setUsername] = useState("");
  const [result, setResult] = useState(null);

  const searchGitHubUser = async () => {
    if (username.trim() === "") {
      // alert("Please enter a GitHub username.");
            ToastAndroid.show("Please enter a GitHub username." ,ToastAndroid.LONG);

      return;
    }

    try {
      const response = await fetch(`https://api.github.com/search/users?q=${username}`);
      const data = await response.json();

      if (data.items && data.items.length > 0) {
        setResult(data.items[0]);
      } else {
        setResult(null);
      ToastAndroid.show("User not found" ,ToastAndroid.LONG);
      }
    } catch (error) {
      console.error(error);
      alert("Error searching user.");
    }
  };

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#24292e", dark: "#24292e" }}
      headerImage={
        <Zocial name="github" size={250} style={styles.headerImage} />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">GitHub User Search</ThemedText>
      </ThemedView>

      {/* GitHub Search Section */}
      <View style={styles.whatsAppContainer}>
        <View style={styles.column}>
          <Text style={styles.label}>Enter GitHub Username:</Text>
          <TextInput
            style={styles.input}
            placeholder="e.g. octocat"
            value={username}
            onChangeText={setUsername}
          />
        </View>

        <TouchableOpacity style={styles.button} onPress={searchGitHubUser}>
          <Text style={styles.buttonText}>Search GitHub</Text>
        </TouchableOpacity>

        {result && (
          <View style={styles.resultContainer}>
            <Image
              source={{ uri: result.avatar_url }}
              style={styles.avatar}
            />
            <Text style={styles.resultText}>{result.login}</Text>
            <TouchableOpacity
              onPress={() => Linking.openURL(result.html_url)}
            >
        <ThemedText type="link">view Profile</ThemedText>
            </TouchableOpacity>
          </View>
        )}
      </View>

      {/* Footer */}
      <View style={{ alignSelf: "baseline", flex: 1, marginTop: "50%" }}>
        <ThemedText type="link">
          This app allows users to quickly search for any GitHub user by username. It fetches and displays the user's avatar, username, and a link to their profile. A simple way to explore GitHub profiles!
        </ThemedText>
        <ThemedText type="subtitle">
          Simon Kamu @{new Date().getFullYear()}
        </ThemedText>
      </View>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: "#fff",
    bottom: -60,
    left: "25%",
    position: "absolute",
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
  whatsAppContainer: {
    marginTop: "20%",
    marginBottom: 30,
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#24292e",
    backgroundColor:"#24292e",
      shadowColor: "#24292e",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 50,
    elevation: 75, // Android
  },
  label: {
    fontSize: 16,
    marginBottom: 3,
    fontWeight: "500",
    color: "#fff",
    width: "80%",
  },
  column: {
    flexDirection: "column",
    alignItems: "center",
    gap: 10,
    flex: 1,
  },
  input: {
   flex: 1,
    height: 45,
    width: "90%",
    cursor: "auto",
    maxWidth: 500,
    // borderTopRightRadius: 10,
    // borderBottomRightRadius: 10,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 10,
    color: "white",
    paddingHorizontal: 10,
    backgroundColor: "rgba(21, 21, 22, 0.8)",
  },
  button: {
    backgroundColor: "#24292e",
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: "10%",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "600",
    fontSize: 16,
  },
  resultContainer: {
    marginTop: 20,
    alignItems: "center",
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  resultText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#fff",
  },
  profileLink: {
    color: "#1E90FF",
    textDecorationLine: "underline",
  },
});
