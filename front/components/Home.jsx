import React from 'react';

import BtnPost from './headerBtn';
import Destacada from './Destacada';
import HomeCalendar from './formCalendar';
import Finalistas from './Finalistas';
import Footer from './footer'

const Home = () => {
    return (
        <div>
            <BtnPost />
            <Destacada />
            <Finalistas/>
            <HomeCalendar />
            <Footer/>
        </div>
    )
}

export default Home;