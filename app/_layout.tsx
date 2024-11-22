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
          name="pages/mission1/MissionSections"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="pages/mission2/MissionSections"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="pages/mission3/MissionSections"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="pages/mission4/MissionSections"
          options={{ headerShown: false }}
        />
    </Stack>
  );
}
