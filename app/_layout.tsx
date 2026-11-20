import { Stack } from "expo-router";
import { useEffect, useMemo, useState } from "react";
import { AppState, useColorScheme } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import * as SplashScreen from "expo-splash-screen";
import { ThemeChoice, ThemeContext } from "../src/ThemeContext";
import Sidebar, { DynamicPalette } from "../modules/sidebar";
import { makeColors } from "../src/theme";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const systemScheme = useColorScheme();
  const [themeChoice, setThemeChoice] = useState<ThemeChoice>('system');
  const [dynamicPalette, setDynamicPalette] = useState<DynamicPalette>({});

  useEffect(() => {
    let mounted = true;
    const refreshDynamicPalette = () => {
      Sidebar.getDynamicColors()
        .then(palette => {
          if (mounted) setDynamicPalette(palette ?? {});
        })
        .catch(() => {
          // Keep the last valid palette if the native lookup temporarily fails.
        });
    };

    refreshDynamicPalette();
    const subscription = AppState.addEventListener("change", state => {
      if (state === "active") refreshDynamicPalette();
    });

    return () => {
      mounted = false;
      subscription.remove();
    };
  }, []);

  useEffect(() => { SplashScreen.hideAsync(); }, []);
  const appTheme = themeChoice === 'system' ? (systemScheme ?? 'dark') : themeChoice;
  const colors = useMemo(() => makeColors(appTheme, dynamicPalette), [appTheme, dynamicPalette]);
  return (
    <ThemeContext.Provider value={{ appTheme, themeChoice, setThemeChoice, dynamicPalette }}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Stack
          screenOptions={{
            headerShadowVisible: false,
            headerStyle: { backgroundColor: colors.bg },
            headerTintColor: colors.text,
            headerTitleStyle: { fontWeight: "700" },
            contentStyle: { backgroundColor: colors.bg },
          }}
        />
      </GestureHandlerRootView>
    </ThemeContext.Provider>
  );
}
