import React from 'react'
import { observer, inject } from 'mobx-react'
import './style/Sold.css'
import Icon from '../components/Icon'
@inject('petArrayStore')
@inject('pageStore')
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
        const { pageStore } = this.props
        pageStore.setPageState(0)
        this.props.history.push(`/?category=${category}`)
    }
    render() {
        const { petArrayStore } = this.props
        const array = petArrayStore.curArray.filter(pet => pet.status !== "available")
        console.log(array)
        let dogNum = array.filter(pet => pet.category.name === 'dog').length
        let catNum = array.filter(pet => pet.category.name === 'cat').length
        let birdNum = array.filter(pet => pet.category.name === 'bird').length
        const rabbitNum = array.filter(pet => pet.category.name === 'rabbit').length
        const hamstersNum = array.filter(pet => pet.category.name === 'hamsters').length
        const rankArray = [{ type: 'dog', num: dogNum }, { type: 'cat', num: catNum }, { type: 'bird', num: birdNum }, { type: 'rabbit', num: rabbitNum }, { type: 'hamsters', num: hamstersNum }].sort((a, b) => b.num - a.num)
        let maxNum = rankArray[0].num
        let curCount = 0
        const rankRes = [[], [], []]
        for (let i = 0; i < rankArray.length; i++) {
            if (curCount === 2) {
                rankRes[2].push(rankArray[i])
            } else {
                if (rankArray[i].num === maxNum) {
                    maxNum = rankArray[i].num
                    rankRes[curCount].push(rankArray[i])
                } else {
                    maxNum = rankArray[i].num
                    curCount++
                    rankRes[curCount].push(rankArray[i])

                }
            }
        }
        return (
            <div className='soldWrapper'>
                <div className='rankWrapper'>

                    <div className='awardWrapper'>
                        <div className='grassWrapper'>
                            <div className='grass right'>
                                <Icon name='grass' _className='grassIcon' />
                            </div>
                        </div>

                        <div className='award'>
                            <div className='plant'>
                                {rankRes[1].map(pet => {
                                    return (
                                        <div key={pet.type}>
                                            <div className='num'>{pet.num}</div>
                                            <div className='iconWrapper' onClick={() => { this.jumpToAva(pet.type) }}>
                                                <Icon name={pet.type} _className='rankIcon' />
                                            </div>
                                        </div>)
                                })}
                            </div>
                            <div className='sec' >
                                <Icon name='two' _className='numIcon' />
                            </div>
                        </div>
                        <div className='award'>
                            <div className='plant'>
                                {rankRes[0].map(pet => {
                                    return (
                                        <div key={pet.type}>
                                            <div className='num'>{pet.num}</div>
                                            <div className='iconWrapper' onClick={() => { this.jumpToAva(pet.type) }}>
                                                <Icon name={pet.type} _className='rankIcon' />
                                            </div>
                                        </div>)
                                })}
                            </div>
                            <div className='fir' >
                                <Icon name='one' _className='numIcon' />
                            </div>

                        </div>

                        <div className='award'>
                            <div className='plant'> {rankRes[2].map(pet => {
                                return (
                                    <div key={pet.type}>
                                        <div className='num'>{pet.num}</div>
                                        <div className='iconWrapper' onClick={() => { this.jumpToAva(pet.type) }}>
                                            <Icon name={pet.type} _className='rankIcon' />
                                        </div>
                                    </div>)
                            })}</div>
                            <div className='thr' >
                                <Icon name='three' _className='numIcon' />
                            </div>
                        </div>
                        <div className='grassWrapper'>
                            <div className='grass left'>
                                <Icon name='grass' _className='grassIcon' />
                            </div>
                        </div>
                    </div>

                </div>
                <div className='containWrapper white'>
                    <ul className='contain'>
                        {array.map((item) => {
                            return (
                                <li key={item.id}>
                                    <div className='liWrap clearfix'>
                                        <div className='imgWrapper'>
                                            <Icon name={item.category.name} _className='imgIcon' />
                                            <div className='petId'> {item.id}</div>
                                            <div className='name'>{item.name}</div>
                                            <div className='delete'>
                                                {
                                                    item.status === 'sold' ? <Icon name='red' _className='deleteIcon' /> : <Icon name='yellow' _className='deleteIcon' />
                                                }

                                            </div>
                                            <div className='tagsWrapper'> {item.tags.map(
                                                item => {
                                                    if (item.name !== 'team4') {
                                                        return <div className='tag'>
                                                            <div className='iconWrapper'>
                                                                <Icon name='tag' _className='tagIcon' />
                                                            </div>

                                                            <div className='tagName'> {item.name}</div>
                                                        </div>
                                                    }
                                                }
                                            )}</div>
                                        </div>
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        )
    }
}
export default Component