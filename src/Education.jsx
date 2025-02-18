import React from 'react';
import { Box, Typography } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import { motion } from 'framer-motion';

function Education() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Box sx={{ py: 8, backgroundColor: '#f0f0f0', textAlign: 'center' }}>
        <Typography variant="h4" align="center" gutterBottom sx={{ fontSize: { xs: '2rem', sm: '3rem', md: '4rem' } }}>
          EDUCATION AND CERTIFICATION
        </Typography>
        <Box sx={{ px: 4, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', position: 'relative' }}>
          {/* Vertical line */}
          <Box
            sx={{
              position: 'absolute',
              left: '20px',
              top: 0,
              bottom: 0,
              width: '2px',
              backgroundColor: '#1976d2',
            }}
          />
          {/* Education entries */}
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 4, position: 'relative' }}>
            <SchoolIcon sx={{ fontSize: 40, mr: 2, color: '#1976d2', zIndex: 1 }} />
            <Box>
              <Typography variant="h6">Blockchain Development Program | George Brown College</Typography>
              <Typography variant="body1">2025</Typography>
            </Box>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 4, position: 'relative' }}>
            <SchoolIcon sx={{ fontSize: 40, mr: 2, color: '#1976d2', zIndex: 1 }} />
            <Box>
              <Typography variant="h6">Bachelor of Technology | Nalla Malla Reddy Engineering College</Typography>
              <Typography variant="body1">2017-2021</Typography>
            </Box>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
            <SchoolIcon sx={{ fontSize: 40, mr: 2, color: '#1976d2', zIndex: 1 }} />
            <Box>
              <Typography variant="h6">Senior Secondary | Narayana Junior College</Typography>
              <Typography variant="body1">2015-2017</Typography>
            </Box>
          </Box>
        </Box>
        {/* Certifications */}
        <Box sx={{ px: 4, display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 4 }}>
          <Typography variant="h5" gutterBottom>
            CERTIFICATIONS
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <SchoolIcon sx={{ fontSize: 40, mr: 2, color: '#1976d2' }} />
            <Box>
              <Typography variant="h6">Certified Blockchain Developer | Blockchain Council</Typography>
              <Typography variant="body1">2024</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </motion.div>
  );
}

export default Education;