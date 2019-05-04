import React from 'react';

import { Switch, Route } from 'react-router-dom';

import FormPostulacion from '../components/formPostulacion';
import FormCalendar from '../components/formCalendar';

class Main extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/calendar" render={() => (<FormCalendar />)} />

                </Switch>
            </div>
        )
    }
}

export default Main;
