import React from "react";
import { Box } from "@mui/material";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

const AppLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar />
      <Box sx={{ flexGrow: 1 }}>
        <Header />
        <Box sx={{ p: 3 }}>{children}</Box>
      </Box>
    </Box>
  );
};

export default AppLayout;
