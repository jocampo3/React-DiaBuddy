import React, { useState } from "react";
import { TouchableOpacity, View, Text, StyleSheet, Alert, Dimensions } from "react-native";
import { router } from "expo-router";
import buttonStyles from "@/assets/styles/buttonStyles";

const { width, height } = Dimensions.get("window");

const FoodPage = () => {
    const foodItems = [
        { name: "Apple", type: "good" },
        { name: "Candy Bar", type: "not good" },
        { name: "Carrots", type: "good" },
        { name: "Soda", type: "not good" },
        { name: "Grilled Chicken", type: "good" },
        { name: "Chips", type: "not good" },
    ];

    const [selectedItems, setSelectedItems] = useState<{ [key: string]: string }>({});

    const handleSelect = (itemName: string, choice: string) => {
        setSelectedItems((prev) => ({ ...prev, [itemName]: choice }));
    };

    const checkAnswers = () => {
        let correct = 0;
        let incorrect = 0;

        foodItems.forEach((item) => {
            if (selectedItems[item.name] === item.type) {
                correct++;
            } else {
                incorrect++;
            }
        });

        Alert.alert(
            "Your Results",
            `Correct Choices: ${correct}\nIncorrect Choices: ${incorrect}`,
            [{ text: "OK", onPress: () => {} }]
        );
    };

    const renderFoodOptions = () => {
        return foodItems.map((item, index) => (
            <View key={index} style={styles.foodOption}>
                <Text style={styles.foodText}>{item.name}</Text>
                <View style={styles.choiceButtons}>
                    <TouchableOpacity
                        style={[
                            styles.choiceButton,
                            { backgroundColor: selectedItems[item.name] === "good" ? "lightgreen" : "white" },
                        ]}
                        onPress={() => handleSelect(item.name, "good")}
                    >
                        <Text style={styles.choiceText}>Good</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[
                            styles.choiceButton,
                            { backgroundColor: selectedItems[item.name] === "not good" ? "lightcoral" : "white" },
                        ]}
                        onPress={() => handleSelect(item.name, "not good")}
                    >
                        <Text style={styles.choiceText}>Not Good</Text>
                    </TouchableOpacity>
                </View>
            </View>
        ));
    };

    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>Superhero Choices: Fuel Your Power!</Text>
            <Text style={styles.bodyText}>
                Tap on each food to decide if it's "Good" or "Not Good" for a superhero like you!
            </Text>

            <View style={styles.foodContainer}>{renderFoodOptions()}</View>

            <TouchableOpacity style={[buttonStyles.button, styles.checkButton]} onPress={checkAnswers}>
                <Text style={buttonStyles.text}>Check Answers</Text>
            </TouchableOpacity>
        </View>
    );
};

export default FoodPage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f5f5f5",
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
    foodContainer: {
        marginBottom: height * 0.02,
        width: "100%",
    },
    foodOption: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: height * 0.015,
        paddingHorizontal: width * 0.03,
    },
    foodText: {
        fontSize: height * 0.022,
        fontWeight: "bold",
        color: "#333",
    },
    choiceButtons: {
        flexDirection: "row",
    },
    choiceButton: {
        marginHorizontal: width * 0.01,
        paddingVertical: height * 0.015,
        paddingHorizontal: width * 0.03,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#ccc",
    },
    choiceText: {
        fontSize: height * 0.02,
        fontWeight: "bold",
        color: "#333",
    },
    checkButton: {
        backgroundColor: "#4CAF50",
        marginBottom: height * 0.03,
    },
});
