import React from 'react'
import {
    Switch,
    Route,
} from "react-router-dom";
import Add from '../page/Add'
import Available from '../page/Available'
import Sold from '../page/Sold'
class Component extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <main>
                <Switch>
                    <Route path="/sold">
                        <Sold />
                    </Route>
                    <Route path="/add">
                        <Add />
                    </Route>
                    <Route path="/">
                        <Available />
                    </Route>
                </Switch>
            </main>
        )
    }
}

export default Component