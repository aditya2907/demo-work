import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DashBoard from './components/DashBoard';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

import { CssBaseline, Box } from '@mui/material';

const App = () => {
  return (
    <Router>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <DashBoard />
        <Box
          component="main"
          sx={{ flexGrow: 1, p: 3, marginLeft: { xs: 0, sm: 240 } }}
        >
          <Routes>
            <Route path="/About" component={<About/>} />
            <Route path="/Contact" component={<Contact/>} />
            <Route path="/" component={<Home/>} />
          </Routes>
        </Box>
      </Box>
    </Router>
  );
};

export default App;
