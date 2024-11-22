import * as React from 'react';
import { TouchableOpacity, View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import { router } from "expo-router";
import styles from "@/assets/styles/Mission1";
import buttonStyles from '@/assets/styles/SectionStyles/buttonStyles';

export default function Mission1_2() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>You're a DiaBuddy Superhero!</Text>
      
      <Text style={styles.bodyText}>
        Let's think of your body as a superhero city! 🏙️
      </Text>

      <Text style={styles.bodyText}>
        Imagine that your organs are the buildings, your blood vessels are the roads, and your hormones, like insulin, are the cars zooming through the city, delivering energy! 🚗💨
      </Text>

      <Text style={styles.bodyText}>
        Insulin (the superhero car) helps your body use the energy from food to power you up! Just like a superhero uses their special powers to do amazing things, insulin gives you the energy you need to play, learn, and have fun! 💪✨
      </Text>

      <Image
        source={{ uri: 'https://example.com/superhero-car-image.png' }}
        style={styles.image}
      />

      {/* <TouchableOpacity
        style={buttonStyles.pageButtons}
        onPress={() => router.push("/pages/WhatIsInsulin")}
      >
        <Text style={buttonStyles.text}>Learn More About Insulin</Text>
      </TouchableOpacity> */}
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: '#f5f5f5',
//     marginTop: height * 0.35,
//     padding: width * 0.05, // Use a percentage of the width for padding
//   },
//   title: {
//     fontSize: height * 0.05,  // Dynamic size based on screen height
//     fontWeight: 'bold',
//     color: '#DC7633',
//     textAlign: 'center',
//     marginBottom: 10,
//   },
//   bodyText: {
//     fontSize: height * 0.025,  // Dynamic size based on screen height
//     color: '#555',
//     textAlign: 'center',
//     marginBottom: 20,
//     paddingHorizontal: width * 0.05,  // Padding relative to screen width
//   },
//   image: {
//     width: width * 0.6,  // 60% of the screen width
//     height: width * 0.6,  // Keep the image square
//     marginBottom: 20,
//     borderRadius: 10,
//   },
// });
