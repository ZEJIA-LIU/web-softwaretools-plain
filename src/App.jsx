import React from 'react';
import './App.css'
import { HashRouter as Router } from "react-router-dom";
import { Provider } from 'mobx-react'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import NewPetStore from './store/newPet'
import PetArrayStore from './store/petArray'
import { petArray } from './constant/petData'
import { findAll, addPet } from './module/index'
class App extends React.Component {
    constructor(props) {
        super(props)
        this.newPetStore = new NewPetStore()
        this.petArrayStore = new PetArrayStore()
        this.state = {
            loading: false
        }
    }
    componentDidMount() {
        const { add } = this.petArrayStore
        findAll().then(res => {
            if (res.length < 15) {
                this.upLoadData()
                findAll().then(res => {
                    for (let i = 0; i < res.length; i++) {
                        add(res[i])
                    }
                })
                this.setState({ loading: true })
            } else {
                for (let i = 0; i < res.length; i++) {
                    add(res[i])
                }
                this.setState({ loading: true })
            }
        }).catch(err => {
            console.log(err)
        })

    }


    upLoadData = () => {
        for (let i = 0; i < petArray.length; i++) {
            addPet(petArray[i]).then(res => {
                console.log(`add${petArray[i].name}success: ${res}`)
            }).catch((err) => {
                console.log(`add${petArray[i].name}fail: ${err}`)
            })
        }
    }
    render() {
        const { loading } = this.state
        return (

            loading ? <Provider newPetStore={this.newPetStore} petArrayStore={this.petArrayStore}>
                <Router>
                    <Header />
                    <Main />
                    <Footer />
                </Router>
            </Provider > : <div>loading</div>


        )
    }
}


export default App;
