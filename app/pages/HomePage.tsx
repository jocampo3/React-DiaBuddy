import * as React from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import { router } from 'expo-router';
import i18n from "@/components/i18n";
import { useTranslation } from "react-i18next";
import styles from "@/assets/styles/HomePage/HomePageStyles";
import { useFonts } from 'expo-font';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function HomePage() {
    const [fontsLoaded] = useFonts({
        'Bangers-Regular': require('@/assets/fonts/Bangers/Bangers-Regular.ttf'),
    });

    const { t } = useTranslation();

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
    };

    if (!fontsLoaded) {
        return <ActivityIndicator size="large" color="#0000ff" />;
    }

    return (
        <View style={styles.layout}>
            <TouchableOpacity
                style={styles.setting}
                onPress={() => router.replace('/pages/settings/settings')}
            >
                <Icon name="cog" size={30} color="black" />
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.buttonStyle1, { backgroundColor: "yellow" }]}
                onPress={() => router.replace("/pages/about/AboutSection")}
            >
                <Text style={[styles.text, { color: "black" }]}>{t("HPB1") || 'Default HPB1'}</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.buttonStyle2, { backgroundColor: "orange" }]}
                onPress={() => router.replace("/pages/checkglucose/CheckGlucoseSection")}
            >
                <Text style={styles.text}>{t("HPB2") || 'Default HPB2'}</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.buttonStyle1, { backgroundColor: "lightblue" }]}
                onPress={() => router.replace("/pages/checkinsulin/CheckInsulinSection")}
            >
                <Text style={styles.text}>{t("HPB3") || 'Default HPB3'}</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.buttonStyle2, { backgroundColor: "magenta" }]}
                onPress={() => router.replace("/pages/food/FoodSection")}
            >
                <Text style={styles.text}>{t("HPB4") || 'Default HPB4'}</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.buttonStyle1, { backgroundColor: "red" }]}
                onPress={() => router.replace("/pages/recordglucose/RecordGlucosePage")}
            >
                <Text style={styles.text}>{t("HPB5") || 'Default HPB5'}</Text>
            </TouchableOpacity>
        </View>
    );
}
