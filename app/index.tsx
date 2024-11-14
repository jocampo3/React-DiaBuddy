import 'intl-pluralrules';
import * as React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { router } from "expo-router";
import { useTranslation } from 'react-i18next';  // Import useTranslation hook
import i18n from '@/components/i18n';  // Import your i18n configuration
import buttonStyles from "@/assets/styles/buttonStyles";

export default function Index() {
    const { t } = useTranslation();  // Initialize useTranslation hook

    // Function to change the language
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <View>
            {/* Use t('key') for translations */}
            <Text>{t('welcome')}</Text>

            <TouchableOpacity
                style={buttonStyles.button}
                onPress={() => router.replace("/pages/SelectLangPage")}
            >
                <Text style={buttonStyles.text}>{t('get_started')}</Text>
            </TouchableOpacity>

            <Image
                source={require('../assets/images/DiaBuddyHeros/Hero_1.png')}
            />

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
