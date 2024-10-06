import { Stack } from "expo-router";

// NOTE: Not sure what this page does.
// The app doesn't seem to care about defining stack screens since the pages load without them -Jose
export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" />
      <Stack.Screen name="about" />
      <Stack.Screen name="SelectLangPage"/>
      <Stack.Screen name="home"/>
      <Stack.Screen name="CheckGlucosePage"/>
      <Stack.Screen name="CheckInsulinPage"/>
      <Stack.Screen name="FoodPage"/>
      <Stack.Screen name="RecordGlucosePage"/>
    </Stack>
  );
}
