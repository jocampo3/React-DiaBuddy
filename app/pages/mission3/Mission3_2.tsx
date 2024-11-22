import * as React from 'react';
import { TouchableOpacity, View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import { useTranslation } from 'react-i18next';
import i18n from '@/components/i18n';
// Get the window dimensions
const { width, height } = Dimensions.get("window");

export default function CheckInsulinPage2() {
  const { t } = useTranslation();

  const changeLanguage = (lng: string) => {
      i18n.changeLanguage(lng);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{t("M3.Title2")}</Text>

      {/* Step 2: Using the injector */}
      <View style={styles.stepContainer}>
        <Text style={styles.bodyText}>{t("M3.Step2")}</Text>

        <Image
          source={require('@/assets/images/InsulinInjection/InsulinInjection.webp')}
          style={styles.image}
        />
      </View>

      {/* Step 3: Delivering the insulin */}
      <View style={styles.stepContainer}>
        <Text style={styles.bodyText}>{t("M3.Step3")}</Text>

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
    alignItems: 'center',
  },
  image: {
    width: width * 0.7, // Image width scales with screen size
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
