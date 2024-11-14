import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
        <Stack.Screen 
          name="index" 
          options={{ headerShown: false }} // Hides the header for this screen
        />
        <Stack.Screen 
          name="pages/HomePage"
          options={{ headerShown: false }} // Hides the header for this screen
        />
        <Stack.Screen 
          name="pages/SelectLangPage"
          options={{ headerShown: false }} // Hides the header for this screen
        />
        <Stack.Screen 
          name="pages/about/AboutPage"
          options={{ headerShown: false }} // Hides the header for this screen
        />
        <Stack.Screen 
          name="pages/checkinsulin/CheckInsulinPage"
          options={{ headerShown: false }} // Hides the header for this screen
        />
        <Stack.Screen 
          name="pages/checkglucose/CheckGlucosePage"
          options={{ headerShown: false }} // Hides the header for this screen
        />
        <Stack.Screen 
          name="pages/recordglucose/RecordGlucosePage"
          options={{ headerShown: false }} // Hides the header for this screen
        />
        <Stack.Screen 
          name="pages/food/FoodPage"
          options={{ headerShown: false }} // Hides the header for this screen
        />
        <Stack.Screen
          name="pages/about/AboutSection"
          options={{ headerShown: false }}
        />
    </Stack>
  );
}
