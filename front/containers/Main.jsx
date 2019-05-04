import React from 'react';

import { Switch, Route } from 'react-router-dom';

import FormPostulacion from '../components/formPostulacion';
import FormCandidata from '../components/formCandidata';
import Home from '../components/Home';
import FormCalendar from '../components/formCalendar'
import SingleCandidate from '../components/SingleCandidate';
import Navbar from '../components/Navbar';

class Main extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                {/* <BtnPost/> */}
                {/* <Home/> */}
                <Switch>
                <Route exact path="/formCandidata" render={({history}) => (<FormCandidata history={history} />)} />
                    <Route exact path="/formRegister" render={({history}) => (<FormPostulacion history={history} />)} />
                    <Route exact path="/" render={() => (<Home />)} />
                    <Route exact path="/formCalendar" render={() => (<FormCalendar />)} />
                    <Route exact path="/navbar" render={() => (<Navbar />)} />


                </Switch>
            </div>
        )
    }
}

export default Main;
