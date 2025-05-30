import React from 'react';


export const UserDashboardLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className='relative flex h-screen min-h-screen w-full flex-col bg-background dark:bg-background-dark'>
      <div className='w-full'>{children}</div>
    </div>
  );
};
