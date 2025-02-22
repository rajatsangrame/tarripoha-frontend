import React from "react";
import { Snackbar, Alert, AlertTitle } from "@mui/material";

interface SnackbarAlertProps {
  open: boolean;
  message: string;
  severity: "success" | "error" | "warning" | "info";
  onClose: () => void;
}

const SnackbarAlert: React.FC<SnackbarAlertProps> = ({ open, message, severity, onClose }) => {
  return (
    <Snackbar
      open={open}
      autoHideDuration={2000}
      onClose={onClose}
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
    >
      <Alert onClose={onClose} severity={severity} sx={{ width: "100%" }}>
        <AlertTitle>{severity.charAt(0).toUpperCase() + severity.slice(1)}</AlertTitle>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default SnackbarAlert;
