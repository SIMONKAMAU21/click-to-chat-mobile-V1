import React, { useState } from "react";
import {
  Linking,
  StyleSheet,
  Text,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
  View,
} from "react-native";

import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useColorScheme } from "@/hooks/useColorScheme.web";
import { FontAwesome6, MaterialIcons } from "@expo/vector-icons";
import { Country, CountryCode } from "react-native-country-picker-modal";

export default function TabTwoScreen() {
  const [userName, setUserName] = useState("");

  const openTelegram = () => {
    Linking.openURL(`https://t.me/${userName}`);
  };

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#007AFF", dark: "#007AFF" }}
      headerImage={
        <FontAwesome6 name="telegram" size={250} style={styles.headerImage} />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="link">
          Enter user name to open a chat on Telegram{" "}
          {new Date().getDate().toLocaleString()}
        </ThemedText>
      </ThemedView>

      {/* WhatsApp Section */}
      <View style={styles.whatsAppContainer}>
        <Text style={styles.label}>Enter Telehram user Name:</Text>

        <View style={styles.row}>
          {/* <Text style={styles.code}>+{callingCode}</Text> */}

          <TextInput
            style={styles.input}
            placeholder="johndoe"
            keyboardType="default"
            returnKeyType="done"
            // value={`${callingCode} ${phoneNumber}`}
            value={userName}
            onChangeText={setUserName}
          />
        </View>

        <TouchableOpacity style={styles.button} onPress={openTelegram}>
          <FontAwesome6 name="telegram" size={25} color={"white"} />
          <Text style={styles.buttonText}>Open in Telegram</Text>
        </TouchableOpacity>
      </View>

      {/* Existing Content */}
      <View style={{ alignSelf: "baseline", flex: 1, marginTop: "50%" }}>
        {/* <ThemedText type="link">
                This app allows users to quickly start a WhatsApp or SMS conversation
                by entering a phone number. It supports selecting a country code
                (optional) and generates a direct link to open the chat in WhatsApp or
                the default messaging app without needing to save the number in
                contacts. Ideal for fast, contactless communication.
              </ThemedText>
              <ThemedText type="subtitle">
                Simon Kamu @{new Date().getFullYear()}{" "}
              </ThemedText> */}
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
    alignItems: "center",
    // maxHeight:900,
    borderRadius: 10,
    backgroundColor: "rgba(29, 29, 31,1)",
    shadowColor: "#007AFF",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 50,
    elevation: 75, // Android
  },
  label: {
    fontSize: 16,
    marginBottom: 15,
    fontWeight: "500",
    color: "#fff",
    width: "80%",
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  column: {
    flexDirection: "column",
    alignItems: "center",
    gap: 10,
    flex: 2,

    // flex:2
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
    backgroundColor: "#007AFF",
    paddingVertical: 10,
    borderRadius: 20,
    marginTop: "20%",
    paddingHorizontal: 20,
    flexDirection: "row",
    flex: 1,
    gap: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "600",
    fontSize: 16,
  },
});
