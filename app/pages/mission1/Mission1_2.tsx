import * as React from 'react';
import { TouchableOpacity, View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import { router } from "expo-router";
import styles from "@/assets/styles/Mission1";
import { useTranslation } from 'react-i18next';
import i18n from "@/components/i18n";
// import buttonStyles from '@/assets/styles/SectionStyles/buttonStyles';

export default function Mission1_2() {
  const { t } = useTranslation();

  const changeLanguage = (lng: string) => {
      i18n.changeLanguage(lng);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{t("M1.Title2")}</Text>
      
      <Text style={styles.bodyText}>{t("M1.P2.1")}</Text>

      <Text style={styles.bodyText}>{t("M1.P2.2")}</Text>

      <Text style={styles.bodyText}>{t("M1.P2.3")}</Text>

      <Image
        source={{ uri: 'https://example.com/superhero-car-image.png' }}
        style={styles.image}
      />
    </View>
  );
}
