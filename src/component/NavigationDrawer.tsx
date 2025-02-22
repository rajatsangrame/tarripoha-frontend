import React from "react";
import { Drawer, List, ListItem, ListItemText, ListItemButton, ListItemIcon, Box } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import BookmarksIcon from "@mui/icons-material/Bookmarks";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import DrawerHeader from "./DrawerHeader";

const menuItems = [
  { text: "Home", icon: <HomeIcon />, path: "/home" },
  { text: "Search", icon: <SearchIcon />, path: "/search" },
  { text: "Saved", icon: <BookmarksIcon />, path: "/saved" },
];

interface NavigationDrawerProps {
  drawerOpen: boolean;
  drawerWidthExpanded: number;
  drawerWidthCollapsed: number;
}

const NavigationDrawer: React.FC<NavigationDrawerProps> = ({ drawerOpen, drawerWidthCollapsed, drawerWidthExpanded }) => {
  return (
    <Box display="flex" flexDirection="column" height="100vh">
      <Drawer variant="permanent" anchor="left"
        sx={{
          width: drawerOpen ? drawerWidthExpanded : drawerWidthCollapsed,
          flexShrink: 0,
          transition: "width 0.3s ease",
          "& .MuiDrawer-paper": {
            width: drawerOpen ? drawerWidthExpanded : drawerWidthCollapsed,
            transition: "width 0.3s ease",
          },
        }}>
        <DrawerHeader />
        <List>
          {menuItems.map((item, index) => (
            <ListItem key={index} disablePadding sx={{ display: "flex", alignItems: "center" }}>
              <ListItemButton
                component={Link} to={item.path}>
                <ListItemIcon sx={{ minWidth: "48px" }}>{item.icon}</ListItemIcon>
                <ListItemText
                  primary={item.text}
                sx={{
                  whiteSpace: "nowrap",
                  opacity: drawerOpen ? 1 : 0,
                  boxSizing: "border-box",
                }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
};

export default NavigationDrawer;