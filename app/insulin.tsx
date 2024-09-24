import * as React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { router } from "expo-router";
import buttonStyles from "@/components/styles/buttonStyles";

export default function Insulin() {
    return (
        <View style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'
        }}
        >
            <Text>Oh boy I need insulin! How do I do it? TODO: Insert images demonstrating how to insert insulin to the body</Text>
            <TouchableOpacity
                style={[buttonStyles.button, { backgroundColor: "orange"}]}
                onPress={() => router.replace("/home")}
            >
                <Text>Home</Text>
            </TouchableOpacity>
        </View>
    );
}
