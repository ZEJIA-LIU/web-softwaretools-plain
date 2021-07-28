import React from 'react';
import './App.css'
import { HashRouter as Router } from "react-router-dom";
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

class App extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {

    }

    render() {
        return (
            <Router>
                <Header />
                <Main />
                <Footer />
            </Router>
        )
    }
}


export default App;
