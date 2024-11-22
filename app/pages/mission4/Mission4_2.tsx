import React from "react";
import { TouchableOpacity, View, Text, StyleSheet, Dimensions } from "react-native";
import i18n from "@/components/i18n";
import { useTranslation } from "react-i18next";

const { width, height } = Dimensions.get("window");

export default function FoodPage2() {
    const { t } = useTranslation();
    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
    };
    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>{t("M4.Title2")}</Text>
            <Text style={styles.bodyText}>{t("M4.P2.1")}</Text>

            <View style={styles.pyramidContainer}>
                <TouchableOpacity style={[styles.pyramidTier, styles.topTier]}>
                    <Text style={styles.tierText}>{t("M4.Proteins")}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.pyramidTier, styles.middleTier]}>
                    <Text style={styles.tierText}>{t("M4.Fruits & Veggies")}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.pyramidTier, styles.bottomTier]}>
                    <Text style={styles.tierText}>{t("M4.Whole Grains")}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.pyramidTier, styles.baseTier]}>
                    <Text style={styles.tierText}>{t("M4.Limit")}</Text>
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
