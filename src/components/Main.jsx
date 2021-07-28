import React from 'react'
import {
    Switch,
    Route,
} from "react-router-dom";
import { Provider } from 'mobx-react'
import NewPetStore from '../store/newPet'
import Add from '../page/Add'
import Available from '../page/Available'
import Sold from '../page/Sold'
class Component extends React.Component {
    constructor(props) {
        super(props)
        this.newPetStore = new NewPetStore()
    }
    render() {
        return (
            <Provider newPetStore={this.newPetStore}>
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
            </Provider>
        )
    }
}

export default Component