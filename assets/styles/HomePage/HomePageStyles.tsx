import React from "react";
import { StyleSheet, Dimensions } from "react-native";

// Get the window dimensions
const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
    layout: {
        flex: 1,
        justifyContent: "center",  // Center the content vertically
        alignItems: "center",      // Center the content horizontally
        marginTop: height * 0.10,
        marginLeft: "auto",
        marginRight: "auto",       // Center the layout
    },
    buttonStyle1: {
        alignItems: "center",      // Center the button content horizontally
        justifyContent: "center",  // Center the button content vertically
        width: width * 0.8,        // 80% of the screen width
        height: height * 0.1,      // 10% of the screen height
        backgroundColor: "#DC7633",
        marginBottom: height * 0.05, // 5% of the screen height
        padding: 20,               // Fixed padding to maintain button shape
        borderTopLeftRadius: 100,
        borderBottomRightRadius: 100,
    },
    buttonStyle2: {
        alignItems: "center",      // Center the button content horizontally
        justifyContent: "center",  // Center the button content vertically
        width: width * 0.8,        // 80% of the screen width
        height: height * 0.1,      // 10% of the screen height
        backgroundColor: "#DC7633",
        marginBottom: height * 0.05, // 5% of the screen height
        padding: 20,               // Fixed padding to maintain button shape
        borderBottomLeftRadius: 100,
        borderTopRightRadius: 100,
    },
    setting: {
        position: "absolute",      // Absolute position relative to the screen
        top: -20,                    // Strictly at the top of the screen
        left: -5,                   // Strictly at the left of the screen
        zIndex: 1,                 // Ensure it appears above other elements
        padding: width * 0.01,     // Optional: small padding (2% of screen width)
    },
    text: {
        margin: "auto",
        fontSize: height * 0.03,   // 3% of the screen height
        color: "white",
        fontFamily: "Bangers-Regular",
    },
    loadingContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});

export default styles;
