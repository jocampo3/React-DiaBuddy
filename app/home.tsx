import * as React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
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
                style={[ButtonStyles.button, { backgroundColor: "orange"}]}
                onPress={() => router.replace("/about")}
            >
                <Text style={ButtonStyles.text}>About</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[ButtonStyles.button, { backgroundColor: "pink"}]}
                onPress={() => router.replace("/lang")}
            >
                <Text style={ButtonStyles.text}>Select Your Language</Text>
            </TouchableOpacity>
        </View>
    );
}
