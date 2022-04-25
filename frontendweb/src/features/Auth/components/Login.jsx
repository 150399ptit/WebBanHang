import { Form, Input, Button, Checkbox, Row, Col } from 'antd';
import "antd/dist/antd.css";
import userApi from '../../../api/userApi';

const Login = () => {
    const onFinish = (values) => {
        console.log('Success:', values);
    };
    const data ={
        email:"tinh1531999@gmail.com",
        password:"123457"
    }
    const submit = () =>{
        userApi.login(data).then(res =>{
            console.log(res.data.msg);
        }).catch(reject =>{
            console.log(reject.data.msg);
        })
    }

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Row justify="center" align="center">
            <Form
                name="basic"
                labelCol={{ span: 8, }}
                wrapperCol={{ span: 16, }}
                initialValues={{ remember: true, }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
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

                <Form.Item
                    name="remember"
                    valuePropName="checked"
                    wrapperCol={{
                        offset: 0,
                        span: 16,
                    }}
                >
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item
                    wrapperCol={{
                        offset: 0,
                        span: 16,
                    }}
                >
                    <Button type="primary" htmlType="submit" onClick={submit}>
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </Row>
    );
};


export default Login;
