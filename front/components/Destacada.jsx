import React from 'react'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'

const Destacada = () => {
	return (
        <div className = 'divDestacada'>
        <Image src='https://proyectos.chicasentecnologia.org/mujeresensteam/assets/images/virginia-albarracin.jpg' roundedCircle />
        <div className = 'text'>
        <h1 className = 'name'>Virginia Albarracin</h1>
        <h4 className ='field'>Microbiología</h4>
        <h3 className = 'quote'>"Haciendo ciencia e investigando sobre la vida de organismos vivos me siento una chica superpoderosa también!"</h3>
        <Button variant="outline-primary" id = 'button'>CONOCELA!</Button>
        </div>
        </div>
        
    )


}


export default Destacada;