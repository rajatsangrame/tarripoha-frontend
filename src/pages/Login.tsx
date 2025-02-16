import { useState } from "react";
import { Button, TextField, Box, Typography } from "@mui/material";
import { ThemeProvider, useTheme } from "@emotion/react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const { login } = useAuth()
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch("http://localhost:3001/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credentials),
      });
      if (!response.ok) throw new Error("Invalid login credentials");

      const data = await response.json();
      login(data.accessToken);
      navigate("/", { replace: true });
    } catch (err: any) {
      setError(err.message);
    }
  };

  const theme = useTheme();
  return (
    <ThemeProvider theme={theme}>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        marginTop={'64px'}
        height="100vh"
      >
        <Typography variant="h4" fontWeight="bold" mb={2}>
          Login
        </Typography>
        <Box component="form" onSubmit={handleSubmit} width={300}>
          <TextField
            fullWidth
            label="Email or Username"
            name="username"
            value={credentials.username}
            onChange={handleChange}
            margin="normal"
            required
          />
          <TextField
            fullWidth
            label="Password"
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
            margin="normal"
            required
          />
          {error && (
            <Typography color="error" mt={1}>
              {error}
            </Typography>
          )}
          <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
            Login
          </Button>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
