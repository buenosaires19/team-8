import React from "react";
import { Link } from 'react-router-dom'

export default () => (
    <div id='gridHeader'>
        <div><h3><strong>Grandes Mujeres</strong> - Este mes es de la Mujeres en Biología! </h3></div>
        <Link to='/formRegister'><button id='botonEstilos'> Postulate! </button></Link>
    </div>
)