import { Box, Typography } from '@mui/material'
import React from 'react'
import AboutMe from '../components/about'



const styles = {
  main: {
    position: 'relative',
    left: '0px',
    top: '0px'
  },
  background: {
    // position: 'absolute',
    // backgroundColor: '#01041c',
    backgroundColor: '#0E1525',
    display: 'flex',
    justifyContent: 'center'
  },
  content: {
    width: '60%',
    margin: '50px 0px'
  },
  title: {
    color: '#fff',
    fontSize: '2.2em',
    fontWeight: 'bold',
    lineHeight: '1.5em',
    textAlign: 'center',
  },

  aboutMe: {
    color: '#ffffff',
    fontSize: '1rem',
    textAlign: 'justify',
    // letterSpacing: '4px'
  },

}

const About = () => {
  return (
    <>
    <AboutMe/>
    </>
  )
}

export default About