import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import HTML from '../Assets/skills/html.png'
import CSS from '../Assets/skills/css.png'
import JS from '../Assets/skills/js.png'
import BOOTSTRAP from '../Assets/skills/bootstrap.svg'
import REACTJS from '../Assets/skills/reactjs.png'
import GITHUB from '../Assets/skills/github.png'
import FIREBASE from '../Assets/skills/firebase.png'
import VSCODE from '../Assets/skills/VSCode.webp'
import MUI from '../Assets/skills/mui.svg'


const styles = {
  main: {
    backgroundColor: '#01041c',
    color: '#ffffff',
    flexGrow: 1

  },
  boxes: {
    width: '80px'
  },
  outer: {
    display: 'flex',
    justifyContent: 'center',
  },
  innerContainer: {
    backgroundColor: '#010314',
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
    '&:hover':{
      transform: 'scale(1.1)'
    }
  },
}



const Skills = () => {
  return (
    <>
      <Box sx={styles.main}>
        <Grid spacing={6} container sx={styles.grid}>
          <Grid item md={12}>
            <Typography variant='h3' sx={{fontWeight: 'bold', mt: '20px'}} align='center'>
              My Skills
            </Typography>
          </Grid>

          <Grid item xs={6} sm={4} md={3} sx={styles.outer}>
            <Box sx={{...styles.innerContainer, ...styles.innerContainerHover}}>
              <Box component='img' sx={styles.boxes} src={VSCODE} />
              <Typography>
                VS Code
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={6} sm={4} md={3} sx={styles.outer}>
            <Box sx={{...styles.innerContainer, ...styles.innerContainerHover}}>
              <Box component='img' sx={styles.boxes} src={HTML} />
              <Typography>
                HTML
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={6} sm={4} md={3} sx={styles.outer}>
            <Box sx={{...styles.innerContainer, ...styles.innerContainerHover}}>
              <Box component='img' sx={styles.boxes} src={CSS} />
              <Typography>
                CSS
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={6} sm={4} md={3} sx={styles.outer}>
            <Box sx={{...styles.innerContainer, ...styles.innerContainerHover}}>
              <Box component='img' sx={styles.boxes} src={BOOTSTRAP} />
              <Typography>
                Bootstrap
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={6} sm={4} md={3} sx={styles.outer}>
            <Box sx={{...styles.innerContainer, ...styles.innerContainerHover}}>
              <Box component='img' sx={styles.boxes} src={JS} />
              <Typography>
                JavaScript
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={6} sm={4} md={3} sx={styles.outer}>
            <Box sx={{...styles.innerContainer, ...styles.innerContainerHover}}>
              <Box component='img' sx={styles.boxes} src={REACTJS} />
              <Typography>
                React JS
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={6} sm={4} md={3} sx={styles.outer}>
            <Box sx={{...styles.innerContainer, ...styles.innerContainerHover}}>
              <Box component='img' sx={styles.boxes} src={MUI} />
              <Typography>
                Material UI
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={6} sm={4} md={3} sx={styles.outer}>
            <Box sx={{...styles.innerContainer, ...styles.innerContainerHover}}>
              <Box component='img' sx={styles.boxes} src={GITHUB} />
              <Typography>
                GitHub
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={6} sm={4} md={3} sx={styles.outer}>
            <Box sx={{...styles.innerContainer, ...styles.innerContainerHover}}>
              <Box component='img' sx={styles.boxes} src={FIREBASE} />
              <Typography>
                Firebase
              </Typography>
            </Box>
          </Grid>

        </Grid >
      </Box>
    </>
  )
}

export default Skills