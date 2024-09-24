import * as React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { router } from "expo-router";
import buttonStyles from "@/components/styles/buttonStyles";

export default function RecordGlucose() {
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
                onPress={() => router.replace("/home")}
            >
                <Text>Home</Text>
            </TouchableOpacity>
        </View>
    );
}
