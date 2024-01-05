import { Route, Routes } from "react-router-dom"
import { Rooms } from "../Rooms/Rooms";
import { Winery } from "../Winery/Winery";
import { Events } from "../Events/Events";
import { Home } from "../Home/Home";
import { Menu } from "../shared/Menu/Menu";
import { Footer } from "../shared/Footer/Footer";
import { Restaurant } from "../Restaurant/Restaurant";
export function Ruta(){
    return(
        <>
        <Menu/>
        
        <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/rooms" element={<Rooms />}/>
        <Route path="/winery" element={<Winery />}/>
        <Route path="/events" element={<Events />}/>
        <Route path="/restaurant" element={<Restaurant />}/>
        
        </Routes>
            
        <Footer/>
        </>
    )
}