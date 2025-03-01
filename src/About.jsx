import React from 'react';
import { Box, Typography } from '@mui/material';

function About() {
  return (
    <Box sx={{ py: 8, backgroundColor: '#ffffff' }}>
      <Typography variant="h4" align="center" gutterBottom>
        PROFESSIONAL SUMMARY
      </Typography>
      <Typography variant="body1" sx={{ px: 4, textAlign: 'justify' }}>
      As a Software Engineer with over 3.5 years of experience, I specialize in creating and deploying high-performance web applications. I have expertise in a diverse range of technologies, including C#, Web3, React, HTML, CSS, and SQL Server, along with a strong understanding of modern web technologies, cloud platforms, and Agile methodologies.

      I am passionate about crafting reliable, scalable solutions that adhere to industry best practices. My approach is collaborative and driven by a commitment to delivering quality software under tight deadlines. As a proactive team player with strong communication skills, I consistently strive to contribute to projects in fast-paced, high-pressure environments.

      Whether working on cutting-edge Web3 applications or enterprise-level systems, my goal is always to create intuitive, efficient, and impactful solutions that elevate user experiences and drive business success.
      </Typography>
    </Box>
  );
}

export default About;