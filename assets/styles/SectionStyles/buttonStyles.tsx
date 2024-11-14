import React from "react";
import { StyleSheet, Dimensions } from "react-native";

// Get the window dimensions
const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
    pageButtons: {
      backgroundColor: "darkblue",
      borderRadius: 45,
      padding: 20, // Add padding around the text to ensure it fits inside the border
      margin: 10,  // Optional: Add some margin between buttons if needed
    },
    text: {
        margin: "auto",
        fontSize: height * 0.03,   // 3% of the screen height
        color: "white",
        fontFamily: "Bangers-Regular",
    },
  });
  
export default styles;