import { createContext, useContext } from "react";
import type { DynamicPalette } from "../modules/sidebar";

export type AppTheme = 'light' | 'dark';
export type ThemeChoice = 'light' | 'dark' | 'system';

interface ThemeContextValue {
  appTheme: AppTheme;
  themeChoice: ThemeChoice;
  setThemeChoice: (choice: ThemeChoice) => void;
  dynamicPalette: DynamicPalette;
}

export const ThemeContext = createContext<ThemeContextValue>({
  appTheme: 'dark',
  themeChoice: 'system',
  setThemeChoice: () => {},
  dynamicPalette: {},
});

export function useAppTheme() {
  return useContext(ThemeContext);
}
