import React, { Component } from 'react'
import Cabecera from '../componets/Cabecera'
import Navegador from '../componets/Navegador'

class Contacto extends Component {
    render(){
        return(
            <React.Fragment>
                <Navegador/>
                <Cabecera
                    title="Día de Pesca"
                    subtitle="Contacto"
                />
                      
            </React.Fragment>
        )
    }
}
export default Contacto