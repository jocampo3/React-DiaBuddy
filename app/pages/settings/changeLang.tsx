import * as React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { router } from 'expo-router';
import i18n from "@/components/i18n"; // Assuming you have an i18n setup
import { useTranslation } from "react-i18next";
import changeLangStyles from "@/assets/styles/Settings/ChangeLangStyles"; // Importing styles

export default function ChangeLang() {
    const { t } = useTranslation();

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng)
            .then(() => router.replace("/pages/settings/settings")) // Redirect after language change
            .catch(err => console.error("Error changing language:", err));
    };

    return (
        <View style={changeLangStyles.container}>
            <Text style={changeLangStyles.title}>{t("Select Language")}</Text>

            <TouchableOpacity
                style={changeLangStyles.languageButton}
                onPress={() => changeLanguage('en')}
            >
                <Text style={changeLangStyles.languageText}>English</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={changeLangStyles.languageButton}
                onPress={() => changeLanguage('es')}
            >
                <Text style={changeLangStyles.languageText}>Español</Text>
            </TouchableOpacity>
        </View>
    );
}
