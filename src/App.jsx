import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import Sidebar from './components/Sidebar.jsx';
import Dashboard from './components/Dashboard.jsx';
import Mileage from './components/Mileage.jsx';
import Reviews from './components/Reviews.jsx';
import '../src/App.css'

function App() {
  return (
    <Router>
      <Box sx={{ display: 'flex' }}>
        <Sidebar />
        <Box
          component="main"
          sx={{ flexGrow: 1, bgcolor: 'background.paper', p: 3 }}
        >
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/mileage" element={<Mileage />} />
            <Route path="/reviews" element={<Reviews />} />
          </Routes>
        </Box>
      </Box>
    </Router>
  );
}

export default App;
