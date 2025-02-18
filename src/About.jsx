import React from 'react';
import { Box, Typography } from '@mui/material';

function About() {
  return (
    <Box sx={{ py: 8, backgroundColor: '#ffffff' }}>
      <Typography variant="h4" align="center" gutterBottom>
        PROFESSIONAL SUMMARY
      </Typography>
      <Typography variant="body1" sx={{ px: 4, textAlign: 'justify' }}>
        Software Engineer with 3.5 years of experience in Creating and deploying high-performance Web applications. I am well-versed in C#, Web3 Technologies, React, HTML, CSS, SQL Server, and knowledgeable in modern web technologies, cloud platforms, and Agile frameworks. Committed to providing reliable, scalable solutions while following the industry’s best practices. A proactive team player with excellent communication abilities and a demonstrated history of delivering quality software in fast-paced, high-pressure environments.
      </Typography>
    </Box>
  );
}

export default About;