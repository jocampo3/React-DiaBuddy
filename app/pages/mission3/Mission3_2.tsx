import * as React from 'react';
import { TouchableOpacity, View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import { router } from "expo-router";
import buttonStyles from "@/assets/styles/buttonStyles";

// Get the window dimensions
const { width, height } = Dimensions.get("window");

export default function CheckInsulinPage2() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Insulin Superhero Guide</Text>

      {/* Step 2: Using the injector */}
      <View style={styles.stepContainer}>
        <Text style={styles.bodyText}>
          Step 2: Use your insulin injector or pump. Insert the needle gently into your arm or tummy (just like a superhero activating their powers). 🚀
        </Text>
        <Image
          source={require('@/assets/images/InsulinInjection/InsulinInjection.webp')}
          style={styles.image}
        />
      </View>

      {/* Step 3: Delivering the insulin */}
      <View style={styles.stepContainer}>
        <Text style={styles.bodyText}>
          Step 3: Press the button or push the injector. That’s it! Your insulin is delivered, and you're ready to go! 💪
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  title: {
    fontSize: height * 0.045, // Dynamic font size based on screen height
    fontWeight: 'bold',
    color: '#FF5733',
    textAlign: 'center',
    marginBottom: 20,
  },
  bodyText: {
    fontSize: height * 0.025, // Dynamic font size for better readability
    color: '#555',
    textAlign: 'center',
    marginBottom: 20,
    paddingHorizontal: width * 0.05,
  },
  stepContainer: {
    alignItems: 'center',
  },
  image: {
    width: width * 0.7, // Image width scales with screen size
    height: height * 0.3, // Image height scales with screen size
    resizeMode: 'contain',
    marginBottom: 10,
  },
  stepText: {
    fontSize: height * 0.025,
    color: '#333',
    textAlign: 'center',
    paddingHorizontal: width * 0.05,
  },
});
