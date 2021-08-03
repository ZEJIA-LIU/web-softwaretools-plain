import React from 'react'
import { observer, inject } from 'mobx-react'
import AddForm from '../components/AddForm'
import ChangeStatus from '../components/ChangeStatus'
import './style/Add.css'
@inject('newPetStore')
@observer
class Component extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className='addWrapper'>
                <div className='addFormWrapper'>
                    <div className='title'> add a new pet</div>
                    <AddForm className='addForm' />
                </div>
                <div className='addFormWrapper'>
                    <div className='title'> change pet's status</div>
                    <ChangeStatus className='addForm' />
                </div>


            </div>
        )
    }
}
export default Component