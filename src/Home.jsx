import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
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
          minHeight: '100vh', // Use min-height instead of fixed height
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          backgroundColor: '#f0f0f0',
          padding: { xs: '10px', sm: '20px' }, // Responsive padding
          borderRadius: '15px',
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
          width: '100%', // Ensure full width
          overflow: 'hidden', // Prevent overflow issues
        }}
      >
        {/* Profile Picture */}
        <img
          src="https://your-profile-picture-url.com" // Replace with your profile picture URL
          alt=""
          style={{
            width: 'clamp(100px, 20vw, 150px)', // Responsive width
            height: 'clamp(100px, 20vw, 150px)', // Responsive height
            borderRadius: '50%',
            marginBottom: '20px',
            objectFit: 'cover', // Ensure the image scales properly
          }}
        />

        {/* Name */}
        <Typography
          variant="h2"
          gutterBottom
          sx={{
            fontSize: { xs: '2rem', sm: '3rem', md: '4rem' },
            fontWeight: 'bold',
            lineHeight: '1.2',
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
            href="https://github.com/your-username" // Replace with your GitHub URL
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              fontSize: { xs: '0.875rem', sm: '1rem' },
              padding: { xs: '8px 12px', sm: '10px 16px' },
            }}
          >
            GitHub
          </Button>
          <Button
            variant="contained"
            startIcon={<LinkedInIcon />}
            href="https://linkedin.com/in/your-username" // Replace with your LinkedIn URL
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              fontSize: { xs: '0.875rem', sm: '1rem' },
              padding: { xs: '8px 12px', sm: '10px 16px' },
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
          }}
          href="Projects" // Link to the Projects section
        >
          View My Work
        </Button>
      </Box>
       <About></About>
    </motion.div>
  );
}

export default Home;