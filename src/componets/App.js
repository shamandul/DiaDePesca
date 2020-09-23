import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'

import Inicio from '../pages/Inicio'


function App(){
    return(
        <BrowserRouter>
            <Route exact path="/" component={ Inicio }/>
            
        </BrowserRouter>
    )
}
export default App