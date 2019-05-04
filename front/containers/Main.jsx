import React from 'react';

import { Switch, Route } from 'react-router-dom';

import FormPostulacion from '../components/formPostulacion';
import FormCandidata from '../components/formCandidata';
import Home from '../components/Home';
import Finalistas from '../components/Finalistas';

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
                    <Route exact path="/finalistas" render={() => (<Finalistas />)} />

                </Switch>
            </div>
        )
    }
}

export default Main;
