import * as React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { useTranslation } from 'react-i18next';
import i18n from "@/components/i18n";

// Get the window dimensions
const { width, height } = Dimensions.get("window");

export default function Mission1_3() {
  const { t } = useTranslation();

  const changeLanguage = (lng: string) => {
      i18n.changeLanguage(lng);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{t("M1.Title3")}</Text>

      <Text style={styles.bodyText}>{t("M1.P3.1")}</Text>

      <Text style={styles.bodyText}>{t("M1.P3.2")}</Text>

      {/* <TouchableOpacity
        style={buttonStyles.pageButtons}
        onPress={() => router.push(
          
        )}
      >
        <Text style={styles.text}>Learn More About Type 1 Diabetes</Text>
      </TouchableOpacity> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
    marginTop: 50,
    padding: 20,
  },
  text: {
    color: "black"
  },
  title: {
    fontSize: height * 0.05,  // Dynamic size based on screen height
    fontWeight: 'bold',
    color: '#DC7633',
    textAlign: 'center',
    marginBottom: 10,
  },
  bodyText: {
    fontSize: height * 0.025,  // Dynamic size based on screen height
    color: '#555',
    textAlign: 'center',
    marginBottom: 20,
    paddingHorizontal: width * 0.05,  // Padding relative to screen width
  },
});
