import { createContext, useEffect, useState } from "react";

export const PizzasContext = createContext();

const PizzasProvider = ({children}) => {
    const [pizzas, setPizzas] = useState([]);
    const [carrito, setCarrito] = useState([])
    
    //FUNCIONES PARA OBTENER LAS PIZZAS
    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    const getData = async() => {
        try{
            const data = await fetch('/pizzas.json')
            const response = await data.json()

            const capitalizedPizzas = response.map(pizza => ({
                ...pizza,
                name: capitalizeFirstLetter(pizza.name),
                ingredients: pizza.ingredients.map(ingredient => capitalizeFirstLetter(ingredient))
            }))

            setPizzas(capitalizedPizzas)
        }catch(error){
            console.log('error')
        }
    }

    useEffect(() => {
        getData()
    }, [])

    //FUNCION PARA CARRITO
    const addToCart = ({ id, price, name, img}) => {
        const productoEncontradoIndex = carrito.findIndex((p) => p.id === id);
        const producto = { id, price, name, img, count:1 };

        if(productoEncontradoIndex >= 0) {
            carrito[productoEncontradoIndex].count++;
            setCarrito([...carrito]);
        } else {
            setCarrito([...carrito, producto]);
        }
    };

    const increment = (i) => {
        carrito[i].count++;
        setCarrito([...carrito]);
    }

    const decrement = (i) => {
        const { count } = carrito[i];
        if(count === 1){
            carrito.splice(i,1);
        }else{
            carrito[i].count--;
        }
        setCarrito([...carrito]);
    }

    return (
        <PizzasContext.Provider value = {{pizzas, setPizzas, carrito, setCarrito, addToCart,increment, decrement}} >
            {children}
        </PizzasContext.Provider>
    )
}

export default PizzasProvider;