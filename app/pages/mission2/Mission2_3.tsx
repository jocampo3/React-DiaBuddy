import * as React from 'react';
import { TouchableOpacity, View, Text, StyleSheet, Dimensions, Image } from 'react-native';
import { router } from "expo-router";
import buttonStyles from "@/assets/styles/buttonStyles";

// Get the window dimensions
const { width, height } = Dimensions.get("window");

export default function CheckGlucosePage3() {
    return (
        <View style={styles.stepContainer}>
        <Image
          source={require('@/assets/images/DiaBuddyHeros/step3.png')} // Replace with actual image URL
          style={styles.image}
        />
        <Text style={styles.stepText}>
          Step 3: Record your levels. Knowing your glucose level is your superpower to stay energized!
        </Text>
      </View> 
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#f5f5f5',
      padding: 20,
    },
    title: {
      fontSize: height * 0.05, // Dynamic font size based on screen height
      fontWeight: 'bold',
      color: '#FF5733',
      textAlign: 'center',
      marginBottom: 20,
    },
    bodyText: {
      fontSize: height * 0.03, // Dynamic font size for better readability
      color: '#555',
      textAlign: 'center',
      marginBottom: 20,
      paddingHorizontal: width * 0.05,
    },
    stepContainer: {
      flex: 1, // Ensures this component occupies the vertical space
      justifyContent: 'center', // Centers content vertically
      alignItems: 'center', // Centers content horizontally
      backgroundColor: '#f5f5f5',
    },
    image: {
      width: width * 0.7, // Image width scales with screen size
      height: height * 0.35, // Image height scales with screen size
      resizeMode: 'contain',
      marginBottom: 10,
    },
    stepText: {
      fontSize: height * 0.025,
      color: '#333',
      textAlign: 'center',
      paddingHorizontal: width * 0.05,
    },
  });
  
