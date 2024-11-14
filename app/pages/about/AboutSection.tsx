import React, { useState } from 'react';
import { View, Text, ActivityIndicator, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';
import AboutPage from './AboutPage';
import AboutPage2 from './AboutPage2';
import AboutPage3 from './AboutPage3';
import AboutPage4 from './AboutPage4';
import { useFonts } from 'expo-font';
import styles from "@/assets/styles/SectionStyles/buttonStyles";

// Array of pages for dynamic navigation
const pages = [AboutPage, AboutPage2, AboutPage3, AboutPage4];

const AboutSection: React.FC = () => {
    const [fontsLoaded] = useFonts({
        'Bangers-Regular': require('@/assets/fonts/Bangers/Bangers-Regular.ttf'),
    });

    if (!fontsLoaded) {
        return <ActivityIndicator size="large" color="#0000ff" />;
    }

    const [currentPage, setCurrentPage] = useState(0);

    // Navigate to the next page
    const goToNextPage = () => {
        if (currentPage < pages.length - 1) {
            setCurrentPage((prev) => prev + 1);
        }
    };

    // Navigate to the previous page
    const goToPreviousPage = () => {
        if (currentPage > 0) {
            setCurrentPage((prev) => prev - 1);
        }
    };

    // Dynamically render the current page
    const CurrentPageComponent = pages[currentPage];

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <CurrentPageComponent />

            <View style={{ flexDirection: 'row', marginTop: 20 }}>
                {currentPage > 0 && (
                    <TouchableOpacity style={styles.pageButtons} onPress={goToPreviousPage}>
                        <Text style={styles.text}>Previous Page</Text>
                    </TouchableOpacity>
                )}
                {currentPage < pages.length - 1 ? (
                    <TouchableOpacity style={styles.pageButtons} onPress={goToNextPage}>
                        <Text style={styles.text}>Next Page</Text>
                    </TouchableOpacity>
                ) : (
                    <TouchableOpacity
                        style={styles.pageButtons}
                        onPress={() => router.replace('/pages/HomePage')}
                    >
                        <Text style={styles.text}>Next Mission</Text>
                    </TouchableOpacity>
                )}
            </View>
        </View>
    );
};

export default AboutSection;
