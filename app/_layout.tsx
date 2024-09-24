import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" />
      <Stack.Screen name="about" />
      <Stack.Screen name="lang"/>
      <Stack.Screen name="home"/>
      <Stack.Screen name="glucose_check"/>
      <Stack.Screen name="insulin"/>
    </Stack>
  );
}
