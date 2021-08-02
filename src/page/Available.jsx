import React from 'react'
import { observer, inject } from 'mobx-react'
import {
    Form, Button,
    Select
} from 'antd';
import { rightTag, rihtCategory } from '../util/index'
@inject('petArrayStore')
@observer
class Component extends React.Component {
    constructor(props) {
        super(props)
        const { location } = props
        const { search } = location
        console.log(search)
        const category = search.split('=')[1]
        this.state = {
            category: category || 'all',
            tag: 'all'
        }
    }

    componentDidMount() {
        const { petArrayStore } = this.props
        console.log(petArrayStore.curArray)
    }
    onFinish = (values) => {
        const { category, tag } = values
        this.setState({ category, tag })
    }
    render() {
        const { Option } = Select
        const { petArrayStore } = this.props
        const { category, tag } = this.state
        const array = petArrayStore.curArray.filter(pet => pet.status === "available").filter((item) => rightTag(tag, item) === true).filter(item => rihtCategory(category, item))

        return (
            <>
                <Form
                    name="basic"
                    labelCol={{ span: 4 }}
                    wrapperCol={{ span: 12 }}
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
                            <Option value="lazy">Lzay</Option>
                            <Option value="elegance">Elegance</Option>
                        </Select>
                    </Form.Item>


                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Button type="primary" htmlType="add">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
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