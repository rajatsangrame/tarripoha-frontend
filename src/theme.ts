import { createTheme } from '@mui/material/styles';

const createCustomTheme = (mode: 'light' | 'dark') => {

  const light = {
    background: {
      default: '#fff',
      paper: '#fff',
    },
    text: {
      primary: '#000',
      secondary: '#000',
    },
    primary: {
      main: '#000',
      light: '#000',
      dark: '#B2B2B2',
    },
    secondary: {
      main: '#6AA84F',
      light: '#87B972',
    },
    divider: '#EEE',
  };

  const dark = {
    background: {
      default: '#121212',
      paper: '#121212',
    },
    text: {
      primary: '#fff',
      secondary: '#fff',
    },
    primary: {
      main: '#fff',
      light: '#fff',
      dark: '#B2B2B2',
    },
    secondary: {
      main: '#6AA84F',
      light: '#87B972',
    },
    divider: '#EEE',
  };

  return createTheme({
    palette: {
      ...(mode === 'light' ? light : dark),
      mode,
    },
    components: {
      MuiAppBar: {
        styleOverrides: {
          root: {
            backgroundColor: mode === 'light' ? '#fff' : '#000',
            color: mode === 'light' ? '#000' : '#fff',
          },
        },
      },
      MuiDrawer: {
        styleOverrides: {
          paper: {
            backgroundColor: mode === "light" ? "#fff" : "#121212",
            color: mode === "light" ? "#121212" : "#fff", 
            borderRight: `1px solid ${mode === "light" ? "#ddd" : "#333"}`,
          },
        },
      },
    },
    typography: {
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
      ].join(','),
    },
  });
};

export default createCustomTheme;