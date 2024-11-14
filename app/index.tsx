import 'intl-pluralrules';
import * as React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet, ActivityIndicator } from "react-native";
import { router } from "expo-router";
import { useTranslation } from 'react-i18next';
import i18n from '@/components/i18n'; 
import { useFonts } from 'expo-font';

export default function Index() {
    const [fontsLoaded] = useFonts({
        'Bangers-Regular': require('@/assets/fonts/Bangers/Bangers-Regular.ttf'),
    });

    const { t } = useTranslation();

    // Early return while fonts are loading
    if (!fontsLoaded) {
        return <ActivityIndicator size="large" color="#0000ff" />;
    }

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
    };

    return (
        <View style={styles.container}>
            {/* Title */}
            <Text style={styles.title}>{t('welcome')}</Text>

            {/* Hero image */}
            <Image
                source={require('../assets/images/DiaBuddyHeros/Hero_1.png')}
                style={styles.heroImage}
            />
            
            {/* Start button */}
            <TouchableOpacity
                style={styles.button}
                onPress={() => router.replace("/pages/SelectLangPage")}
            >
                <Text style={styles.buttonText}>{t('get_started')}</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f8ff',
        padding: 20,
    },
    title: {
        fontSize: 45,
        textAlign: 'center',
        marginBottom: 20,
        color: '#ff6347',  // Playful color for kids
        fontFamily: 'Bangers-Regular',  // Fun, kid-friendly font
    },
    heroImage: {
        width: 300,
        height: 300,
        marginBottom: 20,
        resizeMode: 'contain',
    },
    button: {
        backgroundColor: '#ff6347',
        paddingVertical: 12,  // Reduced vertical padding
        paddingHorizontal: 25,  // Reduced horizontal padding
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
    },
    buttonText: {
        color: '#fff',
        fontSize: 30,  // Reduced font size for smaller button
        fontFamily: 'Bangers-Regular',
        textTransform: 'uppercase',
    },
});
