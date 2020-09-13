import React from 'react'
import { Form, Input, Button, Checkbox } from 'antd';
import './login.scss'
// import history from '../store/history';
import { useDispatch } from 'react-redux';
// import authReducer from './authReducer';
import { login } from './actions';

const layout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 20 },
};
const tailLayout = {
    wrapperCol: { offset: 4, span: 0 },
};
const btnLayout = {
    wrapperCol: { offset: 4, span: 16 },
};



export default function Login() {
    const dispatch = useDispatch();

    const onFinish = (values) => {
        dispatch(login(values))
    };

    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };


    return (
        <div className="login_body">
            <Form
                {...layout}
                name="basic"
                initialValues={{
                    remember: true,
                }}
                className="login_form"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}

            >
                <h2 className="text-center mb-4">Login</h2>
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your username!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item {...btnLayout} className="submit_btn" >
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}
