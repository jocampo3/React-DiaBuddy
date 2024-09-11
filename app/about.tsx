import * as React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

export default function About() {
  return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>About Screen</Text>
        <Link replace href="/">Go to Home</Link>
      </View>
    );
  }