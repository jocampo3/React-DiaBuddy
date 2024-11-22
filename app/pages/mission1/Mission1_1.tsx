import * as React from 'react';
import { TouchableOpacity, View, Text, StyleSheet, Image, Dimensions, ActivityIndicator } from 'react-native';
import { router } from "expo-router";
import styles from "@/assets/styles/Mission1";
import buttonStyles from '@/assets/styles/SectionStyles/buttonStyles';

export default function Mission1_1() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Why am I a DiaBuddy Superhero?</Text>
      
      <Text style={styles.subtitle}>
        Hey kiddo, let's talk about something super cool like superheroes!
      </Text>
      
      <Text style={styles.bodyText}>
        You know, superheroes have powers, courage, bravery, kindness, and very special equipment that help them save the day.
      </Text>
      
      <Text style={styles.bodyText}>
        Just like superheroes, people with Type 1 Diabetes have special equipment (like a pump or a pen) and they need to check their blood sugar regularly to stay healthy and strong!
      </Text>
      
      <Image // Replace with real image?
        source={{ uri: 'https://example.com/superhero-image.png' }} 
        style={styles.image} 
      />
    </View>
  );
}