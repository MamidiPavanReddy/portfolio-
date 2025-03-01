import React from 'react';
import { Box, Typography, Grid, Paper } from '@mui/material';
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
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{ fontSize: { xs: '2rem', sm: '3rem', md: '4rem' } }}
        >
          EDUCATION AND CERTIFICATION
        </Typography>

        {/* Education Section */}
        <Grid container spacing={4} justifyContent="center">
          {/* Education Entries */}
          <Grid item xs={12} sm={10} md={8}>
            <Paper sx={{ p: 4, backgroundColor: '#fff', boxShadow: 3 }}>
              <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <SchoolIcon sx={{ fontSize: 40, mr: 2, color: '#1976d2' }} />
                Blockchain Development Program | George Brown College
              </Typography>
              <Typography variant="body1" sx={{ mb: 2 }}>
                2025 (Expected)
              </Typography>
              <Typography variant="body2">
                A comprehensive program covering blockchain development, cryptography, and smart contract programming. Focused on emerging technologies and decentralized systems, preparing for the future of Web3.
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} sm={10} md={8}>
            <Paper sx={{ p: 4, backgroundColor: '#fff', boxShadow: 3 }}>
              <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <SchoolIcon sx={{ fontSize: 40, mr: 2, color: '#1976d2' }} />
                Bachelor of Technology | Nalla Malla Reddy Engineering College
              </Typography>
              <Typography variant="body1" sx={{ mb: 2 }}>
                2017 - 2021
              </Typography>
              <Typography variant="body2">
                Focused on software engineering, data structures, algorithms, and cloud computing. Acquired hands-on experience with various programming languages and technologies, such as Java, Python, and cloud platforms.
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} sm={10} md={8}>
            <Paper sx={{ p: 4, backgroundColor: '#fff', boxShadow: 3 }}>
              <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <SchoolIcon sx={{ fontSize: 40, mr: 2, color: '#1976d2' }} />
                Senior Secondary | Narayana Junior College
              </Typography>
              <Typography variant="body1" sx={{ mb: 2 }}>
                2015 - 2017
              </Typography>
              <Typography variant="body2">
                Specialized in Mathematics, Physics, and Chemistry. Developed a strong foundation in analytical thinking and problem-solving skills, with a focus on STEM subjects.
              </Typography>
            </Paper>
          </Grid>
        </Grid>

        {/* Certifications Section */}
        <Box sx={{ mt: 6 }}>
          <Typography variant="h5" gutterBottom sx={{ fontSize: { xs: '1.5rem', sm: '2rem' } }}>
            CERTIFICATIONS
          </Typography>

          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} sm={10} md={8}>
              <Paper sx={{ p: 4, backgroundColor: '#fff', boxShadow: 3 }}>
                <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <SchoolIcon sx={{ fontSize: 40, mr: 2, color: '#1976d2' }} />
                  Certified Blockchain Developer | Blockchain Council
                </Typography>
                <Typography variant="body1" sx={{ mb: 2 }}>
                  2024
                </Typography>
                <Typography variant="body2">
                  Certification in blockchain development, covering topics like smart contracts, decentralized applications (dApps), and blockchain architecture. Focused on real-world blockchain solutions.
                </Typography>
              </Paper>
            </Grid>

            <Grid item xs={12} sm={10} md={8}>
              <Paper sx={{ p: 4, backgroundColor: '#fff', boxShadow: 3 }}>
                <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <SchoolIcon sx={{ fontSize: 40, mr: 2, color: '#1976d2' }} />
                  Full Stack Web Development | FreeCodeCamp
                </Typography>
                <Typography variant="body1" sx={{ mb: 2 }}>
                  2023
                </Typography>
                <Typography variant="body2">
                  A comprehensive course covering both front-end and back-end technologies. Gained proficiency in JavaScript, React, Node.js, Express, and MongoDB. Learned to build full-stack web applications from scratch.
                </Typography>
              </Paper>
            </Grid>

          
          </Grid>
        </Box>
      </Box>
    </motion.div>
  );
}

export default Education;
