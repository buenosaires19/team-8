import React from 'react';

import { Switch, Route } from 'react-router-dom';

import FormPostulacion from '../components/formPostulacion';
import Destacada from '../components/Destacada';
import Finalistas from '../components/Finalistas';

class Main extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/formRegister" render={() => (<FormPostulacion />)} />
                    <Route exact path="/destacada" render={() => (<Destacada />)} />
                    <Route exact path="/finalistas" render={() => (<Finalistas />)} />

                </Switch>
            </div>
        )
    }
}

export default Main;
