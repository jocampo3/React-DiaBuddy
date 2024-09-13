import * as React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { router } from "expo-router";
import buttonStyles from "@/components/styles/buttonStyles";

// NOTE: I am treating this page as the first page the user sees when opening the app - Jose.
// For now, they are unable to access the page upon opening the app

export default function Index() {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Text>Welcome to DiaBuddy!</Text>
            <TouchableOpacity
                style={ buttonStyles.button }
                onPress={() => router.replace("/home")}
            >
                <Text style={ buttonStyles.text }>Get Started!</Text>
            </TouchableOpacity>
            <Image
                source={require('../assets/images/DiaBuddyHeros/Hero_1.png')}
            />
        </View>
    );
}
