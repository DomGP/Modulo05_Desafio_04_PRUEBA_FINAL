import { Routes, Route } from 'react-router-dom'

//COMPONENTS
import Nav from './components/Nav'

//VIEWS
import Home from './views/Home'
import Pizza from './views/Pizza'
import Carrito from './views/Carrito'
import Comodin from './views/Comodin'

//CSS
import './App.css'

function App() {
  

  return (
    <>
      <Nav/>
      <Routes>
        <Route
          path='/'
          element={<Home/>}/>
        <Route
          path='/carrito'
          element={<Carrito/>}/>
        <Route
          path='/pizza/:name'
          element={<Pizza/>}/>
        <Route
          path='/comodin'
          element={<Comodin/>}/>
      </Routes>
    </>
  )
}

export default App
