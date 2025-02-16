import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import MenuOpen from "@mui/icons-material/MenuOpen";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import CorporateFare from "@mui/icons-material/CorporateFare";
import { DrawerMenuItems } from './DrawerMenuItems';
import { AppBar, Divider, Drawer, IconButton, Toolbar, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import ToolbarAccount from "./ToolbarAccount";

const drawerWidthCollapsed = 60;
const drawerWidthExpanded = 300;

interface NavigationBarProps {
    toggleTheme: () => void;
    isDarkMode: boolean;
}

export const NavigationBar: React.FC<NavigationBarProps> = ({ toggleTheme, isDarkMode }) => {

    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = () => {
        setDrawerOpen((prev) => !prev);
    };

    const theme = useTheme();

    return (
        <>
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

                    <IconButton color="inherit" onClick={toggleTheme}>
                        {isDarkMode ? <LightModeIcon /> : <DarkModeIcon />}
                    </IconButton>

                    <ToolbarAccount />
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
        </>
    );
}
