import React from 'react'
import { useParams } from 'react-router-dom'
import { useContext } from 'react'
import { PizzasContext } from '../context/PizzasContext'

//MATERIAL
import Button from '@mui/material/Button';
import { List, ListItem, Typography, ListItemIcon, ListItemText } from '@mui/material'

//ICONS
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LocalPizzaIcon from '@mui/icons-material/LocalPizza';

const Pizza = () => {
  const {name} = useParams();
  const {pizzas, addToCart} = useContext(PizzasContext);

  const mayusculaInicial = (mayuscula) => {
    return mayuscula.replace(/\b\w/g, letra => letra.toUpperCase());
  }
  
  const pizzaName = mayusculaInicial(name.replace(/-/g, ' '));

  let pizza = pizzas.find((pizza) => pizza.name.toLowerCase() == name.toLowerCase() ); 
 

  return (
    <div className='container_detalle'>
    {pizza ? (
      <div className='flex_style'>
        <img src={pizza.img} alt={pizza.name} />
        <div className='info_style'>
          <Typography variant="h4">
            {pizzaName}
          </Typography>
          <div className='hrInfo'></div>
          <Typography 
            variant="body1">
            {pizza.desc}
          </Typography>
          <Typography 
            variant="body2"
            sx={{
              fontWeight:'bold',
              mt:2
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
          <div className='price_style'>
          <Typography 
            sx={{
              fontWeight:'bold',
              fontSize:30
            }}
            variant="body2">
            Precio: ${pizza.price.toLocaleString("de-DE")}
          </Typography>
          <Button 
                onClick={() => addToCart(pizza)}
                variant='contained'
                color='error'>Añadir <ShoppingCartIcon sx={{ml:1}}/></Button>
          </div>
        </div>
      </div>
    ) : (
      <Typography variant="h2">Cargando...</Typography>
    )}
  </div>
  )
}

export default Pizza;