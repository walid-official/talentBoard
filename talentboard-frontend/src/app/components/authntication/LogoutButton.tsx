"use client"
import { logout } from '@/app/utils/auth';

export const LogoutButton = () => {
  return (
    <button className='cursor-pointer bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-3.5 rounded-xl hover:bg-white/20 transition duration-300' onClick={logout}>
      Logout
    </button>
  );
};
