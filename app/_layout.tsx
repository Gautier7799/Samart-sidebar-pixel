import { Stack } from "expo-router";
import { useEffect, useState } from "react";
import { useColorScheme } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import * as SplashScreen from "expo-splash-screen";
import { ThemeChoice, ThemeContext } from "../src/ThemeContext";
import Sidebar, { DynamicPalette } from "../modules/sidebar";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const systemScheme = useColorScheme();
  const [themeChoice, setThemeChoice] = useState<ThemeChoice>('system');
  const [dynamicPalette, setDynamicPalette] = useState<DynamicPalette>({});

  useEffect(() => {
    let mounted = true;
    Sidebar.getDynamicColors()
      .then(palette => { if (mounted) setDynamicPalette(palette ?? {}); })
      .catch(() => { if (mounted) setDynamicPalette({}); });
    return () => { mounted = false; };
  }, []);

  useEffect(() => { SplashScreen.hideAsync(); }, []);
  const appTheme = themeChoice === 'system' ? (systemScheme ?? 'dark') : themeChoice;
  const dark = appTheme === "dark";
  return (
    <ThemeContext.Provider value={{ appTheme, themeChoice, setThemeChoice, dynamicPalette }}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Stack
          screenOptions={{
            headerShadowVisible: false,
            headerStyle: { backgroundColor: dark ? "#141218" : "#FFFBFE" },
            headerTintColor: dark ? "#E6E1E5" : "#1C1B1F",
            contentStyle: { backgroundColor: dark ? "#141218" : "#FFFBFE" },
          }}
        />
      </GestureHandlerRootView>
    </ThemeContext.Provider>
  );
}
