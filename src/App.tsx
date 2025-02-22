import React from "react";
import { Box, CssBaseline } from "@mui/material";
import NavigationDrawer from "./component/NavigationDrawer";
import { AppToolbar } from "./component/AppToolbar";
import MainContainer from "./component/MainContainer";
import { useState } from "react";
import createCustomTheme from "./theme";
import { AuthProvider } from "./context/AuthContext";
import { ThemeProvider } from "@emotion/react";

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleTheme = () => setIsDarkMode((prev) => !prev);
  const toggleDrawer = () => setDrawerOpen((prev) => !prev);

  const theme = createCustomTheme(isDarkMode ? "dark" : "light");

  const drawerWidthCollapsed = 60;
  const drawerWidthExpanded = 240;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AuthProvider>
        <Box display="flex" flexDirection="column" height="100vh">
          <AppToolbar toggleTheme={toggleTheme}
            isDarkMode={isDarkMode}
            drawerOpen={drawerOpen}
            toggleDrawer={toggleDrawer} />
          <Box display="flex" flexDirection="row" width="100%" overflow="visible"
            sx={{ flexShrink: 0 }}>
            <NavigationDrawer
              drawerOpen={drawerOpen}
              drawerWidthCollapsed={drawerWidthCollapsed}
              drawerWidthExpanded={drawerWidthExpanded}
            />
            <MainContainer />
          </Box>
        </Box>
      </AuthProvider>
    </ThemeProvider>
  );
};

export default App;
