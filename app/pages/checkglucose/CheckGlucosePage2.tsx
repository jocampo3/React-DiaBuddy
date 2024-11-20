import * as React from 'react';
import { TouchableOpacity, View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import { router } from "expo-router";
// import styles from "@/assets/styles/buttonStyles";

// Get the window dimensions
const { width, height } = Dimensions.get("window");


export default function CheckGlucosePage2() {
    return (
      <View style={styles.stepContainer}>
        <Image
          source={require('@/assets/images/DiaBuddyHeros/step2.webp')} // Replace with actual image URL
          style={styles.image}
        />
        <Text style={styles.stepText}>
          Step 2: Use your glucose meter or sensor to check your levels. It's quick and easy—like using superhero gadgets!
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
      marginBottom: 20,
      alignItems: 'center',
    },
    image: {
      width: width * 0.7, // Image width scales with screen size
      height: height * 0.2, // Image height scales with screen size
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
  