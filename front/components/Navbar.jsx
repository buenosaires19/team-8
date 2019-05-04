import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar">
            <div>
                <Link to='/' className='linkText' style={{ 'textDecorationLine': 'none' }} >Inicio</Link>
            </div>
            <div>
                <a href='http://proyectos.chicasentecnologia.org/mujeresensteam' className='linkText' style={{ 'textDecorationLine': 'none' }} > Sobre la Campaña </a>
            </div>
            <div>
            <a href='https://proyectos.chicasentecnologia.org' className='linkText' style={{ 'textDecorationLine': 'none' }}>Proyectos</a>
            </div>
            <div>
                <a href='https://www.chicasentecnologia.org/' className='linkText' style={{ 'textDecorationLine': 'none' }} > Chicas en Tecnologia </a>
            </div>
        </div>
    )



}


export default Navbar;