import React from "react";
import { TouchableOpacity, View, Text, StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export default function FoodPage2() {
    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>The Superhero Food Pyramid</Text>
            <Text style={styles.bodyText}>
                Here's the food pyramid showing good and not-so-good choices! Tap on a section to learn more.
            </Text>

            <View style={styles.pyramidContainer}>
                <TouchableOpacity style={[styles.pyramidTier, styles.topTier]}>
                    <Text style={styles.tierText}>Proteins: Chicken, Eggs, Fish</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.pyramidTier, styles.middleTier]}>
                    <Text style={styles.tierText}>Fruits & Veggies: Apples, Carrots, Spinach</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.pyramidTier, styles.bottomTier]}>
                    <Text style={styles.tierText}>
                        Whole Grains: Rice, Bread | Dairy: Milk, Yogurt
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.pyramidTier, styles.baseTier]}>
                    <Text style={styles.tierText}>Limit: Soda, Candy, Chips</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f0f8ff",
        padding: width * 0.05,
    },
    headerText: {
        fontSize: height * 0.03,
        fontWeight: "bold",
        color: "#ff4500",
        textAlign: "center",
        marginBottom: height * 0.02,
    },
    bodyText: {
        fontSize: height * 0.02,
        color: "#333",
        textAlign: "center",
        marginBottom: height * 0.03,
    },
    pyramidContainer: {
        width: "100%",
        alignItems: "center",
        marginBottom: height * 0.03,
    },
    pyramidTier: {
        width: "80%",
        paddingVertical: height * 0.015,
        marginVertical: height * 0.01,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
    },
    topTier: {
        backgroundColor: "#ffeb3b",
    },
    middleTier: {
        backgroundColor: "#8bc34a",
    },
    bottomTier: {
        backgroundColor: "#03a9f4",
    },
    baseTier: {
        backgroundColor: "#f44336",
    },
    tierText: {
        fontSize: height * 0.018,
        fontWeight: "bold",
        color: "#fff",
        textAlign: "center",
    },
});
