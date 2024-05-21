import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

/* import { useContext } from 'react';
import { PizzasContext } from '../context/PizzasContext'; */

const CardPizza = ({pizza}) => {

    /* const {pizzas} = useContext(PizzasContext) */
    



    return (
        <Card 
        sx={{ maxWidth: 345 }}>
        <CardMedia
            sx={{ height: 140 }}
            image={pizza.img}
            title="green iguana"
        />
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            {pizza.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
            {pizza.price}
            </Typography>
        </CardContent>
        <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
        </CardActions>
    </Card>
            
    )
}

export default CardPizza