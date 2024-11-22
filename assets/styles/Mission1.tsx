import {StyleSheet, Dimensions} from "react-native";

// Get the window dimensions
const { width, height } = Dimensions.get("window");

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
  

export default styles;
