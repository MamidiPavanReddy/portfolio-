import React from 'react';
import { Box, Typography } from '@mui/material';

function Experience() {
  return (
    <Box sx={{ py: 8, backgroundColor: '#f0f0f0' }}>
      <Typography variant="h4" align="center" gutterBottom>
        PROFESSIONAL EXPERIENCE
      </Typography>
      <Box sx={{ px: 4 }}>
        <Typography variant="h6">Software Engineer | Bharat Financial Inclusion Limited</Typography>
        <Typography variant="body1">Sep 1st, 2021 - Jan 6th, 2025</Typography>
        <Typography variant="body1" sx={{ mt: 2 }}>
          Held a leading role in projects coordination and execution. Collaborated with software development and testing team members to design and implement robust solutions that align with client requirements for functionality, scalability, and performance. Equally vital to my work is the documentation of software specifications and best practices to facilitate smooth deployment and ongoing maintenance. I have received the Best Employee of the Year Award for 2024.
        </Typography>
      </Box>
    </Box>
  );
}

export default Experience;