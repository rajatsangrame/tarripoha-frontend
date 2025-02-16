import React, { useState } from "react";
import { Menu, MenuItem, Avatar, IconButton, Typography, Divider, Box } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import LoginIcon from "@mui/icons-material/Login";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";

export default function AuthButton() {
    const { user, logout } = useAuth();
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    console.log({ user })
    return user ? (
        <>
            <IconButton onClick={handleMenuOpen} sx={{ color: "white" }}>
                <Avatar>
                    {user.firstName ? user.firstName.charAt(0).toUpperCase() : "U"}
                </Avatar>
            </IconButton>
            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                transformOrigin={{ vertical: "top", horizontal: "right" }}
                sx={{ minWidth: 250 }}
            >
                <Box sx={{ p: 2, textAlign: "center", width: 250 }}>
                    <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{
                            maxWidth: "100%"
                        }}
                    >
                        {user.email}
                    </Typography>
                    <Avatar sx={{ mx: "auto", width: 50, height: 50, mt : 1 }}>
                        {user.firstName ? user.firstName.charAt(0).toUpperCase() : "U"}
                    </Avatar>
                    <Typography variant="subtitle1" sx={{ mt: 1 }}>
                        Hello, {user.firstName}!
                    </Typography>
                </Box>

                <Divider />

                <MenuItem
                    onClick={() => {
                        logout();
                        handleMenuClose();
                    }}
                >
                    <LogoutIcon sx={{ mr: 1 }} />
                    Logout
                </MenuItem>
            </Menu>
        </>
    ) : (
        <MenuItem
            component={Link} to={'/login'}
            onClick={() => {
                handleMenuClose();
            }}
        >
            <LoginIcon sx={{ mr: 1 }} />
            Login
        </MenuItem>

    );
}
