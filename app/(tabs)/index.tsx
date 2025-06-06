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
import { FontAwesome6 } from "@expo/vector-icons";
import CountryPicker, {
  Country,
  CountryCode,
} from "react-native-country-picker-modal";

export default function TabTwoScreen() {
  const [countryCode, setCountryCode] = useState<CountryCode>("KE"); // Default to Kenya
  const [callingCode, setCallingCode] = useState("254");
  const [phoneNumber, setPhoneNumber] = useState("");

  const onSelect = (country: Country) => {
    setCountryCode(country.cca2);
    setCallingCode(country.callingCode[0]);
  };

  const openWhatsApp = () => {
    const cleaned = phoneNumber.replace(/\D/g, "");
    if (cleaned.length >= 9) {
      Linking.openURL(
        `https://wa.me/${callingCode}${cleaned}?text=God Bless You👋`
      );
      setPhoneNumber("");
    } else {
      ToastAndroid.show(
        "Please enter a valid phone number.",
        ToastAndroid.SHORT
      );
    }
  };

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#25D366", dark: "#25D366" }}
      headerImage={
        <FontAwesome6 name="whatsapp" size={250} style={styles.headerImage} />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">click to chat</ThemedText>
      </ThemedView>

      {/* WhatsApp Section */}
      <View style={styles.whatsAppContainer}>
        <Text style={styles.label}>Enter Phone Number:</Text>
        <View style={styles.row}>
          <Text style={styles.code}>+{callingCode}</Text>
          {/* <View style={styles.column}> */}

          <TextInput
            style={styles.input}
            placeholder="712345678"
            keyboardType="phone-pad"
            returnKeyType="done"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
          />
          {/* </View> */}
        </View>

        <CountryPicker
          withCallingCode
          withFlag
          withFilter
          containerButtonStyle={styles.country}
          countryCode={countryCode}
          onSelect={onSelect}
        />
        <TouchableOpacity style={styles.button} onPress={openWhatsApp}>
          <Text style={styles.buttonText}>Open in WhatsApp</Text>
        </TouchableOpacity>
      </View>

      {/* Existing Content */}
      {/* ...keep rest of your Collapsible content here... */}
      <View style={{ alignSelf: "baseline", flex: 1, marginTop: "50%" }}>
        <ThemedText type="link">
          This app allows users to quickly start a WhatsApp or SMS conversation
          by entering a phone number. It supports selecting a country code
          (optional) and generates a direct link to open the chat in WhatsApp or
          the default messaging app without needing to save the number in
          contacts. Ideal for fast, contactless communication.
        </ThemedText>
        <ThemedText type="subtitle">
          Simon Kamu @{new Date().getFullYear()}{" "}
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
    backgroundColor: "rgba(29, 29, 31,1)",
    shadowColor: "#25D366",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.9,
    shadowRadius: 50,
    elevation: 75, // Android
    alignItems:"center"

  },
  label: {
    fontSize: 16,
    marginBottom: 10,
    fontWeight: "500",
    color: "#fff",
    width: "80%",
    
  },
  code: {
    fontSize: 16,
    paddingHorizontal: 8,
    height: 45,
    lineHeight: 45,
    backgroundColor: "rgba(21, 21, 22, 0.8)",
    color: "white",
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRightWidth: 0, // Merge into input
    textAlignVertical: "center",
  },
  country: {
    paddingHorizontal: 8,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    // left: "40%",
    width: "10%",
    marginTop: "8%",
    alignItems: "center",
    shadowColor: "green",
    justifyContent: "center",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.9,
    shadowRadius: 50,
    elevation: 5, // Android
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    // justifyContent: "center",
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
    width: "80%",
    cursor: "auto",
    maxWidth: 455,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    borderColor: "#ccc",
    borderWidth: 1,
    color: "white",
    borderLeftWidth: 0, // Merge into code box
    paddingHorizontal: 10,
    backgroundColor: "rgba(21, 21, 22, 0.8)",
  },
  button: {
    backgroundColor: "#25D366",
    paddingVertical: 10,
    borderRadius: 20,
    paddingHorizontal:20,
    marginTop: "20%",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "600",
    fontSize: 16,
  },
});
