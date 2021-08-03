import React from 'react'
import { Link } from "react-router-dom";
import './style/Header.css'
import logo from '../constant/img/logo.jpeg'
import Icon from './Icon'

class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            select: 0
        }
    }

    componentDidMount() {
        const hash = window.location.hash
        if (hash.includes('sold')) {
            this.setState({ select: 1 })
        } else if (hash.includes('add')) {
            this.setState({ select: 2 })
        } else {
            this.setState({ select: 0 })
        }
    }

    changePage = () => {
        setTimeout(() => {
            const hash = window.location.hash
            if (hash.includes('sold')) {
                this.setState({ select: 1 })
            } else if (hash.includes('add')) {
                this.setState({ select: 2 })
            } else {
                this.setState({ select: 0 })
            }
        })
    }
    render() {
        const { select } = this.state
        return (

            <header className='headerWrapper'>
                <div className='logoWrapper'>
                    <img src={logo} height='50px' width='80px' />
                </div>

                <div className='showAndRankWrapper'>
                    <div className='showAndRank'>
                        <div className='pageButton'>
                            <Link className={select === 1 ? ' link select ' : 'link'} to="/sold" onClick={this.changePage} >Rank</Link>
                        </div>
                        <div className='pageButton'>
                            <Link className={select === 0 ? ' link select ' : 'link'} to="/" onClick={this.changePage} >Show</Link>
                        </div>

                    </div>

                </div>
                <div className='addWrap'>
                    <Link className='add' to="/add" onClick={this.changePage} >
                        {
                            select === 2 ? <Icon name='add' _className='addSelect' /> :
                                <Icon name='add' />
                        }
                    </Link>

                </div>


            </header>
        )
    }
}
export default Header