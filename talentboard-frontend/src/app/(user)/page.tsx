import React from 'react';
import { Hero } from '../components/home/hero/Hero';
// import { Navbar } from './../components/header/navbar/Navbar';
import { Features } from '../components/home/features/Features';
import { Process } from '../components/home/process/Process';
import { Footer } from '../components/home/footer/Footer';
import GoogleAuthSection from '../components/google/GoogleAuthSection';
// import { GoogleAuthSection } from '@/app/components/google/GoogleAuthSection';

const page = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <Hero />
      <GoogleAuthSection />
      <Features />
      <Process />
      <Footer />
    </div>
  )
};

export default page;
