import { Outlet } from "react-router-dom";
import { useState } from "react";
import { ThemeProvider } from "@emotion/react";
import createCustomTheme from "./theme";
import { NavigationBar } from "./component/NavigationBar"
import { AuthProvider } from "./context/AuthContext";

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleTheme = () => setIsDarkMode((prev) => !prev);
  const toggleDrawer = () => setDrawerOpen((prev) => !prev);

  const theme = createCustomTheme(isDarkMode ? "dark" : "light");

  const drawerWidthCollapsed = 60;
  const drawerWidthExpanded = 300;

  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <div style={{ minHeight: '100vh', background: isDarkMode ? "black" : "white" }}>
          <NavigationBar toggleTheme={toggleTheme}
            isDarkMode={isDarkMode}
            drawerOpen={drawerOpen}
            toggleDrawer={toggleDrawer} />
          <div
            style={{
              flexGrow: 1,
              marginLeft: drawerOpen ? drawerWidthExpanded : drawerWidthCollapsed,
              transition: "margin 0.3s ease-in-out",
              padding: "16px"
            }}
          >
            <Outlet />
          </div>
        </div>
      </AuthProvider>
    </ThemeProvider>
  );
}
