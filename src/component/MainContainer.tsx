import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Search from "../pages/Search";
import Login from "../pages/Login";
import DrawerHeader from "./DrawerHeader";
import Saved from "../pages/Saved";
import { Box } from "@mui/material";

const MainContainer: React.FC = () => (
  <Box component="main" sx={{
    flexGrow: 1,
  }}>
    <DrawerHeader />
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/search" element={<Search />} />
      <Route path="/login" element={<Login />} />
      <Route path="/saved" element={<Saved />} />
    </Routes>
  </Box>
);

export default MainContainer;