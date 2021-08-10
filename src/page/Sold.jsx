import React from 'react'
import { observer, inject } from 'mobx-react'
import './style/Sold.css'
import Icon from '../components/Icon'
import cat from '../constant/img/cat.jpeg'
import dog from '../constant/img/dog.jpeg'
import bird from '../constant/img/bird.jpeg'
import rabbit from '../constant/img/rabbit.jpeg'
import hamsters from '../constant/img/hamsters.jpeg'
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
        const imgMap = {
            'dog': dog,
            'cat': cat,
            'bird': bird,
            'hamsters': hamsters,
            'rabbit': rabbit
        }
        return (
            <div className='soldWrapper'>
                <div className='soldTipWrap'>
                    <div className='soldTip'>
                        <Icon name='tips' _className='soldTipIcon'></Icon>
                        <div className='soldTipText'>
                            <Icon name='red' _className='tipRed' />
                            means the status of pet is SOLD!
                        </div>
                    </div>
                    <div className='soldTip'>
                        <Icon name='tips' _className='soldTipIcon'></Icon>
                        <div className='soldTipText'>
                            <Icon name='yellow' _className='tipRed' />
                            means the status of pet is PENDING!
                        </div >
                    </div>
                    <div className='soldTip'>
                        <Icon name='tips' _className='soldTipIcon'></Icon>
                        <div className='soldTipText'>
                            Below are best selling pets, click on the category icon to jump to available pets in this category!
                        </div>

                    </div>
                </div>
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
                                            <div className='iconWrapper' id={pet.type} onClick={() => { this.jumpToAva(pet.type) }}>
                                                <Icon name={pet.type} _className='rankIcon' data_cy={pet.type} />
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
                                            <div className='iconWrapper' id={pet.type} onClick={() => { this.jumpToAva(pet.type) }}>
                                                <Icon name={pet.type} _className='rankIcon' data_cy={pet.type} />
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
                                        <div className='iconWrapper' id={pet.type} onClick={() => { this.jumpToAva(pet.type) }}>
                                            <Icon name={pet.type} _className='rankIcon' data_cy={pet.type} />
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
                                            <img src={imgMap[item.category.name]} className='imgIcon' alt="" />
                                            <div className='petId'> {item.id}</div>
                                            <div className='name'>{item.name}</div>
                                            <div className='delete'>
                                                {
                                                    item.status === 'sold' ? <Icon name='red' _className='statusIcon' /> : <Icon name='yellow' _className='deleteIcon' />
                                                }

                                            </div>
                                            <div className='tagsWrapper'> {item.tags.map(
                                                item => {
                                                    if (item.name !== 'team4') {
                                                        return <div className='tag'>
                                                            <div className='iconWrapper'  >
                                                                <Icon name={item.name} _className='tagIcon' />
                                                            </div>

                                                            <div className={`tagName ${item.name}`}> {item.name}</div>
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