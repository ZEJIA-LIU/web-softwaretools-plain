import { Spin } from 'antd';
import React from 'react';
import './style/Loading.css'

class Component extends React.Component {
    render() {
        return (
            <div className='loading'>
                <Spin size="large" tip="loading..." />
            </div>
        )
    }
}

export default Component;