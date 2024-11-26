import { Box, Grid, Typography, Container } from '@mui/material'
import React from 'react'
import HTML from '../Assets/skills/html.png'
import CSS from '../Assets/skills/css.png'
import JS from '../Assets/skills/js.png'
import PHP from '../Assets/skills/php.png'
import BOOTSTRAP from '../Assets/skills/bootstrap.svg'
import REACTJS from '../Assets/skills/reactjs.png'
import GITHUB from '../Assets/skills/github.png'
import WP from '../Assets/skills/Wordpresslogo.png'
import FIREBASE from '../Assets/skills/firebase.png'
import VSCODE from '../Assets/skills/VSCode.webp'
import MUI from '../Assets/skills/mui.svg'





const styles = {
  main: {
    backgroundColor: '#0E1525',
    color: '#ffffff',
    flexGrow: 1
  },

  boxes: {
    width: '80px',
  },
  outer: {
    display: 'flex',
    justifyContent: 'space-evenly',
  },
  innerContainer: {
    backgroundColor: '#1E293B',
    width: '200px',
    height: '200px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '5px',
    transition: 'transform 0.3s ease',
  },
  innerContainerHover: {
    '&:hover': {
      transform: 'scale(1.1)'
    }
  },

  title: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    marginTop: '50px',
    textAlign: 'center'
  },

  tech: {
    fontSize: '1.2rem',
    marginTop: '20px'
  }

}



const Myskills = () => {
  return (
    <>
      <Box sx={styles.main}>
        <Container>
          <Grid container spacing={6} sx={styles.grid}>
            <Grid item xs={12}>
              <Typography variant='h3' sx={styles.title}>
                My Skills
              </Typography>
            </Grid>

            <Grid item xs={6} sm={4} md={3} sx={styles.outer}>
              <Box sx={{ ...styles.innerContainer, ...styles.innerContainerHover }}>
                <Box component='img' sx={styles.boxes} src={VSCODE} />
                <Typography variant='h5' sx={styles.tech}>
                  VS Code
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={6} sm={4} md={3} sx={styles.outer}>
              <Box sx={{ ...styles.innerContainer, ...styles.innerContainerHover }}>
                <Box component='img' sx={styles.boxes} src={HTML} />
                <Typography variant='h5' sx={styles.tech}>
                  HTML
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={6} sm={4} md={3} sx={styles.outer}>
              <Box sx={{ ...styles.innerContainer, ...styles.innerContainerHover }}>
                <Box component='img' sx={styles.boxes} src={CSS} />
                <Typography variant='h5' sx={styles.tech}>
                  CSS
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={6} sm={4} md={3} sx={styles.outer}>
              <Box sx={{ ...styles.innerContainer, ...styles.innerContainerHover }}>
                <Box component='img' sx={styles.boxes} src={BOOTSTRAP} />
                <Typography variant='h5' sx={styles.tech}>
                  Bootstrap
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={6} sm={4} md={3} sx={styles.outer}>
              <Box sx={{ ...styles.innerContainer, ...styles.innerContainerHover }}>
                <Box component='img' sx={styles.boxes} src={JS} />
                <Typography variant='h5' sx={styles.tech}>
                  JavaScript
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={6} sm={4} md={3} sx={styles.outer}>
              <Box sx={{ ...styles.innerContainer, ...styles.innerContainerHover }}>
                <Box component='img' sx={styles.boxes} src={PHP} />
                <Typography variant='h5' sx={styles.tech}>
                  PHP
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={6} sm={4} md={3} sx={styles.outer}>
              <Box sx={{ ...styles.innerContainer, ...styles.innerContainerHover }}>
                <Box component='img' sx={styles.boxes} src={REACTJS} />
                <Typography variant='h5' sx={styles.tech}>
                  React JS
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={6} sm={4} md={3} sx={styles.outer}>
              <Box sx={{ ...styles.innerContainer, ...styles.innerContainerHover }}>
                <Box component='img' sx={styles.boxes} src={MUI} />
                <Typography variant='h5' sx={styles.tech}>
                  Material UI
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={6} sm={4} md={3} sx={styles.outer}>
              <Box sx={{ ...styles.innerContainer, ...styles.innerContainerHover }}>
                <Box component='img' sx={styles.boxes} src={WP} />
                <Typography variant='h5' sx={styles.tech}>
                  Wordpress
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={6} sm={4} md={3} sx={styles.outer}>
              <Box sx={{ ...styles.innerContainer, ...styles.innerContainerHover }}>
                <Box component='img' sx={styles.boxes} src={GITHUB} />
                <Typography variant='h5' sx={styles.tech}>
                  GitHub
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={6} sm={4} md={3} sx={styles.outer}>
              <Box sx={{ ...styles.innerContainer, ...styles.innerContainerHover }}>
                <Box component='img' sx={styles.boxes} src={FIREBASE} />
                <Typography variant='h5' sx={styles.tech}>
                  Firebase
                </Typography>
              </Box>
            </Grid>

          </Grid >
        </Container>
      </Box>
    </>
  )
}

export default Myskills