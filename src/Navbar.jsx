import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#2C3E50' }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 'bold', color: '#ECF0F1' }}>
          Pavan
        </Typography>
        <Box sx={{ display: 'flex', gap: 3 }}>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Button 
              sx={{
                color: 'white',
                '&:hover': {
                  backgroundColor: '#3498DB', 
                  color: '#fff'
                }
              }}
            >
              Home
            </Button>
          </Link>
          <Link to="/about" style={{ textDecoration: "none" }}>
            <Button 
              sx={{
                color: 'white',
                '&:hover': {
                  backgroundColor: '#3498DB', 
                  color: '#fff'
                }
              }}
            >
              About
            </Button>
          </Link>
          <Link to="/education" style={{ textDecoration: "none" }}>
            <Button 
              sx={{
                color: 'white',
                '&:hover': {
                  backgroundColor: '#3498DB', 
                  color: '#fff'
                }
              }}
            >
              Education
            </Button>
          </Link>
          <Link to="/skills" style={{ textDecoration: "none" }}>
            <Button 
              sx={{
                color: 'white',
                '&:hover': {
                  backgroundColor: '#3498DB', 
                  color: '#fff'
                }
              }}
            >
              Skills
            </Button>
          </Link>
          <Link to="/experience" style={{ textDecoration: "none" }}>
            <Button 
              sx={{
                color: 'white',
                '&:hover': {
                  backgroundColor: '#3498DB', 
                  color: '#fff'
                }
              }}
            >
              Experience
            </Button>
          </Link>
          <Link to="/projects" style={{ textDecoration: "none" }}>
            <Button 
              sx={{
                color: 'white',
                '&:hover': {
                  backgroundColor: '#3498DB', 
                  color: '#fff'
                }
              }}
            >
              Projects
            </Button>
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
