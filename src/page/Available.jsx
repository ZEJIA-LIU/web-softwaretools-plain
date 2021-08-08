import React from 'react'
import { observer, inject } from 'mobx-react'
import { Form, Button, Select } from 'antd';
import { rightTag, rihtCategory } from '../util/index'
import './style/Ava.css'
import Icon from '../components/Icon'
import cat from '../constant/img/cat.jpeg'
import dog from '../constant/img/dog.jpeg'
import bird from '../constant/img/bird.jpeg'
import rabbit from '../constant/img/rabbit.jpeg'
import hamsters from '../constant/img/hamsters.jpeg'
@inject('petArrayStore')
@observer
class Component extends React.Component {
    constructor(props) {
        super(props)
        const { location } = props
        const { search } = location
        let category = 'all'
        let tag = 'all'
        if (search) {
            category = search.split('=')[1].split('&')[0]
            tag = search.split('=')[2]
        }
        const { petArrayStore } = props
        this.state = {
            category: category || 'all',
            tag: tag || 'all',
            petArray: petArrayStore.curArray
        }
    }


    onFinish = (values) => {
        const { category, tag } = values
        this.setState({ category, tag })
    }
    render() {
        const { Option } = Select
        const { petArrayStore } = this.props
        const { category, tag, petArray } = this.state
        const array = petArray.filter(pet => pet.status === "available").filter((item) => rightTag(tag, item) === true).filter(item => rihtCategory(category, item))
        const imgMap = {
            'dog': dog,
            'cat': cat,
            'bird': bird,
            'hamsters': hamsters,
            'rabbit': rabbit
        }
        return (
            <div className='avaWrapper'>
                <div className='tipsWrapper'>
                    <div className='tips'>
                        <div className='tipIconWrapper'>
                            <Icon name='tips' _className='tipIcon' />
                        </div>
                        <div className='tipText'>
                            Have a look at pets AVAILABLE here in our store today!
                        </div>

                    </div>
                </div>
                <div className='formWrapper'>
                    <div className='title'> select your pet </div>
                    <Form
                        name="basic"
                        labelCol={{ span: 9 }}
                        wrapperCol={{ span: 6 }}
                        initialValues={{ remember: true }}
                        onFinish={this.onFinish}
                        onFinishFailed={this.onFinishFailed}
                    >
                        <Form.Item
                            name="category"
                            label="category"
                            hasFeedback
                            rules={[{ required: true, message: 'Please select pet\' s category!' }]}
                            initialValue={category}
                        >
                            <Select placeholder="Please select pet' s category!">
                                <Option value="all">All</Option>
                                <Option value="cat">Cat</Option>
                                <Option value="dog">Dog</Option>
                                <Option value="rabbit">Rabbit</Option>
                                <Option value="bird">Bird</Option>
                                <Option value="hamsters">Hamsters</Option>
                            </Select>
                        </Form.Item>


                        <Form.Item
                            name="tag"
                            label="tag"
                            hasFeedback
                            initialValue={tag}
                            rules={[{ required: true, message: 'Please select pet\' s tag!' }]}
                        >
                            <Select placeholder="Please select pet' s status!">
                                <Option value="all">All</Option>
                                <Option value="brave">Brave</Option>
                                <Option value="mild">Mild</Option>
                                <Option value="active">Active</Option>
                                <Option value="lazy">Lazy</Option>
                                <Option value="elegance">Elegance</Option>
                            </Select>
                        </Form.Item>


                        <Form.Item wrapperCol={{ offset: 11, span: 16 }}>
                            <Button type="primary" htmlType="add">
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
                <div className='containWrapper'>
                    <ul className='contain'>
                        {array.map((item) => {

                            return (
                                <li key={item.id}>
                                    <div className={`liWrap clearfix ${item.category.name}`}>
                                        <div className='imgWrapper'>
                                            <img src={imgMap[item.category.name]} className='imgIcon' alt="" />

                                            <div className='petId'> {item.id}</div>
                                            <div className='name'>{item.name}</div>
                                            <div onClick={() => {
                                                petArrayStore.delete(item.id).then(res => {
                                                    this.setState({ petArray: petArrayStore.curArray })
                                                })

                                            }} className='delete'>
                                                <Icon name='delete' _className='deleteIcon' />
                                            </div>
                                            <div className='tagsWrapper'> {item.tags.map(
                                                item => {
                                                    if (item.name !== 'team4') {
                                                        return <div className='tag'>
                                                            <div className='iconWrapper'>
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