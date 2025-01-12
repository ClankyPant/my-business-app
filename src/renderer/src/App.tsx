
import React from 'react';
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import CustomDrawer from './components/CustomDrawer';
import routes from './constants/routes';
import { ThemeProvider } from '@mui/material';
import theme from './libs/theme';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <CustomDrawer>
          <Routes>
            { 
              routes.map((route) => (
                <Route path={route.location} element={route.page} />    
              ))
            }
          </Routes>
        </CustomDrawer>
      </Router>
    </ThemeProvider>
  );
};

export default App;
