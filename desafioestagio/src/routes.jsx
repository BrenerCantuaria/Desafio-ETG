import { BrowserRouter, Routes,Route } from "react-router-dom"
import Inicio from './pages/Inicio'
import Pokemons from "./pages/Pokemons"

function AppRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Inicio/>}> </Route>
                <Route path="/Pokemons" element={<Pokemons/>}> </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes