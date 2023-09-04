import React, { useState } from 'react'
import { Box, Grid, Typography, List, ListItem, ListItemText, Container } from '@mui/material'
import { Buttons, Links } from '../components/buttons';
import '../App.css';
import { useParams } from 'react-router-dom';

const styles = {
  container: {
    margin: '80px 50px'

  },

  title: {
    color: '#fff',
    fontSize: {
      xs: '2rem',
      md: '3rem',
    },
    fontWeight: 'bold',
    lineHeight: '2em',
  },
  descript: {
    color: '#fff',
    fontSize: '1em',
    lineHeight: '1.5em',
    fontWeight: '500',
  },
  tech: {
    color: '#fff',
    fontSize: '2rem',
    fontWeight: 'bold',
    lineHeight: '2.5em',
  },
  technologies: {
    display: 'flex'
  },
  img: {
    width: '80%',
    borderRadius: '8px'
  },
  techImgBox: {
    width: '4em',
    backgroundColor: '#162445',
    margin: '5px',
    padding: '15px',
    borderRadius: '8px',

  },
  techImg: {
    width: '100%'
  },

  screenshots: {
    width: '100%',
    borderRadius: '8px',
    // margin: '20px',
  },
  list: {
    padding: '0px'
  },
  listitem: {
    padding: '0px 16px',
    color: '#fff'
  },
  btnBox: {
    marginTop: "20px"
  },
  button: {
    border: '1px solid grey',
    padding: '12px 40px',
    borderRadius: '50px',
    color: '#fff',
    fontWeight: 'bold',
    marginTop: '10px',
    marginRight: '10px',
    textDecoration: "none",
    transition: 'transform 0.3s ease',
    '&:hover': {
      backgroundColor: '#EA580C',
      border: 'none',
      transform: 'scale(1.1)',
    }
  }

}



const Projectview = () => {
  console.log("paraparaaaaaaaaaa")
  // const [projectDetails, setprojectDetails] = useState(
  const projectDetails = {
    saqib: {
      title: "Saqib Alam",
      description: "Welcome to my developer portfolio! This Section Houses the details for my personal portfolio website, where I showcase my skills, projects, and expertise as a developer.",
      logo: "/images/saqibalam/saqiblogo.png",
      screenshots: {
        SS1: "/images/saqibalam/saqibSS1.png",
        SS2: "/images/saqibalam/saqibSS2.png",
        SS3: "/images/saqibalam/saqibSS3.png",
        SS4: "/images/saqibalam/saqibSS4.png",
      },
      techUsed: {
        react: "/images/skills/reactjs.png",
        mui: "/images/skills/mui.png",
      },
      details: "I have made this website to showcase my projects and to stand out. I'm always excited to connect, collaborate, and receive feedback. Whether you have questions, suggestions, or just want to say hi, don't hesitate to reach out: Email: saqibalam64@gmail.com",
      githubCode: "https://github.com/Saqib-Alam/SaqibAlam",
      hosting: ""
    },
    softite: {
      title: "Softite",
      description: "Softite is softite LLC Clone made with HTML, CSS, Bootstrap for practice purpose",
      logo: "/images/softite/softitelogo.png",
      screenshots: {
        SS1: "/images/softite/softiteSS1.png",
        SS2: "/images/softite/softiteSS2.png",
        SS3: "/images/softite/softiteSS3.png",
        SS4: "/images/softite/softiteSS4.png",
      },
      techUsed: {
        html: "/images/skills/html.png",
        css: "/images/skills/css.png",
        bootstrap: "/images/skills/bootstrap.svg",
      },
      details: "It is static web so you can just see the details.",
      githubCode: "https://github.com/Saqib-Alam/softite",
      hosting: "https://softite-885d7.web.app"
    },
    motorsport: {
      title: "MotorSport",
      description: "MotorSport is MotorSportPakistan Clone made with HTML, CSS, Bootstrap for practice purpose",
      logo: "/images/motorsport/motorsportlogo.png",
      screenshots: {
        SS1: "/images/motorsport/motorsportSS1.png",
        SS2: "/images/motorsport/motorsportSS2.png",
        SS3: "/images/motorsport/motorsportSS3.png",
        SS4: "/images/motorsport/motorsportSS4.png",
        SS5: "/images/motorsport/motorsportSS5.png",
      },
      techUsed: {
        html: "/images/skills/html.png",
        css: "/images/skills/css.png",
        bootstrap: "/images/skills/bootstrap.svg",
      },
      details: "It is static web so you can just see the details.",
      githubCode: "https://github.com/Saqib-Alam/motorsport",
      hosting: "https://motorsport-68a44.web.app"
    },
  }
  // )

  const { projectName } = useParams();
  const project = projectDetails[projectName];


  if (!project) {
    return <div>Project not found.</div>;
  }


  return (
    <>
      <Box sx={styles.container}>
        <Box >
          <Grid container>
            <Grid item md={7}>

              <Typography variant='h3' sx={styles.title}>
                {project.title}
              </Typography>

              <Typography variant='p' sx={styles.descript}>
                {project.description}
              </Typography>
            </Grid>

            <Grid item md={5}>
              <Box component='img' sx={styles.img} src={project.logo} />
            </Grid>
          </Grid>
        </Box>

        <Box>
          <Typography variant='h3' sx={styles.tech}>
            Screenshot
          </Typography>

          <Grid container spacing={2}>
            <Grid item md={4}>
              <Box component='img' sx={styles.screenshots} src={project.screenshots.SS1} />
            </Grid>
            <Grid item md={4}>
              <Box component='img' sx={styles.screenshots} src={project.screenshots.SS2} />
            </Grid>
            <Grid item md={4}>
              <Box component='img' sx={styles.screenshots} src={project.screenshots.SS3} />
            </Grid>
            <Grid item md={4}>
              <Box component='img' sx={styles.screenshots} src={project.screenshots.SS4} />
            </Grid>
          </Grid>

        </Box>

        {/* Features */}
        <Box>
          <Typography variant='h3' sx={styles.tech}>
            Details
          </Typography>
          <List sx={styles.list}>
            <ListItem sx={styles.listitem}>
              <ListItemText primary={project.details} />
            </ListItem>
          </List>

        </Box >
        <Box sx={styles.btnBox}>
          <Buttons sx={styles.button} href={project.githubCode} text="GET CODE" />
          <Buttons sx={styles.button} target="_blank" href={project.hosting} text="VISIT ONLINE" />
        </Box>
      </Box>
      {/* )) */}
      {/* } */}




    </>
  )
}

export default Projectview;