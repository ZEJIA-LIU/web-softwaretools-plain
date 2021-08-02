import React from 'react'
import { observer, inject } from 'mobx-react'


@inject('petArrayStore')
@observer
class Component extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            category: 'all',
            tags: 'all'
        }

    }

    jumpToAva = (category) => {
        console.log(this.props)
        this.props.history.push(`/?category=${category}`)
    }
    render() {

        const { petArrayStore } = this.props
        const array = petArrayStore.curArray.filter(pet => pet.status !== "available")
        const dogNum = petArrayStore.curArray.filter(pet => pet.status !== "available" && pet.category.name === 'dog').length
        const catNum = petArrayStore.curArray.filter(pet => pet.status !== "available" && pet.category.name === 'cat').length
        const birdNum = petArrayStore.curArray.filter(pet => pet.status !== "available" && pet.category.name === 'bird').length
        const rabbitNum = petArrayStore.curArray.filter(pet => pet.status !== "available" && pet.category.name === 'rabbit').length
        const hamstersNum = petArrayStore.curArray.filter(pet => pet.status !== "available" && pet.category.name === 'hamsters').length
        const rankArray = [{ type: 'dog', num: dogNum }, { type: 'cat', num: catNum }, { type: 'bird', num: birdNum }, { type: 'rabbit', num: rabbitNum }, { type: 'hamsters', num: hamstersNum }].sort((a, b) => b.num - a.num)
        return (
            <>
                <ul>
                    {rankArray.map(item => {
                        return (
                            <li key={item.type}>
                                <span onClick={() => {
                                    this.jumpToAva(item.type)
                                }}>{item.type}:</span>
                                <span>{item.num}</span>
                            </li>
                        )
                    })}
                </ul>
                <ul>
                    {array.map((item) => {
                        return (
                            <li key={item.id}>
                                <div>
                                    <div> name:  {item.name}</div>
                                    <div>id:{item.id}</div>
                                    <div>category:{item.category.name}</div>
                                    <div> tags:{item.tags.map(
                                        item => {
                                            if (item.name !== 'team4') {
                                                return <div>{item.name}</div>
                                            }
                                        }

                                    )}</div>



                                </div>
                            </li>
                        )
                    })}
                </ul>
            </>
        )
    }
}
export default Component