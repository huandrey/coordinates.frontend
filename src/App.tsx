import React from 'react';
import { BrowserRouter, useRoutes } from 'react-router-dom';
import './App.css';
import { Home } from './pages/Home';
import { School } from './pages/School';

const App = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/school/:id", element: <School /> },
    // ...
  ]);
  return routes;
};

const AppWrapper = () => {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
};
export default AppWrapper;
