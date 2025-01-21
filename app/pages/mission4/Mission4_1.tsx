import React, { useState } from "react";
import { TouchableOpacity, View, Text, StyleSheet, Alert, Dimensions } from "react-native";
import { useTranslation } from "react-i18next"; // Import useTranslation hook
import buttonStyles from "@/assets/styles/buttonStyles";
import i18n from "@/components/i18n";

const { width, height } = Dimensions.get("window");

const FoodPage = () => {
  const { t } = useTranslation(); // Initialize translation function
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
};
  const foodItems = [
    { name: t("M4.FoodItems.0.name"), type: "good" },
    { name: t("M4.FoodItems.1.name"), type: "not good" },
    { name: t("M4.FoodItems.2.name"), type: "good" },
    { name: t("M4.FoodItems.3.name"), type: "not good" },
    { name: t("M4.FoodItems.4.name"), type: "good" },
    { name: t("M4.FoodItems.5.name"), type: "not good" }
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

    if (correct === foodItems.length) {
      Alert.alert(
        t("M4.Congratulations"),
        t("M4.AllCorrect"),
        [{ text: "OK", onPress: () => {} }]
      );
    } else {
      Alert.alert(
        t("M4.Results"),
        `${t("M4.Correct")}: ${correct}\n${t("M4.Incorrect")}: ${incorrect}`,
        [{ text: t("M4.TryAgainButton"), onPress: () => {} }]
      );
    }
  };

  const renderFoodOptions = () => {
    return foodItems.map((item, index) => (
      <View key={index} style={styles.foodOption}>
        <Text style={styles.foodText}>{item.name}</Text>
        <View style={styles.choiceButtons}>
          <TouchableOpacity
            style={[styles.choiceButton, { backgroundColor: selectedItems[item.name] === "good" ? "lightgreen" : "white" }]}
            onPress={() => handleSelect(item.name, "good")}
          >
            <Text style={styles.choiceText}>{t("M4.ChoiceButtons.Good")}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.choiceButton, { backgroundColor: selectedItems[item.name] === "not good" ? "lightcoral" : "white" }]}
            onPress={() => handleSelect(item.name, "not good")}
          >
            <Text style={styles.choiceText}>{t("M4.ChoiceButtons.NotGood")}</Text>
          </TouchableOpacity>
        </View>
      </View>
    ));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>{t("M4.Title")}</Text>
      <Text style={styles.bodyText}>{t("M4.Body")}</Text>

      <View style={styles.foodContainer}>{renderFoodOptions()}</View>

      <TouchableOpacity style={[buttonStyles.button, styles.checkButton]} onPress={checkAnswers}>
        <Text style={buttonStyles.text}>{t("M4.CheckAnswers")}</Text>
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
