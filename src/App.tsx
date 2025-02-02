import { Outlet } from 'react-router-dom';
import { AppProvider } from '@toolpad/core/AppProvider';
import DescriptionIcon from '@mui/icons-material/Description';
import SearchIcon from '@mui/icons-material/Search';
import { Bookmark } from '@mui/icons-material';


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
    <AppProvider
      navigation={NAVIGATION}
    >
      <Outlet />
    </AppProvider>
  );
}

export default App;