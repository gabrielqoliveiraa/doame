import React from 'react';
import { QueryClientProvider } from 'react-query';
import { queryClient } from '../../../../service/queryClient';

export default function Provider({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
