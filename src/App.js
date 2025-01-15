import React from 'react';
import './App.css';
import { Container, Typography, Button } from '@mui/material';

//components
import Navbar from './components/navbar';
import AboutPage from './components/about_page/about_page';

// Routing
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
  <Router>
    <Container>
      <Navbar />
        <Routes>
          <Route path="/about" element={<AboutPage />} />
        </Routes>
    </Container>
  </Router>
  );
}

export default App;
