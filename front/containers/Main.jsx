import React from 'react';

import { Switch, Route } from 'react-router-dom';

import FormPostulacion from '../components/formPostulacion';

class Main extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/formRegister" render={() => (<FormPostulacion />)} />

                </Switch>
            </div>
        )
    }
}

export default Main;
