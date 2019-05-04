import React from 'react';

import BtnPost from './headerBtn';
import Destacada from './Destacada';
import HomeCalendar from './formCalendar';
import Finalistas from './Finalistas';
import Footer from './footer'
import Navbar from './Navbar'


const Home = () => {
    return (
        <div>
            <Navbar/>
            <BtnPost />
            <Destacada />
            <Finalistas/>
            <HomeCalendar />
            <Footer/>
        </div>
    )
}

export default Home;