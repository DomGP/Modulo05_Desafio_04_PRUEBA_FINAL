import React from 'react'
import { useState, useContext, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { PizzasContext } from '../context/PizzasContext';

//MATERIAL
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';

//ICONS
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LocalPizzaIcon from '@mui/icons-material/LocalPizza';
import VisibilityIcon from '@mui/icons-material/Visibility';

const CardPizza = ({pizza}) => {

    const navigate = useNavigate();
    const { addToCart } = useContext(PizzasContext)

    const pizzaDetalle = () => {
        const pizzaNameUrl = pizza.name.replace(/\s+/g, '-').toLowerCase();
        navigate(`/pizza/${pizzaNameUrl}`)
    }

    return (
        <Card 
        sx={{ width: 400 }}>
        <CardMedia
            sx={{ height: 200 }}
            image={pizza.img}
            title="pizzas"
        />
        <CardContent>
            <Typography 
                gutterBottom variant="h5" 
                component="div"
                sx={{
                    textAlign:'start',
                    fontSize:25,
                }}>
            {pizza.name}
            </Typography>
            <hr className='hr_card'/>
            <Typography
                sx={{
                        textAlign:'start',
                        fontWeight:'bold',
                        fontSize:15
                    }}>
                Ingredientes:
            </Typography>
            <List>
                {
                    pizza.ingredients.map((ingredient, index) => (
                        <ListItem key={index}>
                            <ListItemIcon sx={{minWidth:30}}>
                                <LocalPizzaIcon />
                            </ListItemIcon>
                            <ListItemText primary={ingredient}/>
                        </ListItem>
                    ))
                }
            </List>
            <hr className='hr_card'/>
            <Typography 
                color="text.dark"
                sx={{
                    fontSize:25,
                    mt:3
                }}>
            ${pizza.price.toLocaleString("de-DE")}
            </Typography>
        </CardContent>
        <CardActions 
            sx={{
                justifyContent:'space-between',
                mr:3,
                ml:3
            }}>
            <Button
                onClick={pizzaDetalle}
                variant='contained'
                color='info'>Ver más <VisibilityIcon sx={{ml:1}}/></Button>
            <Button 
                onClick={() => addToCart(pizza)}
                variant='contained'
                color='error'>Añadir <ShoppingCartIcon sx={{ml:1}}/></Button>
        </CardActions>
    </Card>
            
    )
}

export default CardPizza;