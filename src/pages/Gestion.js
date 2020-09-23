import React, { Component } from 'react'
import Cabecera from '../componets/Cabecera'
import Navegador from '../componets/Navegador'

class Gestion extends Component {
    render(){
        return(
            <React.Fragment>
                <Navegador/>
                <Cabecera
                    title="Día de Pesca"
                    subtitle="Gestión"
                />
                      
            </React.Fragment>
        )
    }
}
export default Gestion