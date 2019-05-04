import React from 'react'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'

import { Link } from 'react-router-dom';

const Destacada = () => {
	return (
        <div className = 'divDestacada'>
        <Image src='https://proyectos.chicasentecnologia.org/mujeresensteam/assets/images/virginia-albarracin.jpg' className = 'image' roundedCircle />
        <div className = 'text'>
        <h1 className = 'name'>Virginia Albarracin</h1>
        <h4 className ='field'>Microbiología</h4>
        <h3 className = 'quote'>"Haciendo ciencia e investigando sobre la vida de organismos vivos me siento una chica superpoderosa también!"</h3>
        <div id='button'><Link to='/singleParticipant' style={{ 'textDecorationLine': 'none' }}><Button variant="outline-primary" id = 'button'>CONOCELA!</Button></Link></div>
        </div>
        </div>
        
    )


}


export default Destacada;