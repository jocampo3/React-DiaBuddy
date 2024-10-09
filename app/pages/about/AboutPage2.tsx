import * as React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { router } from "expo-router";
import buttonStyles from "@/assets/styles/buttonStyles";

export default function AboutPage_2() {
    return (
        <View
            style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <Text>This is the second About Page!</Text>
            <TouchableOpacity
                style={[buttonStyles.button, { backgroundColor: 'orange' }]}
                onPress={() => router.replace('/pages/HomePage')}
            >
                <Text>Back to Home</Text>
            </TouchableOpacity>
        </View>
    );
}
