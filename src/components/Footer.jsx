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
                        <Icon name='phone' _className='footIcon' />
                        <div>xxx-xxxxxxxxx </div>
                    </div>
                    <div className='item'>
                        <Icon name='email' _className='footIcon' />
                        <div>xxxxxxxxx@xx.com </div>
                    </div>
                    <div className='item'>
                        <Icon name='address' _className='footIcon2' />
                        <div>No.xx at xxxStreet </div>
                    </div>

                </div>
            </footer>
        )
    }
}
export default Component