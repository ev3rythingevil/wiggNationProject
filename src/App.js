import React from 'react';
import './App.css';
import { Container, Typography, Button } from '@mui/material';

function App() {
  return (
    <Container>
      <Typography variant="h3" color="primary" gutterBottom>
        Welcome to Wigg Nation
      </Typography>
      <Button variant="contained" color="secondary">
        Get Started
      </Button>
    </Container>
  );
}

export default App;
