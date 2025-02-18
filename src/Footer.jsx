import React from 'react';
import { Box, Typography } from '@mui/material';

function Footer() {
  return (
    <Box
      sx={{
        py: 4,
        backgroundColor: '#333',
        color: '#fff',
        textAlign: 'center',
      }}
    >
      <Typography variant="body1">
        © 2023 MAMIDI PAVAN REDDY. All rights reserved.
      </Typography>
    </Box>
  );
}

export default Footer;