import * as React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { router } from 'expo-router';
import i18n from "@/components/i18n";
import { useTranslation } from "react-i18next";
import settingsStyles from "@/assets/styles/Settings/SettingsStyles";
import Icon from 'react-native-vector-icons/FontAwesome'; // Import icon library

export default function Settings() {
    const { t } = useTranslation();
    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
    };

    return (
        <View style={settingsStyles.container}>
            {/* Language Setting */}
            <TouchableOpacity style={settingsStyles.settingItem} onPress={() => router.replace('/pages/settings/changeLang')}>
                <Text style={settingsStyles.settingText}>{t("lang") || 'Default lang'}</Text>
                <Icon name="angle-right" style={settingsStyles.arrowIcon} />
            </TouchableOpacity>

            {/* Time Setting - Placeholder */}
            <TouchableOpacity style={settingsStyles.settingItem} onPress={() => console.log('Time Setting Pressed')}>
                <Text style={settingsStyles.settingText}>{t("time") || 'Default time'}</Text>
                <Icon name="angle-right" style={settingsStyles.arrowIcon} />
            </TouchableOpacity>

            <TouchableOpacity style={settingsStyles.settingItem} onPress={() => console.log('Notifcations Setting Pressed')}>
                <Text style={settingsStyles.settingText}>{t("notif") || 'Default notif'}</Text>
                <Icon name="angle-right" style={settingsStyles.arrowIcon} />
            </TouchableOpacity>

            <TouchableOpacity style={settingsStyles.settingItem} onPress={() => console.log('Pin Setting Pressed')}>
                <Text style={settingsStyles.settingText}>{t("pin") || 'Default pin'}</Text>
                <Icon name="angle-right" style={settingsStyles.arrowIcon} />
            </TouchableOpacity>

            {/* Add more settings as needed */}

            <TouchableOpacity
                style={[settingsStyles.settingItem, { marginTop: 30 }]}
                onPress={() => router.replace("/pages/HomePage")}
            >
                <Text style={settingsStyles.settingText}>{t("backHome") || 'Default backHome'}</Text>
                <Icon name="angle-right" style={settingsStyles.arrowIcon} />
            </TouchableOpacity>
        </View>
    );
}
