import * as React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { router } from "expo-router";
import buttonStyles from "@/assets/styles/buttonStyles";

export default function RecordGlucosePage() {
    return (
        <View style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'
        }}
        >
            <Text>Record my glucose levels TODO: Create interactive glucose recording table</Text>
            <TouchableOpacity
                style={[buttonStyles.button, { backgroundColor: "orange"}]}
                onPress={() => router.replace("/pages/HomePage")}
            >
                <Text>Home</Text>
            </TouchableOpacity>
        </View>
    );
}
