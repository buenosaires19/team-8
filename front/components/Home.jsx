import React from 'react';

import BtnPost from './headerBtn';
import Destacada from './Destacada';
import HomeCalendar from './formCalendar';
import Finalistas from './Finalistas';



const Home = () => {
    return (
        <div>
            <BtnPost />
            <Destacada />
            <Finalistas/>
            <HomeCalendar />

        </div>
    )
}

export default Home;