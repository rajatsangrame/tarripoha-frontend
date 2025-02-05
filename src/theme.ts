import { createTheme } from '@mui/material/styles';
import type {} from '@mui/x-data-grid/themeAugmentation';


const createCustomTheme = (mode: 'light' | 'dark') => {
  return createTheme({
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
          root: {
            backgroundColor: mode === 'light' ? '#fff' : '#000',
            color: mode === 'light' ? '#000' : '#fff',
          },
        },
      },
    },
    palette: {
      mode: mode,
      divider: mode === 'light' ? '#ddd' : '#696969',
      text: {
        primary: mode === "dark" ? "#fff" : "#000",
      },
      background: {
        default: mode === 'light' ? '#ffffff' : '#000',
        paper: mode === 'light' ? '#ffffff' : '#000',
      },
    },
  });
};

export default createCustomTheme;
