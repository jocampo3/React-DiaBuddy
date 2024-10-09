import { Stack } from "expo-router";

// NOTE: Not sure what this page does.
// The app doesn't seem to care about defining stack screens since the pages load without them -Jose
export default function RootLayout() {
  return (
    <Stack>
        <Stack.Screen name="index" />
        <Stack.Screen name="pages/HomePage"/>
        <Stack.Screen name="pages/SelectLangPage"/>
        <Stack.Screen name="pages/about/AboutPage" />
        <Stack.Screen name="pages/checkinsulin/CheckInsulinPage"/>
        <Stack.Screen name="pages/checkglucose/CheckGlucosePage"/>
        <Stack.Screen name="pages/recordglucose/RecordGlucosePage"/>
        <Stack.Screen name="pages/food/FoodPage"/>
    </Stack>
  );
}
