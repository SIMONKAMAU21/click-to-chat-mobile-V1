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
import { Zocial } from "@expo/vector-icons";

export default function TabTwoScreen() {
  const [email, setEmail] = useState("");

  const openMail = () => {
    Linking.openURL(`mailto:${email}?subject=Hello&body=This is the message`);
    setEmail("");
  };

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#25D366", dark: "teal" }}
      headerImage={
        // <FontAwesome6 name="telegram" size={250} style={styles.headerImage} />
        <Zocial name="email" size={250} style={styles.headerImage} />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="link">
          Enter Email to open a chat on Email{" "}
          {new Date().getDate().toLocaleString()}
        </ThemedText>
      </ThemedView>

      {/* WhatsApp Section */}
      <View style={styles.whatsAppContainer}>
        <Text style={styles.label}> Email :</Text>

        <View style={styles.row}>
          {/* <Text style={styles.code}>+{callingCode}</Text> */}

          <TextInput
            style={styles.input}
            placeholder="johndoe@gmail.com"
            keyboardType="email-address"
            returnKeyType="done"
            value={email}
            onChangeText={setEmail}
          />
        </View>

        <TouchableOpacity style={styles.button} onPress={openMail}>
          <Zocial name="email" size={25} color={"white"} />
          <Text style={styles.buttonText}>Open on Mail</Text>
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
    shadowColor: "teal",
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
  code: {
    fontSize: 16,
    paddingHorizontal: 8,
    height: 45,
    lineHeight: 45,
    backgroundColor: "#fff",
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRightWidth: 0, // Merge into input
    textAlignVertical: "center",
  },
  country: {
    paddingHorizontal: 8,
    height: 45,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    borderColor: "#ccc",
    borderWidth: 1,
    left: "40%",
    width: "20%",
    marginTop: "8%",
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
