'use client';
import AuthForm from '@/app/components/AuthForm';
import React from 'react';

const SignInPage: React.FC = () => {
  return (
    <div>
      <AuthForm isRegister={false} />
    </div>
  ) 
    
};

export default SignInPage;
