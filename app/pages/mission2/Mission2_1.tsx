import * as React from 'react';
import { TouchableOpacity, View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import { useTranslation } from 'react-i18next';
import i18n from '@/components/i18n';

// Get the window dimensions
const { width, height } = Dimensions.get("window");

export default function CheckGlucosePage() {
  const { t } = useTranslation();

  const changeLanguage = (lng: string) => {
      i18n.changeLanguage(lng);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{t("M2.Title")}</Text>

      <Text style={styles.bodyText}>{t("M2.P1.1")}</Text>

      <View style={styles.stepContainer}>
        <Image
          source={require('@/assets/images/DiaBuddyHeros/step1.webp')} // Replace with actual image URL
          style={styles.image}
        />
        <Text style={styles.stepText}>{t("M2.Step1")}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  title: {
    fontSize: height * 0.045, // Dynamic font size based on screen height
    fontWeight: 'bold',
    color: '#FF5733',
    textAlign: 'center',
    marginBottom: 20,
  },
  bodyText: {
    fontSize: height * 0.025, // Dynamic font size for better readability
    color: '#555',
    textAlign: 'center',
    marginBottom: 20,
    paddingHorizontal: width * 0.05,
  },
  stepContainer: {
    // marginBottom: 20,
    alignItems: 'center',
  },
  image: {
    width: width * 0.8, // Image width scales with screen size
    height: height * 0.3, // Image height scales with screen size
    resizeMode: 'contain',
    marginBottom: 10,
  },
  stepText: {
    fontSize: height * 0.025,
    color: '#333',
    textAlign: 'center',
    paddingHorizontal: width * 0.05,
  },
});
