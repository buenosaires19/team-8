import React from "react";
import { Link } from 'react-router-dom'

export default () => (
    <div id='gridHeader'>
        <div><h1 style={{
                color:'#6102A3', 
                fontFamily: '"Caveat Brush", cursive',
                padding: '25px',
                }}><strong>Grandes Mujeres</strong> - Este mes es de las Mujeres en Biología! </h1></div>
        <div style={{textAlign:'right', paddingRight:'10px'}}><Link to='/formRegister'><button id='botonEstilo'><strong> POSTULA! </strong></button></Link></div>
    </div>
)