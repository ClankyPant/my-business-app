
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import CustomDrawer from './components/CustomDrawer';
import { ThemeProvider } from '@mui/material';
import routes from './constants/routes';
import theme from './libs/theme';
import React from 'react';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <CustomDrawer>
          <Routes>
            { 
              routes.map((route) => (
                <Route key={route.title} path={route.location} element={route.page} />    
              ))
            }
          </Routes>
        </CustomDrawer>
      </Router>
    </ThemeProvider>
  );
};

export default App;
