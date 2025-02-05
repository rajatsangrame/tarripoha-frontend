import { useState } from "react";
import { Button, TextField, Box, Typography } from "@mui/material";

export default function Login() {
  const [credentials, setCredentials] = useState({ identifier: "", password: "" });
  const [error, setError] = useState("");

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

      alert("Login successful!");
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
    >
      <Typography variant="h4" fontWeight="bold" mb={2}>
        Login
      </Typography>
      <Box component="form" onSubmit={handleSubmit} width={300}>
        <TextField
          fullWidth
          label="Email or Username"
          name="identifier"
          value={credentials.identifier}
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
  );
}
