import * as React from 'react';
import { TouchableOpacity, View, Text, StyleSheet, Dimensions } from 'react-native';
import { router } from "expo-router";
import buttonStyles from "@/assets/styles/buttonStyles";

// Get the window dimensions
const { width, height } = Dimensions.get("window");

export default function AboutPage3() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Special Mission</Text>

      <Text style={styles.bodyText}>
        But sometimes, some kids like us have a little challenge or extra mission to accomplish, so we must get very special equipment to save us all.
      </Text>

      <Text style={styles.bodyText}>
        Our body might not make enough of this hormone (the car) called insulin, so it's like we are missing the transportation to go to other organs (buildings) to complete our super mission and regulate the sugar we eat. That's what we call type 1 diabetes.
      </Text>

      <TouchableOpacity
        style={buttonStyles.pageButtons}
        onPress={() => router.push("/pages/WhatIsType1Diabetes")}
      >
        <Text style={styles.text}>Learn More About Type 1 Diabetes</Text>
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
    marginTop: 50,
    padding: 20,
  },
  text: {
    color: "black"
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
