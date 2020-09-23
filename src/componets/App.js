import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'

import Inicio from '../pages/Inicio'
import Gestion from '../pages/Gestion'
import Historial from '../pages/Historial'
import About from '../pages/About'
import Contacto from '../pages/Contacto'


function App(){
    return(
        <BrowserRouter>
            <Route exact path="/" component={ Inicio }/>
            <Route exact path="/gestion" component={ Gestion }/>
            <Route exact path="/historial" component={ Historial }/>
            <Route exact path="/about" component={ About }/>
            <Route exact path="/contacto" component={ Contacto }/>
            
        </BrowserRouter>
    )
}
export default App