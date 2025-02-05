import React from "react";
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import BookmarksIcon from "@mui/icons-material/Bookmarks";
import SearchIcon from "@mui/icons-material/Search";
import LogoutIcon from "@mui/icons-material/Logout";

interface DrawerMenuItemsProps {
    drawerOpen: boolean;
}

export const DrawerMenuItems: React.FC<DrawerMenuItemsProps> = ({ drawerOpen }) => {
    return (
        <List>
            {[
                { text: "Home", icon: <HomeIcon /> },
                { text: "Search", icon: <SearchIcon /> },
                { text: "Saved", icon: <BookmarksIcon /> },
                { text: "Logout", icon: <LogoutIcon /> },
            ].map((item, index) => (
                <ListItem key={index} disablePadding sx={{ display: "flex", alignItems: "center" }}>
                    <ListItemButton>
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
