import * as React from "react";
import {Text, TouchableOpacity, View} from "react-native";
import { router } from 'expo-router';
import buttonStyles from "@/assets/styles/buttonStyles";

export default function Settings() {
    return (
        <View
            style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
        }}
        >
            <Text>Select a Language:</Text>
            <Text>Age:</Text>
            <Text>TODO: Add more settings</Text>
            <TouchableOpacity
                style={[buttonStyles.button]}
                onPress={() => router.replace("/pages/HomePage")}
            >
                <Text>Back to home</Text>
            </TouchableOpacity>
        </View>
    )
}
