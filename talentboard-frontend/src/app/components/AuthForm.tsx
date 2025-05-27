"use client"
import React from 'react';
import { Form, Input, Button, Select } from 'antd';
import axios from 'axios';

const { Option } = Select;

const AuthForm = ({ isRegister }: { isRegister: boolean }) => {
  const onFinish = async (values: { email: string; password: string; name?: string; role?: string; skills?: string[]; hourlyRate?: number; bio?: string; avatar?: string }) => {
    const url = isRegister ? 'http://localhost:5000/api/auth/register' : 'http://localhost:5000/api/auth/login';
    try {
      const response = await axios.post(url, values);
      console.log('Success:', response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <Form
      name="auth"
      onFinish={onFinish}
      layout="vertical"
    >
      {isRegister && (
        <>
          <Form.Item
            name="name"
            label="Name"
            rules={[{ required: true, message: 'Please input your name!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="role"
            label="Role"
            rules={[{ required: true, message: 'Please select your role!' }]}
          >
            <Select>
              <Option value="freelancer">Freelancer</Option>
              <Option value="client">Client</Option>
            </Select>
          </Form.Item>
          <Form.Item
            name="skills"
            label="Skills"
          >
            <Select mode="tags" style={{ width: '100%' }} placeholder="Skills">
              <Option value="JavaScript">JavaScript</Option>
              <Option value="React">React</Option>
              <Option value="Node.js">Node.js</Option>
            </Select>
          </Form.Item>
          <Form.Item
            name="hourlyRate"
            label="Hourly Rate"
          >
            <Input type="number" />
          </Form.Item>
          <Form.Item
            name="bio"
            label="Bio"
          >
            <Input.TextArea />
          </Form.Item>
          <Form.Item
            name="avatar"
            label="Avatar"
          >
            <Input />
          </Form.Item>
        </>
      )}
      <Form.Item
        name="email"
        label="Email"
        rules={[{ required: true, message: 'Please input your email!' }]}
      >
        <Input type="email" />
      </Form.Item>
      <Form.Item
        name="password"
        label="Password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          {isRegister ? 'Register' : 'Login'}
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AuthForm;