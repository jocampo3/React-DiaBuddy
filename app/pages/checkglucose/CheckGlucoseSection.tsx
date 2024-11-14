import React, { useState } from 'react';
import {View, Text, Button, TouchableOpacity} from 'react-native';
import { router } from 'expo-router';
import CheckGlucosePage from "./CheckGlucosePage";
import CheckGlucosePage2 from "./CheckGlucosePage2";
import CheckGlucosePage3 from "./CheckGlucosePage3";
import ButtonStyles from "@/assets/styles/buttonStyles";

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
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <CurrentPageComponent />

            <View style={{ flexDirection: 'row', marginTop: 20 }}>
                {currentPage > 0 && (
                    <TouchableOpacity
                        style={ButtonStyles.button}
                        onPress={goToPreviousPage}
                    >
                        <Text>Previous Page</Text>
                    </TouchableOpacity>

                )}
                {currentPage < pages.length - 1 ? (
                    <TouchableOpacity
                        style={ButtonStyles.button}
                        onPress={goToNextPage}
                    >
                        <Text>Next Page</Text>
                    </TouchableOpacity>
                ) : (
                    <TouchableOpacity
                        style={[ButtonStyles.button, { backgroundColor: "lightblue" }]}
                        onPress={() => router.replace("/pages/HomePage")}
                    >
                        <Text style={ButtonStyles.text}>Home</Text>
                    </TouchableOpacity>
                )}
            </View>
        </View>
    );
};

export default CheckGlucoseSection;
