import * as React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image, Button} from 'react-native';
import { router } from 'expo-router';
import ButtonStyles from "@/assets/styles/buttonStyles"
import i18n from "@/components/i18n";
import { useTranslation } from "react-i18next";
import buttonStyles from "@/assets/styles/buttonStyles";

export default function HomePage() {
    const {t} = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <View
            style={{
                flex: 1,
                alignItems: "flex-end",
                justifyContent: "center"
            }}
        >
            <TouchableOpacity
                style={[ButtonStyles.button, { backgroundColor: "yellow" }]}
                onPress={() => router.replace("/pages/about/AboutPage")}
            >
                <Text style={[ButtonStyles.text, { color: "black"}]}>{t("HPB1")}</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[ButtonStyles.button, { backgroundColor: "orange"}]}
                onPress={() => router.replace("/pages/checkglucose/CheckGlucosePage")}
            >
                <Text style={ButtonStyles.text}>{t("HPB2")}</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[ButtonStyles.button, { backgroundColor: "lightblue" }]}
                onPress={() => router.replace("/pages/checkinsulin/CheckInsulinPage")}
            >
                <Text style={ButtonStyles.text}>{t("HPB3")}</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[ButtonStyles.button, { backgroundColor: "magenta" }]}
                onPress={() => router.replace("/pages/food/FoodPage")}
            >
                <Text style={ButtonStyles.text}>{t("HPB4")}</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[ButtonStyles.button, { backgroundColor: "red" }]}
                onPress={() => router.replace("/pages/recordglucose/RecordGlucosePage")}
            >
                <Text style={ButtonStyles.text}>{t("HPB5")}</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={[buttonStyles.button, {backgroundColor: "black"}]}
                onPress={() => router.replace('/pages/settings')}
            >
                <Text style={ButtonStyles.text}>Settings</Text>
            </TouchableOpacity>

            {/* Language selection buttons */}
            <View style={{ flexDirection: 'row', marginTop: 20 }}>
                <TouchableOpacity onPress={() => changeLanguage('en')} style={{ marginHorizontal: 10 }}>
                    <Text>English</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => changeLanguage('es')} style={{ marginHorizontal: 10 }}>
                    <Text>Español</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
