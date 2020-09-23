import React, { Component } from 'react'
import Cabecera from '../componets/Cabecera'
import Navegador from '../componets/Navegador'

class Historial extends Component {
    render(){
        return(
            <React.Fragment>
                <Navegador/>
                <Cabecera
                    title="Día de Pesca"
                    subtitle="Bienvenidos"
                />
                      
            </React.Fragment>
        )
    }
}
export default Historial