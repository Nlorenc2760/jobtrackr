import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Checkbox, Form, Input } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';

import './LoginPage.scss';

export default function LoginPage() {
	const onFinish = (values) => console.log(values);

	return (
		<div className="LoginPage">
			<div className="Box">
				<Form
					initialValues={{ remember: true }}
					onFinish={onFinish}
					autoComplete="off"
					size="large"
				>
					<Form.Item
						name="email"
						rules={[
							{
								required: true,
								message: 'Please input your email!',
							},
						]}
					>
						<Input
							prefix={<UserOutlined className="LoginIcons" />}
							placeholder="Email"
						/>
					</Form.Item>
					<Form.Item
						name="password"
						rules={[
							{
								required: true,
								message: 'Please input your password!',
							},
						]}
					>
						<Input.Password
							prefix={<LockOutlined className="LoginIcons" />}
							placeholder="Password"
						/>
					</Form.Item>
					<Form.Item
						name="remember"
						valuePropName="checked"
						wrapperCol={{ offset: 8, span: 16 }}
					>
						<Checkbox>Remember me</Checkbox>
					</Form.Item>
					<Form.Item>
						<Button type="primary" htmlType="submit" block>
							Log In
						</Button>
					</Form.Item>
				</Form>
				Don&#39;t have a account? <Link to="/register">Click here</Link>{' '}
				to register.
			</div>
		</div>
	);
}
