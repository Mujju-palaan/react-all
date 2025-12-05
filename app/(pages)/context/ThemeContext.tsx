"use client";
import { useTheme } from "@/app/context/Theme-Context";


const ThemeComponent = () => {
  const { themeMode, darkTheme, lightTheme } = useTheme();

  return (
    <div className="h-full flex flex-col justify-center items-center gap-4 p-10">
      <h1 className="text-4xl">{`Current theme (${themeMode})`}</h1>

      <br />
      <div className="flex gap-4">
        <button onClick={darkTheme} className="btn">
          Dark Theme
        </button>
        <button onClick={lightTheme} className="btn">
          Light Theme
        </button>
      </div>
    </div>
  );
};

export default ThemeComponent;
