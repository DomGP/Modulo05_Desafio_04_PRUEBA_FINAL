import React from 'react'
import CardPizza from '../components/CardPizza'
import { PizzasContext } from '../context/PizzasContext'
import { useContext } from 'react'


const Home = () => {

    const {pizzas} = useContext(PizzasContext)

    return (
        <div className='home_style'>
            <h1>¡Pizzería Mamma Mia!</h1>
            <h5>¡Tenemos las mejores pizzas que podrás encontrar!</h5>
            <hr />
            <div className="container">
                {
                    pizzas && pizzas.map(pizza => (
                        <CardPizza pizza={pizza} key={pizza.id} />
                    ))
                }
            </div>
        </div>
    )
    }

export default Home