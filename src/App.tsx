import { Outlet } from "react-router-dom";
import { useState } from "react";
import { ThemeProvider } from "@emotion/react";
import createCustomTheme from "./theme";
import { NavigationBar } from "./component/NavigationBar"


export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  const theme = createCustomTheme(isDarkMode ? "dark" : "light");

  return (
    <ThemeProvider theme={theme}>
      <div style={{ minHeight: '100vh', background: isDarkMode ? "black" : "white" }}>
        <NavigationBar toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
        <Outlet />
      </div>
    </ThemeProvider>
  );
}
