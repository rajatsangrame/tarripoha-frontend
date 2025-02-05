import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Search from './pages/Search';
import Saved from './pages/Saved';
import Login from './pages/Login';
import Navbar from './component/NavigationBar';



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
  {
    Component: App,
    children: [
      {
        path: '/',
        Component: Navbar,
        children: [
          {
            path: '/home',
            Component: Home,
          },
          {
            path: '/search',
            Component: Search,
          },
          {
            path: '/saved',
            Component: Saved,
          },
          {
            path: '/login',
            Component: Login,
          },
          {
            path: '/rajat',
            Component: Login,
          }
        ]
      }
    ]
  }
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
