'use client';
import React from 'react';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { useState } from 'react';
export function Providers({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>
        <AntdRegistry>
      <ReactQueryDevtools initialIsOpen={false} />
        {children}  
        </AntdRegistry>
      </QueryClientProvider>
  );
}
