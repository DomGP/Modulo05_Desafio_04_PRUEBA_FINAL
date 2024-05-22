import React from 'react'
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

/* import { useContext } from 'react';
import { PizzasContext } from '../context/PizzasContext'; */

const CardPizza = ({pizza}) => {

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
            ${pizza.price}
            </Typography>
        </CardContent>
        <CardActions 
            sx={{
                justifyContent:'space-between',
                mr:3,
                ml:3
            }}>
            <Button 
                variant='contained'
                color='info'>Ver más <VisibilityIcon sx={{ml:1}}/></Button>
            <Button 
                variant='contained'
                color='error'>Añadir <ShoppingCartIcon sx={{ml:1}}/></Button>
        </CardActions>
    </Card>
            
    )
}

export default CardPizza