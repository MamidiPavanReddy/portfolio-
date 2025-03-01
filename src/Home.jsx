import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CodeIcon from '@mui/icons-material/Code';  // Importing CodeIcon
import { motion } from 'framer-motion';
import About from './About';

function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          backgroundColor: '#f7f7f7',
          padding: { xs: '10px', sm: '20px' },
          borderRadius: '15px',
          boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
          width: '100%',
          overflow: 'hidden',
        }}
      >
        {/* CodeIcon as Profile Image */}
        {/* <CodeIcon
          sx={{
            fontSize: '150px',
            color: '#000',  // Set color to black
            marginBottom: '20px',
          }}
        /> */}

        {/* Name */}
        <Typography
          variant="h2"
          gutterBottom
          sx={{
            fontSize: { xs: '2rem', sm: '3rem', md: '4rem' },
            fontWeight: 'bold',
            lineHeight: '1.2',
            color: '#2C3E50',
          }}
        >
          MAMIDI PAVAN REDDY
        </Typography>

        {/* Job Title */}
        <Typography
          variant="h5"
          gutterBottom
          sx={{
            fontSize: { xs: '1.25rem', sm: '1.5rem', md: '2rem' },
            color: 'text.secondary',
          }}
        >
          Software Engineer
        </Typography>

        {/* Contact Information */}
        <Typography
          variant="body1"
          gutterBottom
          sx={{
            fontSize: { xs: '0.875rem', sm: '1rem', md: '1.125rem' },
            color: 'text.secondary',
          }}
        >
          +1 (437) 297 9484 | PavanReddy2802@gmail.com | Mississauga, ON, CA
        </Typography>

        {/* Social Media Buttons */}
        <Box sx={{ mt: 2, display: 'flex', gap: '10px', flexWrap: 'wrap', justifyContent: 'center' }}>
          <Button
            variant="contained"
            startIcon={<GitHubIcon />}
            href="https://github.com/MamidiPavanReddy"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              fontSize: { xs: '0.875rem', sm: '1rem' },
              padding: { xs: '8px 12px', sm: '10px 16px' },
              backgroundColor: '#333',
              '&:hover': {
                backgroundColor: '#2C3E50',
              },
            }}
          >
            GitHub
          </Button>
          <Button
            variant="contained"
            startIcon={<LinkedInIcon />}
            href="https://www.linkedin.com/in/mamidi-pavan-reddy-9202b41b6/"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              fontSize: { xs: '0.875rem', sm: '1rem' },
              padding: { xs: '8px 12px', sm: '10px 16px' },
              backgroundColor: '#0077B5',
              '&:hover': {
                backgroundColor: '#005C8C',
              },
            }}
          >
            LinkedIn
          </Button>
        </Box>

        {/* View My Work Button */}
        <Button
          variant="outlined"
          sx={{
            mt: 2,
            fontSize: { xs: '0.875rem', sm: '1rem' },
            padding: { xs: '8px 12px', sm: '10px 16px' },
            borderColor: '#3498DB',
            color: '#3498DB',
            '&:hover': {
              borderColor: '#2980B9',
              backgroundColor: '#2980B9',
              color: '#fff',
            },
          }}
          href="/projects"
        >
          View My Work
        </Button>
      </Box>

      {/* About Section */}
      <About />
    </motion.div>
  );
}

export default Home;
