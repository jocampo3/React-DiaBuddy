import * as React from 'react';
import { TouchableOpacity, View, Text, StyleSheet, Dimensions } from 'react-native';
import { router } from "expo-router";
import buttonStyles from "@/assets/styles/buttonStyles";

// Get the window dimensions
const { width, height } = Dimensions.get("window");

export default function AboutPage4() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>BOOM! We are DiaBuddies Superheroes!</Text>

      <Text style={styles.bodyText}>
        But guess what? We are the DiaBuddies superheroes, and we know how to handle it like pros! 💥
      </Text>

      <Text style={styles.bodyText}>
        We have special equipment, like insulin injectors or pumps, that helps us get the power we need to complete every mission we have to confront. 💪✨
      </Text>

      <TouchableOpacity
        style={buttonStyles.pageButtons}
        onPress={() => router.push("/pages/NextPage")}
      >
        <Text style={buttonStyles.text}>Next Mission</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
    marginTop: 50
  },
  title: {
    fontSize: height * 0.05,  // Dynamic size based on screen height
    fontWeight: 'bold',
    color: '#DC7633',
    textAlign: 'center',
    marginBottom: 10,
  },
  bodyText: {
    fontSize: height * 0.025,  // Dynamic size based on screen height
    color: '#555',
    textAlign: 'center',
    marginBottom: 20,
    paddingHorizontal: width * 0.05,  // Padding relative to screen width
  },
});
