import React from 'react'
import { Box, Typography, Grid, Button } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import '../App.css'

// const drawerWidth = 240;
const socialIcons = [{
    icon: <LinkedInIcon />,
    link: 'https://www.linkedin.com/in/saqib-alam-b53a85224',
},
{
    icon: <WhatsAppIcon />,
    link: 'https://wa.me/03092586626',
}];

const styles = {
    container: {
        padding: '20px 40px',
        backgroundColor: '#1E293B',
        borderTop: '2px solid #0E1525   '

    },
    footerlogo: {
        color: '#F97316',
        fontWeight: '900',
        textAlign: { xs: 'center', md: 'start' },
        fontFamily: 'Dancing Script',
        fontSize: '2rem'
    },
    text: {
        color: '#fff',
        fontSize: '1em',
        textAlign: 'center'
    },
    icons: {
        color: '#fff',
        margin: '0px 15px'
    }
}

const Footer = () => {
    return (
        <>
            {/* <AppBar>
            <Toolbar> */}
            <Box sx={styles.container}>
                <Grid container spacing={2}>
                    <Grid item md={4} xs={12}>
                        <Typography
                            variant="h5"
                            component="div"
                            sx={
                                styles.footerlogo
                            }
                        >
                            &lt;Saqib Alam/&gt;
                        </Typography>
                    </Grid>
                    <Grid item md={4} xs={12}>
                        <Box align="center">
                            {socialIcons.map((item) => (
                                <Button target="_blank" href={item.link} key={item.link} sx={styles.icons}>
                                    {item.icon}
                                </Button>
                            ))}
                            {/* </Box> */}
                        </Box>
                    </Grid>
                    <Grid item md={4} xs={12}>
                        <Typography variant='h6' sx={styles.text}>
                            &copy; Copyright 2023 <Typography sx={{ color: '#F97316' }} component='span'>Saqib Alam.</Typography> All Rights Reserved.
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
            {/* </Toolbar>
          </AppBar> */}
        </>
    )
}


export default Footer;