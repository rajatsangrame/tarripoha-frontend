import React from "react";
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import BookmarksIcon from "@mui/icons-material/Bookmarks";
import SearchIcon from "@mui/icons-material/Search";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link } from "react-router-dom";

interface DrawerMenuItemsProps {
    drawerOpen: boolean;
}

export const DrawerMenuItems: React.FC<DrawerMenuItemsProps> = ({ drawerOpen }) => {

    const menuItems = [
        { text: "Home", icon: <HomeIcon />, path: "/home" },
        { text: "Search", icon: <SearchIcon />, path: "/search" },
        { text: "Saved", icon: <BookmarksIcon />, path: "/saved" },
        { text: "Logout", icon: <LogoutIcon />, path: ''  }
    ];
    return (
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
                                transition: "opacity 0.2s ease-in-out",
                            }}
                        />
                    </ListItemButton>
                </ListItem>
            ))}
        </List>
    );
};
