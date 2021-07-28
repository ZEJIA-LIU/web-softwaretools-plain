import React from 'react'
import { observer, inject } from 'mobx-react'
import AddForm from '../components/AddForm'
@inject('newPetStore')
@observer
class Component extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <AddForm />
        )
    }
}
export default Component