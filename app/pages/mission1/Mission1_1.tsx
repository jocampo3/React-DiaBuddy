import * as React from 'react';
import { View, Text, Image} from 'react-native';
import styles from "@/assets/styles/Mission1";
import i18n from "@/components/i18n";
import { useTranslation } from "react-i18next";

export default function Mission1_1() {
  const { t } = useTranslation();

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
    };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{t("M1.Title")}</Text>
      
      <Text style={styles.subtitle}>{t("M1.P1.1")}</Text>
      
      <Text style={styles.bodyText}>{t("M1.P1.2")}</Text>
      
      <Text style={styles.bodyText}>{t("M1.P1.3")}</Text>
      
      <Image // Replace with real image?
        source={{ uri: 'https://example.com/superhero-image.png' }} 
        style={styles.image} 
      />
    </View>
  );
}