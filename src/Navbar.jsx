import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          My Portfolio
        </Typography>
        <Link to="/" style={{ textDecoration: "none", color: "white", marginRight: "15px" }}>Home</Link>
        <Link to="/about" style={{ textDecoration: "none", color: "white", marginRight: "15px" }}>About</Link>
        <Link to="/education" style={{ textDecoration: "none", color: "white", marginRight: "15px" }}>Education</Link>
        <Link to="/skills" style={{ textDecoration: "none", color: "white", marginRight: "15px" }}>Skills</Link>
        <Link to="/experience" style={{ textDecoration: "none", color: "white", marginRight: "15px" }}>Experience</Link>
        <Link to="/projects" style={{ textDecoration: "none", color: "white", marginRight: "15px" }}>Projects</Link>    
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
