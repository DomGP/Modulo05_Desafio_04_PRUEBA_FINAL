import React from 'react';
import { useContext } from 'react';
import { PizzasContext } from '../context/PizzasContext';
import { Link, useNavigate } from 'react-router-dom';

//MATERIAL
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
    const {carrito} = useContext(PizzasContext)
    const total = carrito.reduce((a, {count, price}) => a + price * count, 0);

    const navigate = useNavigate();
    const cartView = () => {
        navigate('/carrito')
    }

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
                component={Link}
                to='/comodin'
            >
                <MenuIcon 
                sx = {{}}/>
            </IconButton>
            <LocalPizzaIcon
                sx={{mr:1}} />
            <Typography 
                component={Link}
                className='title_nav'
                to='/'
                variant="h6" 
                sx={{ flexGrow: 1 }}>
                Pizzería Mamma Mia!
            </Typography>
            <Button 
                onClick={cartView}
                color="inherit">
                <ShoppingCartIcon sx={{mr:1}} />
                Total: ${ total.toLocaleString("de-DE")}
            </Button>
            </Toolbar>
        </AppBar>
        </Box>
    )
}

export default Nav