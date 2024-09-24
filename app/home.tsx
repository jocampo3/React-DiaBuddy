import * as React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image, Button} from 'react-native';
import { router } from 'expo-router';
import ButtonStyles from "@/components/styles/buttonStyles"

export default function Home() {
    return (
        <View
            style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            <TouchableOpacity
                style={[ButtonStyles.button, { backgroundColor: "yellow" }]}
                onPress={() => router.replace("/about")}
            >
                <Text style={[ButtonStyles.text, { color: "black"}]}>Why am I a DiaBuddy Superhero/What is type 1 Diabetes?</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[ButtonStyles.button, { backgroundColor: "orange"}]}
                onPress={() => router.replace("/glucose_check")}
            >
                <Text style={ButtonStyles.text}>How to check glucose levels</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[ButtonStyles.button, { backgroundColor: "lightblue" }]}
                onPress={() => router.replace("/insulin")}
            >
                <Text style={ButtonStyles.text}>Oh boy I need insulin!</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[ButtonStyles.button, { backgroundColor: "magenta" }]}
                onPress={() => router.replace("/food")}
            >
                <Text style={ButtonStyles.text}>Healthy food options</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[ButtonStyles.button, { backgroundColor: "red" }]}
                onPress={() => router.replace("/record_glucose")}
            >
                <Text style={ButtonStyles.text}>Record my glucose levels!</Text>
            </TouchableOpacity>
        </View>
    );
}
