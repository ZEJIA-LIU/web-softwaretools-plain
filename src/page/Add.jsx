import React from 'react'
import { observer, inject } from 'mobx-react'
import AddForm from '../components/AddForm'
import ChangeStatus from '../components/ChangeStatus'
@inject('newPetStore')
@observer
class Component extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <>
                <AddForm />
                <ChangeStatus />
            </>
        )
    }
}
export default Component