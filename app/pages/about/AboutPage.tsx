import * as React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { router } from "expo-router";
import buttonStyles from "@/assets/styles/buttonStyles";

export default function AboutPage() {
  return (
      <View style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Text>Why am I a DiaBuddy Superhero?</Text>
        <Text>Hey kiddo, let's talk about something super cool like superheroes!</Text>
        <Text>You know, superheroes have powers, courage, bravery, kindness, and very special equipment that help them save the day.</Text>
      </View>
  );
}

