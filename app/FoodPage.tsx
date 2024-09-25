import * as React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { router } from "expo-router";
import buttonStyles from "@/components/styles/buttonStyles";

export default function FoodPage() {
    return (
        <View style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'
        }}
        >
            <Text>What are good choices to continue being a DiaBuddy superhero? TODO: Insert health food options</Text>
            <TouchableOpacity
                style={[buttonStyles.button, { backgroundColor: "orange"}]}
                onPress={() => router.replace("/home")}
            >
                <Text>Home</Text>
            </TouchableOpacity>
        </View>
    );
}
