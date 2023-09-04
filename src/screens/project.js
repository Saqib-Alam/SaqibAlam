import { Box, Grid, Typography, Container } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom';
import { Image } from '@mui/material';


const styles = {
  main: {
    // backgroundColor: '#0E1525',
    backgroundColor: '#1E293B',
    color: '#ffffff',
    marginTop: '80px',
    paddingBottom: "40px"
  },

  boxes: {
    width: '100%',
    borderRadius: "8px"
  },
  innerContainer: {
    borderRadius: '5px',
    transition: 'transform 0.3s ease',
  },
  innerContainerHover: {
    '&:hover': {
      transform: 'scale(1.03)'
    }
  },
  transitionAll: {
    '&:hover':
    {
      backgroundColor: '#0e1525',
      background: 'linear-gradient(0deg,#131e34,rgba(14,21,37,.5))',
      opacity: '0.5',
    }
  },

  title: {
    fontSize: '2.2rem',
    fontWeight: 'bold', 
    mt: '20px'
  }
}

const projectDetails = {
  saqib: {
    title: "Saqib Alam",
    logo: "images/saqibalam/saqibSS1.png", 
  },
  softite: {
    title: "Softite",
    logo: "images/softite/softiteSS1.png",
  },
  motorsport: {
    title: "MotorSport",
    logo: "images/motorsport/motorsportSS1.png",
  },
};

const Projects = () => {
  return (
    <>
<Box sx={styles.main}>
<Container>
        <Grid container spacing={4} sx={styles.grid}>
          <Grid item xs={12}>
            <Typography variant='h3' sx={styles.title} align='center'>
              My Projects
            </Typography>
          </Grid>

          {
            Object.keys(projectDetails).map((projectName) => (
              <Grid item xs={12} sm={6} sx={styles.outer}>
                <Link key={projectName} to={`${projectName}`}>
                  <Box key={projectName} sx={{ ...styles.innerContainer, ...styles.transitionAll }}>
                    <Box component='img' sx={{ ...styles.boxes }} src={projectDetails[projectName].logo} />
                  </Box>
                </Link>
              </Grid>
            ))
          }

        </Grid >
      </Container>
</Box>


    </>
  )
}

export default Projects;