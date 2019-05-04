import React from 'react';

import BtnPost from './headerBtn';
import Destacada from './Destacada';
import HomeCalendar from './formCalendar';

const Home = () => {
    return (
        <div>
            <BtnPost />
            <Destacada />
            <HomeCalendar />
        </div>
    )
}

export default Home;