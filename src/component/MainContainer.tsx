import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Search from "../pages/Search";
import Login from "../pages/Login";
import DrawerHeader from "./DrawerHeader";
import Saved from "../pages/Saved";

const MainContainer: React.FC = () => (
  <>
    <DrawerHeader />
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/search" element={<Search />} />
      <Route path="/login" element={<Login />} />
      <Route path="/saved" element={<Saved />} />
    </Routes>
  </>
);

export default MainContainer;