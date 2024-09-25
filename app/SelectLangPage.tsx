import * as React from "react";
import { Alert, Text, TouchableOpacity, View } from "react-native";
import { router } from "expo-router";
import buttonStyles from "@/components/styles/buttonStyles";

export default function Language() {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <View>
                <TouchableOpacity
                    style={[buttonStyles.button, { backgroundColor: "orange" }]}
                    onPress={() => router.replace("/home")}
                >
                    <Text>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[buttonStyles.button, { backgroundColor: "lightblue" }]}
                    onPress={() => Alert.alert("Spanish Selected")}
                >
                    <Text style={buttonStyles.text}>Spanish</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[buttonStyles.button, { backgroundColor: "orange" }]}
                    onPress={() => Alert.alert("English Selected")}
                >
                    <Text style={buttonStyles.text}>English</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
