
import React, { useState } from 'react';
import {View, Text, Button, TouchableOpacity} from 'react-native';
import { router } from 'expo-router';
import CheckGlucosePage from "./Mission2_1";
import CheckGlucosePage2 from "./Mission2_2";
import CheckGlucosePage3 from "./Mission2_3";
import styles from "@/assets/styles/SectionStyles/buttonStyles";

// Array of pages for dynamic navigation
const pages = [CheckGlucosePage, CheckGlucosePage2, CheckGlucosePage3];

const CheckGlucoseSection: React.FC = () => {
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
        <View style={{ flex: 1, justifyContent: 'space-evenly', alignItems: 'center'}}>
            <CurrentPageComponent />

            <View style={{ flexDirection: 'row', marginTop: 20 }}>
                {currentPage > 0 && (
                    <TouchableOpacity
                        style={styles.pageButtons}
                        onPress={goToPreviousPage}
                    >
                        <Text style={styles.text}>Previous Page</Text>
                    </TouchableOpacity>

                )}
                {currentPage < pages.length - 1 ? (
                    <TouchableOpacity
                        style={styles.pageButtons}
                        onPress={goToNextPage}
                    >
                        <Text style={styles.text}>Next Page</Text>
                    </TouchableOpacity>
                ) : (
                    <TouchableOpacity
                        style={styles.pageButtons}
                        onPress={() => router.replace("/pages/HomePage")}
                    >
                        <Text style={styles.text}>Next Mission</Text>
                    </TouchableOpacity>
                )}
            </View>
        </View>
    );
};

export default CheckGlucoseSection;
