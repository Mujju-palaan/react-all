import { createContext, useContext, ReactNode, useState} from "react";

type ThemeContextType = {
  themeMode: "light" | "dark";
  darkTheme: () => void;
  lightTheme: () => void;
};

export const ThemeContext = createContext<ThemeContextType>({
    themeMode: 'light',
    darkTheme: () => {},
    lightTheme: () => {},
});

export const ThemeProvider = ({children}:  { children: ReactNode }) => {
  const [themeMode, setThemeMode] = useState<"light" | "dark">("light");
  const darkTheme = () => setThemeMode("dark");
  const lightTheme = () => setThemeMode("light");

    return (
    <ThemeContext.Provider value={{ themeMode, darkTheme, lightTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => {
    return useContext(ThemeContext);
}