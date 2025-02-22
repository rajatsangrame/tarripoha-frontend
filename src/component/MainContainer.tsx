import { useState } from "react";
import { Container } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import DrawerHeader from "./DrawerHeader";
import Home from "../pages/Home";
import Search from "../pages/Search";
import Login from "../pages/Login";
import Saved from "../pages/Saved";
import SnackbarAlert from "../component/SnackbarAlert";

const MainContainer: React.FC = () => {

  const [snackbar, setSnackbar] = useState<{
    open: boolean;
    message: string;
    severity: "success" | "error" | "warning" | "info";
  }>({
    open: false,
    message: "",
    severity: "success",
  });

  const showSnackbar = (message: string, severity: "success" | "error" | "warning" | "info") => {
    setSnackbar({ open: true, message, severity });
  };

  return (
    <Container
      component="main"
      maxWidth={false}
      sx={{
        flexGrow: 1,
      }}
    >
      <DrawerHeader />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/login" element={<Login showSnackbar={showSnackbar} />} />
        <Route path="/saved" element={<Saved />} />
      </Routes>

      <SnackbarAlert
        open={snackbar.open}
        message={snackbar.message}
        severity={snackbar.severity}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
      />
    </Container>
  );
};

export default MainContainer;
