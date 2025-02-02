import { Outlet } from 'react-router-dom';
import { AppProvider } from '@toolpad/core/AppProvider';
import DescriptionIcon from '@mui/icons-material/Description';
import SearchIcon from '@mui/icons-material/Search';
import { Bookmark } from '@mui/icons-material';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
const queryClient = new QueryClient(); 


const NAVIGATION = [
  {
    segment: 'home',
    title: 'Home',
    icon: <DescriptionIcon />,
  },
  {
    segment: 'search',
    title: 'Search',
    icon: <SearchIcon />,
  },
  {
    segment: 'saved',
    title: 'Saved',
    icon: <Bookmark />,
  },
]


function App() {
  return (
    <QueryClientProvider client={queryClient}> 
      <AppProvider navigation={NAVIGATION}>
        <Outlet />
      </AppProvider>
    </QueryClientProvider>
  );
}

export default App;