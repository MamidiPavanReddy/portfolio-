import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Education from './Education';
import Skills from './Skills';
import Experience from './Experience';
import Projects from './Projects';
import Footer from './Footer';

function App() {
  return (
    <Router>
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: '#f8f9fa',
          fontFamily: 'Arial, sans-serif',
          color: '#333',
        }}
      >
        {/* Navbar at the top */}
        <Navbar />

        {/* Main content */}
        <Box
          sx={{
            flex: 1,
            padding: '20px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/education" element={<Education />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
           
          </Routes>
        </Box>

        {/* Footer at the bottom */}
        <Footer />
      </Box>
    </Router>
  );
}

export default App;