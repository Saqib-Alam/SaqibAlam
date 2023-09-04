import { Box, Typography, Button, ButtonGroup, Container } from '@mui/material';
import React from 'react'
import backgroundImage from '../Assets/images/header-bg.jpg'
import '../App.css';
import { useState, useEffect } from 'react';
import { Buttons } from './buttons';

const texts = ['Software Engineer', 'Frontend Developer']; // Array of texts to cycle through

const textChangingAnimation = {
  text: {
    animation: 'fade-in-out 1s ease-in-out infinite',
    color: '#F97316',
    fontSize: '1em',
    fontWeight: 'bold'
  },
};


const styles = {
  container: {
    width: '100%',
    height: '100vh',
    backgroundColor: '#000000',
    zIndex: 1,
  },

  greeting: {
    color: '#ffffff',
    fontSize: {
      md: '1.2em',
      sm: '1em',
      xs: '0.7em',

    },
    letterSpacing: '4px',
  },
  intro: {
    color: '#fff',
    fontSize: {
      md: '3.5em',
      sm: '2.6em',
      xs: '1.5em',

    },
    fontWeight: 'bold',
    lineHeight: '1.5em',
  
  },

  content: {
    zIndex: 1,
    width: '100%',
    height: '100%',
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    opacity: 0.7,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',

  },
  button: {
    border: '1px solid #ccc',
    padding: '12px 34px',
    borderRadius: '50px',
    color: '#fff',
    fontSize: {
      // md: '1em',
      // sm: '0.8em',
      // xs: '0.7em',

    },
    fontWeight: 'bold',
    marginTop: '10px',
    marginRight: '10px'
  },
};
const Header = () => {

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 1500); // Change the text every 2 seconds

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <Box sx={styles.container}>
        <Box sx={styles.background} />
        <Box sx={styles.content}>
          <Container>
            <Typography sx={styles.greeting} variant='h5'>
              HELLO WORLD!
            </Typography>
            <Typography sx={styles.intro} variant='h3'>
              I'm Saqib Alam.
            </Typography>
            <Typography variant='h3' sx={styles.intro}>
              I am a <Typography component="span" sx={textChangingAnimation.text}>{texts[currentIndex]}.</Typography>
            </Typography>
            <Typography sx={styles.intro} variant='h3'>
              from Karachi, Pakistan.
            </Typography>

            <Box>
              <Buttons sx={styles.button} text="Download Resume" />
              <Buttons sx={styles.button} text="Contact Me" />
            </Box>
            {/* <Button variant="outlined">Contact Us</Button> */}
          </Container>
        </Box>
      </Box>
    </>
  )
}

export default Header;