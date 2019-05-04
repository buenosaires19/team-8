import React from 'react';

import BtnPost from './headerBtn';
import Destacada from './Destacada';
import HomeCalendar from './formCalendar';
import Finalistas from './Finalistas';
import Navbar from './Navbar'

const Home = () => {
    return (
        <div>
            <Navbar/>
            <BtnPost />
            <Destacada />
            <Finalistas/>
            <HomeCalendar />
        </div>
    )
}

export default Home;