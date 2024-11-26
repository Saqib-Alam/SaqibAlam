import { Box, Typography } from '@mui/material'
import React from 'react'



const styles = {
  main: {
    position: 'relative',
    left: '0px',
    top: '0px',
    marginTop: "80px"
  },
  background: {
    backgroundColor: '#1E293B',
    display: 'flex',
    justifyContent: 'center'
  },
  content: {
    width: {
      xs: '80%',
      md: '60%'
    },
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
      <Box sx={styles.main}>
        <Box sx={styles.background}>
          <Box sx={styles.content}>
            <Typography sx={styles.title}>
              About Me
            </Typography>

            <Typography variant='p' sx={styles.aboutMe}>
              Hello, everyone! My name is Saqib Alam, and I am a budding software engineer with a strong focus on frontend development. Although I may be at the beginning of my professional journey, I am enthusiastic about leveraging my skills and knowledge to create engaging user interfaces and contribute to exciting projects. <br /><br />

              During my recent internship as a frontend developer, I had the opportunity to work on various projects that helped me gain valuable hands-on experience. I collaborated with a team of experienced professionals and contributed to the development of responsive web applications using HTML, CSS, and JavaScript. <br /><br />

              Throughout my internship, I developed a solid foundation in frontend technologies and gained proficiency in frameworks like React and Angular. I had the chance to translate design mockups into functional interfaces, ensuring a seamless and visually appealing user experience.<br /><br />

              While my experience may be limited, I am eager to continue learning and growing as a software engineer. I am dedicated to staying updated with the latest industry trends, attending workshops and online courses, and actively seeking opportunities to enhance my skills.<br /><br />

              I bring a strong work ethic, a willingness to learn, and a passion for creating impactful software solutions. I am excited to join a team that values collaboration and mentorship, where I can contribute my skills and continue to develop as a frontend developer.<br /><br />

              Thank you for considering my profile, and I would love to connect and discuss how my enthusiasm and dedication can add value to your organization. Let's work together to build exceptional user experiences and drive innovation in the field of frontend development.<br /><br />
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default About