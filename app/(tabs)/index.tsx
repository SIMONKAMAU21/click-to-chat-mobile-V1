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
import { FontAwesome6 } from "@expo/vector-icons";
import CountryPicker, {
  Country,
  CountryCode,
} from "react-native-country-picker-modal";

export default function TabTwoScreen() {
  const colorScheme = useColorScheme();

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
      Linking.openURL(`https://wa.me/${callingCode}${cleaned}`);
      setPhoneNumber("")
    } else {
      alert("Please enter a valid phone number.");
    }
  };

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#25D366", dark: "#25D366" }}
      headerImage={
        // <IconSymbol
        //   size={310}
        //   color="#808080"
        //   name="chevron.left.forwardslash.chevron.right"
        //   style={styles.headerImage}
        // />
        <FontAwesome6 name="whatsapp" size={250} style={styles.headerImage} />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">click to chat</ThemedText>
      </ThemedView>

      {/* WhatsApp Section */}
      <View style={styles.whatsAppContainer}>
        <View style={styles.row}>
          {/* <CountryPicker
            withCallingCode
            withFlag
            withFilter
            countryCode={countryCode}
            onSelect={onSelect}
            visible={visible}
            onClose={() => setVisible(false)}
            onOpen={() => setVisible(true)}
          /> */}

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
        
        <CountryPicker
          withCallingCode
          withFlag
          withFilter
          containerButtonStyle={styles.country}
          countryCode={countryCode}
          onSelect={onSelect}
        />
        {/* <AntDesign name="downcircleo" size={24} color="white" /> */}
        <TouchableOpacity style={styles.button} onPress={openWhatsApp}>
          <Text style={styles.buttonText}>Open in WhatsApp</Text>
        </TouchableOpacity>
      </View>

      {/* Existing Content */}
      {/* ...keep rest of your Collapsible content here... */}
      <View style={{alignSelf:"baseline",flex:1, marginTop:"50%"}}>
        <ThemedText type="link">
          This app allows users to quickly start a WhatsApp or SMS conversation by entering a phone number. It supports selecting a country code (optional) and generates a direct link to open the chat in WhatsApp or the default messaging app without needing to save the number in contacts. Ideal for fast, contactless communication.
        </ThemedText>
              <ThemedText type="subtitle"> Simon Kamu @{new Date().getFullYear()} </ThemedText>

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
    borderColor: "#25D366",
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
    left:"40%",
    width:"20%",
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
    backgroundColor: "#25D366",
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: "20%",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "600",
    fontSize: 16,
  },
});
