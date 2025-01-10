import '../../global.css'
import { Appearance, useColorScheme } from 'react-native';

import { Stack } from "expo-router";

export default function RootLayout() {
  let colorScheme = useColorScheme();

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  )
}