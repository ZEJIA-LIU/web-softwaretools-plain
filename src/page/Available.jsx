import React from 'react'
import { findByStatus } from '../module/index'
class Component extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        findByStatus("available")
            .then(res => {
                const test = res.filter(item => item.category && item.category.name === "dog")
                console.log(test)
            })
        return (
            <div>ava</div>
        )
    }
}
export default Component