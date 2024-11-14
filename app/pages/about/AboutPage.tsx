import * as React from 'react';
import { TouchableOpacity, View, Text, StyleSheet, Image, Dimensions,ActivityIndicator } from 'react-native';
import { router } from "expo-router";
import buttonStyles from "@/assets/styles/buttonStyles";

// Get the window dimensions
const { width, height } = Dimensions.get("window");

export default function AboutPage() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Why am I a DiaBuddy Superhero?</Text>
      
      <Text style={styles.subtitle}>
        Hey kiddo, let's talk about something super cool like superheroes!
      </Text>
      
      <Text style={styles.bodyText}>
        You know, superheroes have powers, courage, bravery, kindness, and very special equipment that help them save the day.
      </Text>
      
      <Text style={styles.bodyText}>
        Just like superheroes, people with Type 1 Diabetes have special equipment (like a pump or a pen) and they need to check their blood sugar regularly to stay healthy and strong!
      </Text>
      
      <Image 
        source={{ uri: 'https://example.com/superhero-image.png' }} 
        style={styles.image} 
      />
      
      <TouchableOpacity 
        style={buttonStyles.button} 
        onPress={() => router.push("/pages/WhatIsType1Diabetes")}
      >
        <Text style={buttonStyles.buttonText}>Learn More</Text>
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
    marginTop: height * 0.35,
    padding: width * 0.05, // Use a percentage of the width for padding
  },
  title: {
    fontSize: height * 0.05,  // 5% of screen height for title size
    fontWeight: 'bold',
    color: '#DC7633',
    textAlign: 'center',
    marginBottom: height * 0.02, // Margin proportional to screen height
  },
  subtitle: {
    fontSize: height * 0.03,  // 3% of screen height for subtitle size
    color: '#333',
    marginBottom: height * 0.02,  // Margin proportional to screen height
    textAlign: 'center',
    paddingHorizontal: width * 0.05, // Horizontal padding based on screen width
  },
  bodyText: {
    fontSize: height * 0.025, // 2.5% of screen height for body text size
    color: '#555',
    textAlign: 'center',
    marginBottom: height * 0.02, // Margin proportional to screen height
    paddingHorizontal: width * 0.05, // Horizontal padding based on screen width
  },
  image: {
    width: width * 0.5,  // 50% of screen width for the image width
    height: width * 0.5, // Keep the image square
    marginBottom: height * 0.05, // Margin proportional to screen height
    borderRadius: 10,
  },
});
