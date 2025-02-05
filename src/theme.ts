import { createTheme } from '@mui/material/styles';

const createCustomTheme = (mode: 'light' | 'dark') => {
  return createTheme({
    palette: {
      mode: mode,
      divider: mode === 'light' ? '#ddd' : '#696969',
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
  });
};

export default createCustomTheme;
