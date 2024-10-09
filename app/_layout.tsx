import { Stack } from "expo-router";

// NOTE: Not sure what this page does.
// The app doesn't seem to care about defining stack screens since the pages load without them -Jose
export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="pages/HomePage" options={{ headerShown: true, title:"Why am i a superhero?", headerStyle: {
            backgroundColor: 'yellow', // Background color of the header
          },
          headerTitleStyle: {
            fontWeight: 'bold', // Font weight of the title
            color: 'black', // Color of the title text
          },
          headerTintColor: '#fff', }} />
      <Stack.Screen name="pages/SelectLangPage" options={{ headerShown: false }} />
      <Stack.Screen name="pages/about/AboutPage" options={{ headerShown: false }} />
      <Stack.Screen name="pages/checkinsulin/CheckInsulinPage" options={{ headerShown: false }} />
      <Stack.Screen name="pages/checkglucose/CheckGlucosePage" options={{ headerShown: false }} />
      <Stack.Screen name="pages/recordglucose/RecordGlucosePage" options={{ headerShown: false }} />
      <Stack.Screen name="pages/food/FoodPage" options={{ headerShown: false }} />
    </Stack>
  );
}
