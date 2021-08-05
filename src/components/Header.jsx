import React from 'react'
import { Link } from "react-router-dom";
import './style/Header.css'
import logo from '../constant/img/logo.png'
import Icon from './Icon'
import { inject, observer } from 'mobx-react'
@inject('pageStore')
@observer
class Header extends React.Component {
    changePage = () => {
        const { pageStore } = this.props
        const { setPageState } = pageStore
        setTimeout(() => {
            const hash = window.location.hash
            if (hash.includes('sold')) {
                setPageState(1)
            } else if (hash.includes('add')) {
                setPageState(2)
            } else {
                setPageState(0)
            }
        })
    }
    componentWillMount() {
        const { pageStore } = this.props
        const { setPageState } = pageStore
        const hash = window.location.hash
        if (hash.includes('sold')) {
            setPageState(1)
        } else if (hash.includes('add')) {
            setPageState(2)
        } else {
            setPageState(0)
        }
    }
    render() {
        const { pageStore } = this.props
        const { pageState } = pageStore
        return (

            <header className='headerWrapper'>
                <div className='logoWrapper'>
                    <img src={logo} height='50px' width='60px' />
                </div>

                <div className='showAndRankWrapper'>
                    <div className='showAndRank'>
                        <div className='pageButton'>
                            <Link className={pageState === 1 ? ' link select ' : 'link'} to="/sold" onClick={this.changePage} >Rank</Link>
                        </div>
                        <div className='pageButton'>
                            <Link className={pageState === 0 ? ' link select ' : 'link'} to="/" onClick={this.changePage} >Show</Link>
                        </div>

                    </div>

                </div>
                <div className='addWrap'>
                    <Link className='add' to="/add" onClick={this.changePage} >
                        {
                            pageState === 2 ? <Icon name='add-black' _className='addSelect' /> : <Icon name='add' />

                        }
                    </Link>

                </div>


            </header>
        )
    }
}
export default Header