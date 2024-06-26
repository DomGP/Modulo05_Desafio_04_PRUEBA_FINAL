import React from 'react'
import CardPizza from '../components/CardPizza'
import { PizzasContext } from '../context/PizzasContext'
import { useContext } from 'react'


const Home = () => {

    const {pizzas} = useContext(PizzasContext)

    return (
        <div className='home_style'>
            <div className='banner_style'>
                <h1>¡Pizzería Mamma Mia!</h1>
                <h5>¡Tenemos las mejores pizzas que podrás encontrar!</h5>
                <div className='hr_style'></div>
            </div>
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