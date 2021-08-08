import React from 'react'
import { observer, inject } from 'mobx-react'
import {
    Form, Input, Button, Checkbox,
    Row,
    Col,
    Select
} from 'antd';
@inject('newPetStore', 'petArrayStore')
@observer
class Component extends React.Component {
    constructor(props) {
        super(props)
        const { newPetStore } = props
        this.state = {
            name: newPetStore.getName(),
            category: newPetStore.getCategory(),
            tags: newPetStore.getTags(),
            status: newPetStore.getStatus(),
            id: newPetStore.getId()
        }
    }



    onFinish = () => {
        const { newPetStore, petArrayStore } = this.props
        console.log(petArrayStore)
        newPetStore.addNewPet()
            .then(res => {
                console.log(res)
                petArrayStore.add(res.data)
                newPetStore.resetNewPet()
                window.alert('add success')
                this.refs.form.resetFields()
            })
            .catch(error => {
                console.log(error)
            })


    };
    onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);

    };

    formValuesChange = (values) => {
        const { newPetStore } = this.props
        const { id, category, name, tags, status } = values
        if (id) {
            newPetStore.setId(id)
        }
        if (category) {
            newPetStore.setCategory(category)
        }
        if (name) {

            newPetStore.setName(name)
        }
        if (tags) {
            newPetStore.setTags(tags)
        }
        if (status) {
            newPetStore.setStatus(status)
        }
    }
    render() {

        const { Option } = Select
        const { id, category, tags, status, name } = this.state
        const tagsValue = tags.map(tags => tags.name)
        return (
            <Form
                ref='form'

                name="basic"
                labelCol={{ span: 9 }}
                wrapperCol={{ span: 6 }}
                initialValues={{ remember: true }}
                onFinish={this.onFinish}
                onFinishFailed={this.onFinishFailed}
                onValuesChange={this.formValuesChange}
            >
                <Form.Item
                    label="id"
                    name="id"
                    initialValue={id}
                    rules={[{ required: true, message: 'Please input pet\' s id!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="name"
                    name="name"
                    initialValue={name}
                    rules={[{ required: true, message: 'Please input pet\'s name!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="category"
                    label="category"
                    initialValue={category.name}
                    hasFeedback
                    rules={[{ required: true, message: 'Please select pet\' s category!' }]}
                >
                    <Select placeholder="Please select pet' s category!">
                        <Option value="cat">Cat</Option>
                        <Option value="dog">Dog</Option>
                        <Option value="rabbit">Rabbit</Option>
                        <Option value="bird">Bird</Option>
                        <Option value="hamsters">Hamsters</Option>
                    </Select>
                </Form.Item>

                <Form.Item
                    name="status"
                    label="status"
                    initialValue={status}
                    hasFeedback
                    rules={[{ required: true, message: 'Please select pet\' s status!' }]}
                >
                    <Select placeholder="Please select pet' s status!">
                        <Option value="available">Available</Option>
                        <Option value="pending">Pending</Option>
                        <Option value="sold">Sold</Option>
                    </Select>
                </Form.Item>

                <Form.Item name="tags" label="tags" initialValue={tagsValue}>
                    <Checkbox.Group>
                        <Row>
                            <Col span={8}>
                                <Checkbox value="brave" style={{ lineHeight: '32px' }}>
                                    Brave
                                </Checkbox>
                            </Col>
                            <Col span={10}>
                                <Checkbox value="elegance" style={{ lineHeight: '32px' }}>
                                    Elegance
                                </Checkbox>
                            </Col>
                            <Col span={8}>
                                <Checkbox value="lazy" style={{ lineHeight: '32px' }}>
                                    Lazy
                                </Checkbox>
                            </Col>
                            <Col span={8}>
                                <Checkbox value="active" style={{ lineHeight: '32px' }}>
                                    Active
                                </Checkbox>
                            </Col>
                            <Col span={8}>
                                <Checkbox value="mild" style={{ lineHeight: '32px' }}>
                                    Mild
                                </Checkbox>
                            </Col>
                        </Row>
                    </Checkbox.Group>
                </Form.Item>
                <Form.Item wrapperCol={{ offset: 11, span: 16 }}>
                    <Button type="primary" htmlType="add">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        )
    }
}


export default Component