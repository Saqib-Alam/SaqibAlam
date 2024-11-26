import React, { useState } from "react";
import {
  Box,
  Grid,
  Typography,
  List,
  ListItem,
  ListItemText,
  Container,
} from "@mui/material";
import { Buttons, Links } from "../components/buttons";
import "../App.css";
import { useParams } from "react-router-dom";

const styles = {
  container: {
    margin: "80px 50px",
  },

  title: {
    color: "#fff",
    fontSize: {
      xs: "2rem",
      md: "3rem",
    },
    fontWeight: "bold",
    lineHeight: "2em",
  },
  descript: {
    color: "#fff",
    fontSize: "1em",
    lineHeight: "1.5em",
    fontWeight: "500",
  },
  tech: {
    color: "#fff",
    fontSize: "2rem",
    fontWeight: "bold",
    lineHeight: "2.5em",
  },
  technologies: {
    display: "flex",
  },
  img: {
    width: "80%",
    borderRadius: "8px",
  },
  techImgBox: {
    width: "4em",
    backgroundColor: "#162445",
    margin: "5px",
    padding: "15px",
    borderRadius: "8px",
  },
  techImg: {
    width: "100%",
  },

  screenshots: {
    width: "100%",
    borderRadius: "8px",
    // margin: '20px',
  },
  list: {
    padding: "0px",
  },
  listitem: {
    padding: "0px 16px",
    color: "#fff",
  },
  btnBox: {
    marginTop: "20px",
  },
  button: {
    border: "1px solid grey",
    padding: "12px 40px",
    borderRadius: "50px",
    color: "#fff",
    fontWeight: "bold",
    marginTop: "10px",
    marginRight: "10px",
    textDecoration: "none",
    transition: "transform 0.3s ease",
    "&:hover": {
      backgroundColor: "#EA580C",
      border: "none",
      transform: "scale(1.1)",
    },
  },
};

const Projectview = () => {
  // const [projectDetails, setprojectDetails] = useState(
  const projectDetails = {
    saqib: {
      title: "Saqib Alam",
      description:
        "Welcome to my developer portfolio! This Section Houses the details for my personal portfolio website, where I showcase my skills, projects, and expertise as a developer.",
      logo: "/images/saqibalam/saqiblogo.png",
      screenshots: [
       { SS: "/images/saqibalam/saqibSS1.png"},
       { SS: "/images/saqibalam/saqibSS2.png"},
       { SS: "/images/saqibalam/saqibSS3.png"},
       { SS: "/images/saqibalam/saqibSS4.png"},
    ],
      techUsed: [
        {name: "react", src: "/images/skills/reactjs.png"},
       {name: "mui", src: "/images/skills/mui.png"},
      ],
      details:
        "I have made this website to showcase my projects and to stand out. I'm always excited to connect, collaborate, and receive feedback. Whether you have questions, suggestions, or just want to say hi, don't hesitate to reach out: Email: saqibalam64@gmail.com",
      githubCode: "https://github.com/Saqib-Alam/SaqibAlam",
      hosting: "https://saqibalam-98b17.web.app",
    },
    healdom: {
      title: "Healdom",
      description:
        "A clone of e-commerce website built using WordPress, inspired by a professional design. This project showcases my ability to replicate modern layouts, customize themes, and create responsive web designs for practice purposes.",
      logo: "/images/healdom/healdomlogo.png",
      screenshots: [
       { SS: "/images/healdom/healdomSS1.png"},
       { SS: "/images/healdom/healdomSS2.png"},
       { SS: "/images/healdom/healdomSS3.png"},
       { SS: "/images/healdom/healdomSS4.png"},
       { SS: "/images/healdom/healdomSS5.png"},
       { SS: "/images/healdom/healdomSS6.png"},
      ],
      techUsed: [
        {name: "wordpress", src: "/images/skills/wordpresslogo.png"},
      ],
      details: "A responsive and visually appealing landing page.",
      githubCode: "",
      hosting: "https://healdomnutritions.42web.io/",
    },
    realstate: {
      title: "Realstate",
      description:
        "A responsive and visually appealing landing page created using HTML, CSS, and Bootstrap. This project is a practice implementation based on a Figma design to enhance front-end development skills.",
      logo: "/images/realstate/realstatelogo.png",
      screenshots: [
       { SS: "/images/realstate/realstateSS1.png"},
       { SS: "/images/realstate/realstateSS2.png"},
       { SS: "/images/realstate/realstateSS3.png"},
       { SS: "/images/realstate/realstateSS4.png"},
       { SS: "/images/realstate/realstateSS5.png"},
      ],
      techUsed: [
        {name: "html", src: "/images/skills/html.png"},
        {name: "css",src : "/images/skills/css.png"},
        {name:"bootstrap", src: "/images/skills/bootstrap.svg"},
      ],
      details: "A responsive and visually appealing landing page.",
      githubCode: "https://github.com/Saqib-Alam/realstate",
      hosting: "https://realstate-1d84f.web.app/",
    },
    softite: {
      title: "Softite",
      description:
        "Softite is softite LLC Clone made with HTML, CSS, Bootstrap for practice purpose",
      logo: "/images/softite/softitelogo.png",
      screenshots: [
       { SS: "/images/softite/softiteSS1.png"},
       { SS: "/images/softite/softiteSS2.png"},
       { SS: "/images/softite/softiteSS3.png"},
       { SS: "/images/softite/softiteSS4.png"},
      ],
      techUsed: [
       {name: "html", src: "/images/skills/html.png"},
       {name: "css", src: "/images/skills/css.png"},
       {name: "bootstrap", src: "/images/skills/bootstrap.svg"},
    ],
      details: "A responsive and visually appealing landing page.",
      githubCode: "https://github.com/Saqib-Alam/softite",
      hosting: "https://softite-885d7.web.app",
    },
    motorsport: {
      title: "MotorSport",
      description:
        "MotorSport is MotorSportPakistan Clone made with HTML, CSS, Bootstrap for practice purpose",
      logo: "/images/motorsport/motorsportlogo.png",
      screenshots: [
        { SS: "/images/motorsport/motorsportSS1.png"},
        { SS: "/images/motorsport/motorsportSS2.png"},
        { SS: "/images/motorsport/motorsportSS3.png"},
        { SS: "/images/motorsport/motorsportSS4.png"},
        { SS: "/images/motorsport/motorsportSS5.png"},
      ],
      techUsed: [
       {name: "html", src: "/images/skills/html.png"},
       {name: "css", src: "/images/skills/css.png"},
       {name: "bootstrap", src: "/images/skills/bootstrap.svg"},
      ],
      details: "A responsive and visually appealing landing page.",
      githubCode: "https://github.com/Saqib-Alam/motorsport",
      hosting: "https://motorsport-68a44.web.app",
    },
  };
  // )

  const { projectName } = useParams();
  const project = projectDetails[projectName];

  if (!project) {
    return <div>Project not found.</div>;
  }

  return (
    <>
      <Box sx={styles.container}>
        <Box>
          <Grid container>
            <Grid item md={7}>
              <Typography variant="h3" sx={styles.title}>
                {project.title}
              </Typography>

              <Typography variant="p" sx={styles.descript}>
                {project.description}
              </Typography>
            </Grid>

            <Grid item md={5}>
              <Box component="img" sx={styles.img} src={project.logo} />
            </Grid>
          </Grid>
        </Box>
        {/* ......... */}
        <Box>
          <Typography variant="h3" sx={styles.tech}>
            Technologies
          </Typography>

          <Grid container spacing={2}>
           {project.techUsed.map((item) =>(
            <Grid key={item.name} item md={1}>
            <Box
              component="img"
              sx={styles.techImgBox}
              src={item.src}
            />
          </Grid>
           ))}
            {/* <Grid item md={1}>
              <Box
                component="img"
                sx={styles.techImgBox}
                src={project.techUsed.css}
              />
            </Grid>
            <Grid item md={1}>
              <Box
                component="img"
                sx={styles.techImgBox}
                src={project.techUsed.bootstrap}
              />
            </Grid> */}
          </Grid>
        </Box>
        {/* ........ */}
        <Box>
          <Typography variant="h3" sx={styles.tech}>
            Screenshot
          </Typography>

          <Grid container spacing={2}>
          {project.screenshots.map((item) =>(
            <Grid key={item.name} item md={4}>
              <Box
                component="img"
                sx={styles.screenshots}
                src={item.SS}
              />
            </Grid>))}
            {/* <Grid item md={4}>
              <Box
                component="img"
                sx={styles.screenshots}
                src={project.screenshots.SS2}
              />
            </Grid>
            <Grid item md={4}>
              <Box
                component="img"
                sx={styles.screenshots}
                src={project.screenshots.SS3}
              />
            </Grid>
            <Grid item md={4}>
              <Box
                component="img"
                sx={styles.screenshots}
                src={project.screenshots.SS4}
              />
            </Grid> */}
          </Grid>
        </Box>

        {/* Features */}
        <Box>
          <Typography variant="h3" sx={styles.tech}>
            Details
          </Typography>
          <List sx={styles.list}>
            <ListItem sx={styles.listitem}>
              <ListItemText primary={project.details} />
            </ListItem>
          </List>
        </Box>
        <Box sx={styles.btnBox}>
          <Buttons
            sx={styles.button}
            href={project.githubCode}
            text="GET CODE"
          />
          <Buttons
            sx={styles.button}
            target="_blank"
            href={project.hosting}
            text="VISIT ONLINE"
          />
        </Box>
      </Box>
      {/* )) */}
      {/* } */}
    </>
  );
};

export default Projectview;
