import * as React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { router } from "expo-router";
import buttonStyles from "@/components/styles/buttonStyles";

export default function About() {
  return (
      <View style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Text>Why am I a DiaBuddy Superhero?</Text>
        <TouchableOpacity
            style={[buttonStyles.button, { backgroundColor: "orange"}]}
            onPress={() => router.replace("/home")}
        >
            <Text>Home</Text>
        </TouchableOpacity>
      </View>
    );
  }
