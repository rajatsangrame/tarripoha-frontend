import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import MenuOpen from "@mui/icons-material/MenuOpen";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import CorporateFare from "@mui/icons-material/CorporateFare";
import createCustomTheme from "../theme";
import { ThemeProvider } from "@emotion/react";
import { DrawerMenuItems } from './DrawerMenuItems';
import { AppBar, Button, Divider, Drawer, IconButton, Toolbar, Typography } from "@mui/material";

const drawerWidthCollapsed = 60;
const drawerWidthExpanded = 300;

export default function Navbar() {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDrawer = () => {
        setDrawerOpen((prev) => !prev);
    };

    const toggleTheme = () => {
        setIsDarkMode((prev) => !prev);
    };

    const theme = createCustomTheme(isDarkMode ? 'dark' : 'light');

    return (
        <ThemeProvider theme={theme}>
            <AppBar position="static" sx={{ boxShadow: "none" }}>
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer} sx={{ mr: 2 }}>
                        {drawerOpen ? <MenuOpen /> : <MenuIcon />}
                    </IconButton>

                    <IconButton edge="start" color="inherit" aria-label="logo" sx={{ ml: 1, mr: 2 }}>
                        <CorporateFare />
                    </IconButton>

                    <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: "bold" }}>
                        Tarripoha
                    </Typography>

                    <Button color="inherit">Login</Button>
                    <IconButton color="inherit" onClick={toggleTheme}>
                        {isDarkMode ? <LightModeIcon /> : <DarkModeIcon />}
                    </IconButton>
                </Toolbar>
            </AppBar>

            <Divider sx={{ borderBottomWidth: 1, borderColor: theme.palette.divider }} />

            <Drawer
                variant="permanent"
                sx={{
                    width: drawerOpen ? drawerWidthExpanded : drawerWidthCollapsed,
                    flexShrink: 0,
                    "& .MuiDrawer-paper": {
                        width: drawerOpen ? drawerWidthExpanded : drawerWidthCollapsed,
                        marginTop: "65px",
                        height: "calc(100% - 64px)",
                        overflowX: "hidden",
                        transition: "width 0.3s ease-in-out",
                    },
                }}
            >
                <DrawerMenuItems drawerOpen={drawerOpen} />
            </Drawer>
        </ThemeProvider>
    );
}
