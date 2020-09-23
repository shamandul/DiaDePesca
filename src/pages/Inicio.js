import React, { Component } from 'react'
import Cabecera from '../componets/Cabecera'

class Inicio extends Component {
    render(){
        return(
            <React.Fragment>
        
                <Cabecera
                    title="Día de Pesca"
                    subtitle="Bienvenidos"
                />
                      
            </React.Fragment>
        )
    }
}
export default Inicio