import * as React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { router } from "expo-router";
import buttonStyles from "@/assets/styles/buttonStyles";
import i18n from "@/components/i18n";
import { useTranslation } from "react-i18next";

export default function Language() {
    const { t } = useTranslation();

    const changeLanguageAndRedirect = (lng, path) => {
        i18n.changeLanguage(lng).then(() => {
            // Redirect after language is successfully changed
            router.replace(path);
        });
    };

    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <View>
                <TouchableOpacity
                    style={[buttonStyles.button, { backgroundColor: "lightblue" }]}
                    onPress={() => changeLanguageAndRedirect('es', '/pages/HomePage')}
                >
                    <Text style={buttonStyles.text}>Español</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[buttonStyles.button, { backgroundColor: "orange" }]}
                    onPress={() => changeLanguageAndRedirect('en', '/pages/HomePage')}
                >
                    <Text style={buttonStyles.text}>English</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
