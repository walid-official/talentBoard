'use client';
import React, { useState } from 'react';
import { Form, Input, Button, Select, Card, Typography, Upload, message } from 'antd';
import { motion } from 'framer-motion';
import {
  LogIn,
  UserPlus,
  Upload as UploadIcon,
} from 'lucide-react';
import Link from 'next/link';
import { useSigninMutation,useSignupMutation } from '@/apis/auth/queries';
import GoogleAuthSection from './google/GoogleAuthSection';


const { Option } = Select;
const { Title, Text } = Typography;

const AuthForm = ({ isRegister }: { isRegister: boolean }) => {
  const [form] = Form.useForm();
  const [avatarUrl, setAvatarUrl] = useState<string | null>(null);

  console.log('API URI:', process.env.NEXT_PUBLIC_API_URI);

  const { mutate: signup, isPending: isSignupLoading } = useSignupMutation();
  const { mutate: signin, isPending: isSigninLoading } = useSigninMutation();

  const onFinish = async (values: any) => {
    const action = isRegister ? signup : signin;
    action(values, {
      onSuccess: () => {
        message.success(`${isRegister ? 'Registered' : 'Logged in'} successfully!`);
        form.resetFields();
      },
      onError: () => {
        message.error('Something went wrong!');
      },
    });
  };

  const uploadProps = {
    beforeUpload: (file: any) => {
      const isImage = file.type.startsWith('image/');
      if (!isImage) {
        message.error('You can only upload image files!');
      } else {
        const reader = new FileReader();
        reader.onload = () => {
          setAvatarUrl(reader.result as string);
          form.setFieldsValue({ avatar: reader.result });
        };
        reader.readAsDataURL(file);
      }
      return false; // prevent auto upload
    },
    showUploadList: false,
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 p-4"
    >
      <Card className="w-full shadow-xl rounded-2xl">
        <div className="text-center mb-6">
          <Title level={3} className="flex items-center justify-center gap-2">
            {isRegister ? <UserPlus className="text-blue-500" size={24} /> : <LogIn className="text-green-500" size={24} />}
            {isRegister ? 'Create an Account' : 'Login to Your Account'}
          </Title>
          <Text type="secondary">
            {isRegister ? 'Join the freelance revolution 🚀' : 'Welcome back 👋'}
          </Text>
        </div>

        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
          autoComplete="off"
        >
          {isRegister && (
            <>
              <Form.Item name="name" label="Name" rules={[{ required: true, message: 'Please enter your name!' }]}>
                <Input placeholder="John Doe" />
              </Form.Item>

              <Form.Item name="role" label="Role" rules={[{ required: true, message: 'Select a role!' }]}>
                <Select placeholder="Select your role">
                  <Option value="freelancer">Freelancer</Option>
                  <Option value="client">Client</Option>
                </Select>
              </Form.Item>

              <Form.Item name="skills" label="Skills">
                <Select mode="tags" placeholder="Add skills">
                  <Option value="JavaScript">JavaScript</Option>
                  <Option value="React">React</Option>
                  <Option value="Node.js">Node.js</Option>
                </Select>
              </Form.Item>

              <Form.Item name="hourlyRate" label="Hourly Rate">
                <Input type="number" prefix="$" placeholder="e.g. 50" />
              </Form.Item>

              <Form.Item name="bio" label="Bio">
                <Input.TextArea rows={3} placeholder="A short intro about you..." />
              </Form.Item>

              <Form.Item name="avatar" label="Avatar">
                <Upload {...uploadProps}>
                  <Button icon={<UploadIcon size={16} />}>Upload Avatar</Button>
                </Upload>
                {avatarUrl && <img src={avatarUrl} alt="Avatar" className="mt-3 w-16 h-16 rounded-full object-cover border" />}
              </Form.Item>
            </>
          )}

          <Form.Item name="email" label="Email" rules={[{ required: true, message: 'Enter your email!' }]}>
            <Input type="email" placeholder="you@example.com" />
          </Form.Item>

          <Form.Item name="password" label="Password" rules={[{ required: true, message: 'Enter your password!' }]}>
            <Input.Password placeholder="********" />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="w-full"
              size="large"
              loading={isRegister ? isSignupLoading : isSigninLoading}
            >
              {isRegister ? 'Register' : 'Login'}
            </Button>
          </Form.Item>

          <div className="text-center mt-4">
            <Text type="secondary">
              {isRegister ? (
                <>
                  Already have an account?{' '}
                  <Link href="/signin" className="text-blue-600 font-semibold hover:underline">
                    Login
                  </Link>
                </>
              ) : (
                <>
                  Don’t have an account?{' '}
                  <Link href="/signup" className="text-blue-600 font-semibold hover:underline">
                    Register
                  </Link>
                </>
              )}
            </Text>
          </div>
        </Form>
        <GoogleAuthSection />
      </Card>
    </motion.div>
  );
};

export default AuthForm;
