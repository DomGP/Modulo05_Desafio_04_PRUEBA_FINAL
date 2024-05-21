import { createContext, useEffect, useState } from "react";

export const PizzasContext = createContext();

const PizzasProvider = ({children}) => {
    const [pizzas, setPizzas] = useState([])
    
    const getData = async() => {
        const data = await fetch('/pizzas.json')
        const response = await data.jason()
        setPizzas(response)
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