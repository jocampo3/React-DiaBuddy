import * as React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { router } from "expo-router";
import buttonStyles from "@/components/styles/buttonStyles";

export default function GlucoseCheck() {
    return (
        <View style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'
        }}
        >
            <Text>This is how you check you glucose levels! TODO: Insert images demonstrating how to monitor levels</Text>
            <TouchableOpacity
                style={[buttonStyles.button, { backgroundColor: "orange"}]}
                onPress={() => router.replace("/home")}
            >
                <Text>Home</Text>
            </TouchableOpacity>
        </View>
    );
}
