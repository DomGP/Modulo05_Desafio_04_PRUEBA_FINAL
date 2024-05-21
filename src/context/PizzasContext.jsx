import { createContext, useEffect, useState } from "react";

export const PizzasContext = createContext();

const PizzasProvider = ({children}) => {
    const [pizzas, setPizzas] = useState([])
    
    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const getData = async() => {
        try{
            const data = await fetch('/pizzas.json')
            const response = await data.json()

            const capitalizedPizzas = response.map(pizza => ({
                ...pizza,
                name: capitalizeFirstLetter(pizza.name)
            }))

            setPizzas(capitalizedPizzas)
        }catch(error){
            console.log('error')
        }
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <PizzasContext.Provider value = {{pizzas, setPizzas}} >
            {children}
        </PizzasContext.Provider>
    )
}

export default PizzasProvider;