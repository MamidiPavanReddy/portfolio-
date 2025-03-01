import React, { useState } from 'react';
import { Box, Typography, Grid, Paper, Button, Modal, Backdrop, Fade } from '@mui/material';
import { motion } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: 'Smart Help Desk',
    duration: 'November 19th, 2021, to January 18th, 2022',
    role: 'Web Developer',
    //image: 'https://via.placeholder.com/300', // Replace with actual image URL
    demoLink: 'https://example.com', // Replace with actual demo link
    repoLink: 'https://github.com/example', // Replace with actual repo link
    responsibilities: [
      'Led a team of four developers to build a web application that increased the efficiency of member services by 60%.',
      'Improved online services and engagement through a user-friendly web portal.',
      'Collaborated with the UX/UI team to enhance user interface designs, resulting in a 30% improvement in user satisfaction.',
    ],
  },
  {
    id: 2,
    title: 'Branch Credit Management Tracker',
    duration: 'January 31st, 2022, to October 6th, 2023',
    role: 'Web Developer',
  //  image: 'https://via.placeholder.com/300', // Replace with actual image URL
    demoLink: 'https://example.com', // Replace with actual demo link
    repoLink: 'https://github.com/example', // Replace with actual repo link
    responsibilities: [
      'Led the migration of legacy systems to modern Asp.net Core, resulting in a 55% increase in system performance and a 40% reduction in operational costs.',
      'Mentored three junior developers, providing guidance on best practices in coding, debugging, and software development life cycles.',
      'Worked closely with the product team to design, build, and maintain critical features within the credit management platform.',
    ],
  },
  {
    id: 3,
    title: 'Operational Credit Management Tracker',
    duration: 'November 7th, 2023, to April 18th, 2024',
    role: 'Web Developer',
 //   image: 'https://via.placeholder.com/300', // Replace with actual image URL
    demoLink: 'https://example.com', // Replace with actual demo link
    repoLink: 'https://github.com/example', // Replace with actual repo link
    responsibilities: [
      'Redesigned the user interface, improving site navigation and compliance with user-centered design best practices.',
      'Ensured seamless functionality during the redesign by implementing responsive design principles for all devices, resulting in a 22% increase in system performance.',
      'Collaborated with cross-functional teams to align project timelines and deliverables, ensuring the timely release of the credit management tracker.',
    ],
  },
  // Add more projects as needed
];

function Projects() {
  const [searchTerm, setSearchTerm] = useState('');
  const [visibleProjects, setVisibleProjects] = useState(3);
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = projects.filter(
    (project) =>
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.role.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const loadMoreProjects = () => {
    setVisibleProjects((prev) => prev + 3);
  };

  const handleOpenModal = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <Box sx={{ py: 8, backgroundColor: '#f9f9f9' }}>
      <Typography variant="h4" align="center" gutterBottom sx={{ fontSize: { xs: '2rem', sm: '3rem' } }}>
        PROJECT PROFILE
      </Typography>
      <Box sx={{ px: 4, mb: 4, textAlign: 'center' }}>
        <input
          type="text"
          placeholder="Search projects..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            padding: '10px',
            width: '300px',
            borderRadius: '4px',
            border: '1px solid #ccc',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
          }}
        />
      </Box>
      <Grid container spacing={4} sx={{ px: 4 }}>
        {filteredProjects.slice(0, visibleProjects).map((project) => (
          <Grid item xs={12} sm={6} md={4} key={project.id}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Paper
                elevation={3}
                sx={{
                  p: 3,
                  cursor: 'pointer',
                  transition: 'transform 0.2s',
                  '&:hover': {
                    transform: 'scale(1.05)',
                  },
                  backgroundColor: '#fff',
                  boxShadow: 2,
                  borderRadius: 2,
                }}
                onClick={() => handleOpenModal(project)}
              >
                {/* <img
                  src={project.image}
                  alt={project.title}
                  style={{
                    width: '100%',
                    height: '200px',
                    objectFit: 'cover',
                    borderRadius: '4px',
                    marginBottom: '16px',
                  }}
                /> */}
                <Typography variant="h6">{project.title}</Typography>
                <Typography variant="body1" sx={{ mt: 1 }}>
                  <strong>Duration:</strong> {project.duration}
                </Typography>
                <Typography variant="body1" sx={{ mt: 1 }}>
                  <strong>Role:</strong> {project.role}
                </Typography>
                <ul>
                  {project.responsibilities.slice(0, 3).map((responsibility, index) => (
                    <li key={index}>{responsibility}</li>
                  ))}
                </ul>
              </Paper>
            </motion.div>
          </Grid>
        ))}
      </Grid>
      {visibleProjects < filteredProjects.length && (
        <Box sx={{ textAlign: 'center', mt: 4 }}>
          <Button variant="contained" onClick={loadMoreProjects}>
            View More
          </Button>
        </Box>
      )}
      <Modal
        open={!!selectedProject}
        onClose={handleCloseModal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{ timeout: 500 }}
      >
        <Fade in={!!selectedProject}>
          <Box
            sx={{
              p: 4,
              backgroundColor: '#fff',
              borderRadius: '4px',
              maxWidth: '800px',
              margin: 'auto',
              mt: 4,
            }}
          >
            {selectedProject && (
              <>
                <Typography variant="h4" gutterBottom>
                  {selectedProject.title}
                </Typography>
                <Typography variant="body1" gutterBottom>
                  <strong>Duration:</strong> {selectedProject.duration}
                </Typography>
                <Typography variant="body1" gutterBottom>
                  <strong>Role:</strong> {selectedProject.role}
                </Typography>
                <ul>
                  {selectedProject.responsibilities.map((responsibility, index) => (
                    <li key={index}>{responsibility}</li>
                  ))}
                </ul>
              </>
            )}
          </Box>
        </Fade>
      </Modal>
    </Box>
  );
}

export default Projects;
