import * as React from "react";
import { Text, TouchableOpacity, View, StyleSheet, Image } from "react-native";
import { router } from "expo-router";
import { useTranslation } from "react-i18next";
import i18n from "@/components/i18n";

export default function Language() {
    const { t } = useTranslation();

    const changeLanguageAndRedirect = (lng: string, path: string) => {
        i18n.changeLanguage(lng).then(() => {
            // Redirect after language is successfully changed
            router.replace(path);
        });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Select Your Language</Text>

            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={[styles.button, styles.buttonSpanish]}
                    onPress={() => changeLanguageAndRedirect('es', '/pages/HomePage')}
                >
                    <Text style={styles.buttonText}>{t('spanish')}</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.button, styles.buttonEnglish]}
                    onPress={() => changeLanguageAndRedirect('en', '/pages/HomePage')}
                >
                    <Text style={styles.buttonText}>{t('english')}</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#f7f7f7',  // Light background
        padding: 20,
        position: "relative",  // To position the hero image over background
    },
    backgroundImage: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        opacity: 0.2,  // Faint background image
    },
    title: {
        fontSize: 50,
        color: '#ff6347',  // Bright and playful color
        fontFamily: 'Bangers-Regular',  // Fun font for kids
        textAlign: 'center',
        marginBottom: 40,
    },
    buttonContainer: {
        flexDirection: "column",
        alignItems: "center",
        marginBottom: 40,
    },
    button: {
        paddingVertical: 20,
        paddingHorizontal: 40,
        borderRadius: 25,
        alignItems: "center",
        justifyContent: "center",
        margin: 10,
        width: '80%',
    },
    buttonSpanish: {
        backgroundColor: "#ff7f50",  // Orange color for Spanish
    },
    buttonEnglish: {
        backgroundColor: "#6495ed",  // Blue color for English
    },
    buttonText: {
        color: '#fff',
        fontSize: 32,
        fontFamily: 'Bangers-Regular',  // Kid-friendly font
        textTransform: 'uppercase',
    },
    heroImage: {
        width: 250,
        height: 250,
        marginTop: 30,
        resizeMode: 'contain',
    },
});
