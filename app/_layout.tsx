import { Stack } from "expo-router";

// NOTE: Not sure what this page does.
// The app doesn't seem to care about defining stack screens since the pages load without them -Jose
export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" />
      <Stack.Screen name="about" />
      <Stack.Screen name="lang"/>
      <Stack.Screen name="home"/>
      <Stack.Screen name="checkglucosepage"/>
      <Stack.Screen name="insulin"/>
      <Stack.Screen name="foodpage"/>
    </Stack>
  );
}
