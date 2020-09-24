import React, { Component } from 'react'
import Cabecera from '../componets/Cabecera'
import Navegador from '../componets/Navegador'
import '../styles/inicio.css'
import imagen from '../images/espigon.jpg'

class Inicio extends Component {
    render(){
        return(
            <React.Fragment>
                <Navegador/>
                <Cabecera
                    title="Día de Pesca"
                    subtitle="Bienvenidos"
                    img = {imagen}
                />
                      
            </React.Fragment>
        )
    }
}
export default Inicio