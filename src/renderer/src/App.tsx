
import React from 'react';
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import CustomDrawer from './components/CustomDrawer';
import routes from './constants/routes';

const App: React.FC = () => {
  return (
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
  );
};

export default App;
