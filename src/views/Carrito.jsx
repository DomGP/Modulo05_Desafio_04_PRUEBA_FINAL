import React from 'react'
import { useContext } from 'react'
import { PizzasContext } from '../context/PizzasContext'
import { useNavigate } from 'react-router-dom';

//MATERIAL
import Button from '@mui/material/Button';
import { List, ListItem, Typography, ListItemIcon, ListItemText } from '@mui/material'

//ICONS
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LocalPizzaIcon from '@mui/icons-material/LocalPizza';

const Carrito = () => {

  const { carrito, increment, decrement } = useContext(PizzasContext)
  const total = carrito.reduce((a, pizza) => a + pizza.price * pizza.count, 0);
  const navigate = useNavigate()
  
  return (
    <div className='container_detalle'>
      <div className='carrito_style'>
        <h4>Detalles del Pedido:</h4>
        <div className='list_style'>
          {carrito.map((pizza, i) => (
            <div
                key={i}
                className='flex_styleCarrito'
              >
                <div className="first_style">
                  <img
                    src={pizza.img}
                    width="100"
                    alt=""
                    
                  />
                  <Typography 
                    sx={{mt:3}}
                    >{pizza.name}</Typography>
                </div>

                <div className="second_style">
                  <Typography sx={{mt:4}}>
                    ${(pizza.price * pizza.count).toLocaleString("de-DE")}
                  </Typography>
                  <Button
                    variant='contained'
                    color='error'
                    sx={{mt:3, mb:3, ml:1}}
                    onClick={() => decrement(i)}
                  >
                    -
                  </Button>
                  <Typography 
                    sx={{mt:4, mr:1, ml:1, fontWeight:'bold'}}>{pizza.count}</Typography>
                  <Button
                    variant='contained'
                    sx={{mt:3, mb:3}}
                    onClick={() => increment(i)}
                  >
                    +
                  </Button>
                </div>
              </div>
          ))}
          <Typography
            sx={{
              mt:2,
              fontSize:20,
              fontWeight:'bold'
            }}>Total: ${(total.toLocaleString("de-DE"))}</Typography>
            <Button
            variant='contained'
            color='success' 
            sx={{mt:1}}
            onClick={()=>navigate("/")}>Ir a Pagar</Button>
        </div>
      </div>
    </div>
  )
}

export default Carrito