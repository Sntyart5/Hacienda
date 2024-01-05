import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Home } from './components/Home/Home'
import { Footer } from './components/shared/Footer/Footer'
import { Menu } from './components/shared/Menu/Menu'
import { Location } from './components/Location/Location'
import { Services } from './components/Services/Services'
import { Bienvenida } from './components/Bienvenida/Bienvenida'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import 'animate.css';
import 'swiper/css';

import { BrowserRouter } from "react-router-dom"
import { Ruta } from './components/Routers/Routers'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Ruta />
    </BrowserRouter>
  </React.StrictMode>,
)
