import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar">
            <div>
                <Link to='/' className='linkText' style={{ 'textDecorationLine': 'none' }} >Home</Link>
            </div>
            <div>
                <Link to='/about' className='linkText' style={{ 'textDecorationLine': 'none' }} > Sobre la Campaña </Link>
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