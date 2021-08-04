import React from 'react'
import './style/Footer.css'
import Icon from './Icon'
class Component extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <footer>
                <div className='contact'>Contact us</div>
                <div className='detial'>
                    <div className='item'>
                        <div className='footerIconWrapper'>
                            <Icon name='phone' _className='footIcon' />
                        </div>

                        <div>xxx-xxxxxxxxx </div>
                    </div>
                    <div className='item'>
                        <div className='footerIconWrapper'>
                            <Icon name='email' _className='footIcon' />
                        </div>
                        <div>xxxxxxxxx@xx.com </div>
                    </div>
                    <div className='item'>
                        <div className='footerIconWrapper'>
                            <Icon name='adress' _className='footIcon' />
                        </div>
                        <div>No.xx at xxxStreet </div>
                    </div>

                </div>
                <div className='copyRightWrapper'>
                    <div className='copyRightIconWrapper'>
                        <Icon name='copyRight' _className='copyRightIcon' />
                    </div>
                    <div className='copyText'>team4.petStore</div>
                </div>

            </footer>
        )
    }
}
export default Component