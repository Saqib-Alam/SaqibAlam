import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import '../App.css'

import { NavLink } from 'react-router-dom';

// Icons
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const drawerWidth = 240;

const styles = {
    drawer: {
        color: '#ffffff',
        textAlign: 'center',
        backgroundColor: '#1E253B',
        height: '100%',
        border: 'none'
    },

    list: {
        textAlign: 'center',
        color: '#fff',    
        textDecoration: 'none',                                      
    }
}

const socialIcons = [
    {
        icon: <LinkedInIcon />,
        link: 'https://www.linkedin.com/in/saqib-alam-b53a85224',
    },
    {
        icon: <WhatsAppIcon />,
        link: 'https://wa.me/03092586626',
    }
];

const DrawerAppBar = (props) => {

    const [navItems, setnavItems] = React.useState([{
        name: 'Home',
        path: '/'
    },
    {
        name: 'About',
        path: '/about'
    },
    {
        name: 'Projects',
        path: '/projects'
    },])

    const { windows } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };


    const drawer = (
        <Box onClick={handleDrawerToggle} sx={styles.drawer}>
            {/* <Typography variant="h6" sx={{ my: 2 }}>
                Saqib Alam
            </Typography> */}
            {/* <Divider /> */}
            <List>
                {navItems.map((item) => (
                    <NavLink  className='list' to={item.path}>
                        <ListItem key={item.name} disablePadding>
                        <ListItemButton>
                            <ListItemText sx={styles.list} primary={item.name} />
                        </ListItemButton>
                    </ListItem>
                    </NavLink>
                ))}
            </List>
            <Divider sx={{backgroundColor: '#fff'}} />
            <List>
                {socialIcons.map((item) => (
                    <ListItem key={item.icon} disablePadding>
                        <ListItemButton target='__blank' href={item.link} sx={{ textAlign: 'center' }}>
                            <ListItemText primary={item.icon} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    const [isSolid, setIsSolid] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 0;
            setIsSolid(isScrolled);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const appBarStyles = {
        backgroundColor: isSolid ? '#1E293B' : 'transparent',
        transition: 'background-color 0.3s ease',
        boxShadow: 'none',
    };

    const container = windows !== undefined ? () => windows().document.body : undefined;
    return (
        <Box>

            <AppBar position="fixed" sx={{ padding: '10px' }} style={appBarStyles}>
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { md: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    {/* <Box sx={{backgroundColor: 'grey'}}> */}
                    <Typography
                        variant="h5"
                        component="div"
                        sx={{
                            // color: '#E95000',
                            color: '#F97316',
                            fontWeight: '900',
                            fontFamily: 'Dancing Script',
                            fontSize: '2.5rem',
                            // letterSpacing: '5px'
                        }}
                    >
                        &lt;Saqib Alam/&gt;
                    </Typography>
                    <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                        {navItems.map((item) => (
                            <NavLink to={item.path}>
                                <Button key={item.name} sx={{ color: '#fff',textTransform: "capitalize", fontSize: { md: '16px', sm: '14px' }, mx: { md: '18px', sm: '12px' } }}>
                                    {item.name}
                                </Button>
                            </NavLink>

                        ))}
                    </Box>
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        {socialIcons.map((item) => (
                            <Button target="_blank" href={item.link} key={item.icon} sx={{ color: '#fff', fontSize: { md: '16px', sm: '14px' }, mx: { md: '0px', sm: '4px' } }}>
                                {item.icon}
                            </Button>
                        ))}
                        {/* </Box> */}
                    </Box>
                </Toolbar>
            </AppBar>

            <Box component="nav">
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { sm: 'block', md: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>

        </Box>

    );
};

DrawerAppBar.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default DrawerAppBar;
