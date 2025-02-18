import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import WebIcon from '@mui/icons-material/Web';

function Skills() {
  const skills = [
    { name: 'C#', icon: <CodeIcon /> },
    { name: 'MS SQL', icon: <StorageIcon /> },
    { name: 'React', icon: <WebIcon /> },
    { name: 'Dot Net', icon: <CodeIcon /> },
    { name: 'Dot Net Core', icon: <CodeIcon /> },
    { name: 'MVC', icon: <CodeIcon /> },
    { name: 'CSS', icon: <WebIcon /> },
    { name: 'HTML', icon: <WebIcon /> },
    { name: 'JavaScript', icon: <CodeIcon /> },
    { name: 'Python', icon: <CodeIcon /> },
    { name: 'Solidity', icon: <CodeIcon /> },
    { name: 'GitHub', icon: <CodeIcon /> },
    { name: 'Team Foundation Server', icon: <StorageIcon /> },
    { name: 'Internet Information Server (IIS)', icon: <StorageIcon /> },
  ];

  return (
    <Box sx={{ py: 8, backgroundColor: '#ffffff' }}>
      <Typography variant="h4" align="center" gutterBottom>
        TECHNICAL SKILLS
      </Typography>
      <Grid container spacing={2} sx={{ px: 4 }}>
        {skills.map((skill, index) => (
          <Grid item xs={6} sm={4} md={3} key={index} sx={{ display: 'flex', alignItems: 'center' }}>
            {skill.icon} <Typography variant="body1" sx={{ ml: 1 }}>{skill.name}</Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Skills;
