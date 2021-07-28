import React from 'react'
import { Link } from "react-router-dom";

class Header extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <header>
                <nav>
                    <ul>
                        <li>
                            <Link to="/add">Add</Link>
                        </li>
                        <li>
                            <Link to="/">Available</Link>
                        </li>
                        <li>
                            <Link to="/sold">Sold</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        )
    }
}
export default Header