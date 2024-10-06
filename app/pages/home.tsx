import * as React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image, Button} from 'react-native';
import { router } from 'expo-router';
import ButtonStyles from "@/assets/styles/buttonStyles"
import i18n from "@/components/i18n";
import { useTranslation } from "react-i18next";

export default function Home() {
    const {t} = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <View
            style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            <TouchableOpacity
                style={[ButtonStyles.button, { backgroundColor: "yellow" }]}
                onPress={() => router.replace("/pages/about")}
            >
                <Text style={[ButtonStyles.text, { color: "black"}]}>{t("HPB1")}</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[ButtonStyles.button, { backgroundColor: "orange"}]}
                onPress={() => router.replace("/pages/CheckGlucosePage")}
            >
                <Text style={ButtonStyles.text}>{t("HPB2")}</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[ButtonStyles.button, { backgroundColor: "lightblue" }]}
                onPress={() => router.replace("/pages/CheckInsulinPage")}
            >
                <Text style={ButtonStyles.text}>{t("HPB3")}</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[ButtonStyles.button, { backgroundColor: "magenta" }]}
                onPress={() => router.replace("/pages/FoodPage")}
            >
                <Text style={ButtonStyles.text}>{t("HPB4")}</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[ButtonStyles.button, { backgroundColor: "red" }]}
                onPress={() => router.replace("/pages/RecordGlucosePage")}
            >
                <Text style={ButtonStyles.text}>{t("HPB5")}</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => router.replace("/pages/CreateAccountPage")}

            >
                <Text>Test Database</Text>
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
