import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import LocalPizzaIcon from '@mui/icons-material/LocalPizza';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Nav = () => {

    return (
        <Box sx={{ flexGrow: 1 }}>
        <AppBar 
            position="static"
            color='info'>
            <Toolbar>
            <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
            >
                <MenuIcon 
                sx = {{}}/>
            </IconButton>
            <LocalPizzaIcon
                sx={{mr:1}} />
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                
                Pizzería Mamma Mia!
            </Typography>
            <Button color="inherit">
                <ShoppingCartIcon sx={{mr:1}} />
                $0</Button>
            </Toolbar>
        </AppBar>
        </Box>
    )
}

export default Nav