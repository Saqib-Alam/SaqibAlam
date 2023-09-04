import React from 'react'
import Header from '../components/header'
import Myskills from '../components/myskills'
import { Box, Typography } from '@mui/material'
import '../App.css';
import About from '../components/about'
import Projects from './project'


const Home = () => {
  return (
    <>
        <Header />
        <About/>
        <Myskills/>
        <Projects/>
    </>
  )
}

export default Home