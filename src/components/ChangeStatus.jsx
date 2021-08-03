import React from 'react'
import { observer, inject } from 'mobx-react'
import { changeStats } from '../module/index'
import {
    Form, Input, Button,
    Select
} from 'antd';
@inject('petArrayStore')
@observer
class Component extends React.Component {
    constructor(props) {
        super(props)

    }

    onFinish = (values) => {
        const { petArrayStore } = this.props
        const { id, status } = values
        console.log(id, status)
        changeStats(id, status).then((res) => {
            console.log(res)
            petArrayStore.changeStatus(id)
            console.log(petArrayStore.curArray)
            window.alert('change success')
        }).catch(err => {
            changeStats(id, status).then((res) => {
                console.log(res)
                window.alert('change success')
            }).catch(err => { window.alert('change fail, please try again') })
        })

    };
    onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);

    };


    render() {

        const { Option } = Select

        return (
            <Form
                name="basic"
                labelCol={{ span: 9 }}
                wrapperCol={{ span: 6 }}
                initialValues={{ remember: true }}
                onFinish={this.onFinish}
                onFinishFailed={this.onFinishFailed}
            >
                <Form.Item
                    label="id"
                    name="id"
                    rules={[{ required: true, message: 'Please input pet\' s id!' }]}
                >
                    <Input />
                </Form.Item>


                <Form.Item
                    name="status"
                    label="status"
                    hasFeedback
                    rules={[{ required: true, message: 'Please select pet\' s status!' }]}
                >
                    <Select placeholder="Please select pet' s status!">
                        <Option value="available">Available</Option>
                        <Option value="pending">Pending</Option>
                        <Option value="sold">Sold</Option>
                    </Select>
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