import React, { useState } from "react";
import {
  Linking,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useColorScheme } from "@/hooks/useColorScheme.web";
import { MaterialIcons } from "@expo/vector-icons";
import { Country, CountryCode } from "react-native-country-picker-modal";

export default function TabTwoScreen() {
  const colorScheme = useColorScheme();

  const [countryCode, setCountryCode] = useState<CountryCode>("KE"); // Default to Kenya
  const [callingCode, setCallingCode] = useState("254");
  const [phoneNumber, setPhoneNumber] = useState("");

  const onSelect = (country: Country) => {
    setCountryCode(country.cca2);
    setCallingCode(country.callingCode[0]);
  };

  const openMessages = () => {
    const cleaned = phoneNumber.replace(/\D/g, "");
    if (cleaned.length >= 10) {
      Linking.openURL(`sms:${cleaned}`);
      setPhoneNumber("")
    } else {
      alert("Please enter a valid phone number.");
    }
  };

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#007AFF", dark: "#007AFF" }}
      headerImage={
        // <IconSymbol
        //   size={310}
        //   color="#808080"
        //   name="chevron.left.forwardslash.chevron.right"
        //   style={styles.headerImage}
        // />
        <MaterialIcons
          name="message"
          size={250}
          color="black"
          style={styles.headerImage}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">click to chat {new Date().getFullYear()}</ThemedText>
      </ThemedView>

      {/* WhatsApp Section */}
      <View style={styles.whatsAppContainer}>
        <View style={styles.row}>
          <Text style={styles.code}>+{callingCode}</Text>
          <View style={styles.column}>
            <Text style={styles.label}>Enter Phone Number:</Text>

            <TextInput
              style={styles.input}
              placeholder="712345678"
              keyboardType="phone-pad"
              returnKeyType="done"
              // value={`${callingCode} ${phoneNumber}`}
              value={phoneNumber}
              onChangeText={setPhoneNumber}
            />
          </View>
        </View>

        <TouchableOpacity style={styles.button} onPress={openMessages}>
          <MaterialIcons name="message" size={24} color="white" />{" "}
          <Text style={styles.buttonText}>Open in Message</Text>
        </TouchableOpacity>
      </View>

      {/* Existing Content */}
      {/* ...keep rest of your Collapsible content here... */}
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
    borderColor: "#007AFF",
    // paddingHorizontal: 20,
    // backgroundColor:"#fff"
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: "500",
    color: "#fff",
    width: "100%",
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
    marginTop: "8%",
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
    width: "100%",
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    borderColor: "#ccc",
    borderWidth: 1,
    borderLeftWidth: 0, // Merge into code box
    paddingHorizontal: 10,
    backgroundColor: "white",
  },
  button: {
    backgroundColor: "#007AFF",
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: "30%",
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
