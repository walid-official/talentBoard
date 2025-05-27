'use client';
import AuthForm from '@/app/components/AuthForm';
import React from 'react';

const SignupPage: React.FC = () => {
  return (  
    <div>
       <AuthForm isRegister={true} />
    </div>
  )
};

export default SignupPage;
